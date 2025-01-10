"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const crypto_1 = __importDefault(require("crypto"));
const cors_1 = __importDefault(require("cors"));
const winston_1 = __importDefault(require("winston"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = require("./userSchema");
const MongoDb_Url_Local = "mongodb+srv://abhinavsmile7:Yiv2jFJkDp15ZkLl@cluster0.hore4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Initialize logger
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: 'server.log' })
    ]
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://your-frontend-url.com',
    methods: ['GET', 'POST']
}));
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
const rooms = new Map();
const users = new Map();
// Simulate database call to fetch user data
function fetchUserData(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose_1.default
            .connect(MongoDb_Url_Local)
            .then(() => {
            console.log("Connected to the database");
        })
            .catch((err) => {
            console.log(err);
        });
        const user = yield userSchema_1.User.findById(userId);
        return user;
    });
}
function broadcastToRoom(roomId, message, excludeClient) {
    const room = rooms.get(roomId);
    if (!room)
        return;
    room.clients.forEach(client => {
        if (client !== excludeClient && client.readyState === ws_1.WebSocket.OPEN) {
            client.send(JSON.stringify(message));
        }
    });
}
function broadcastRoomsList() {
    const roomsList = getRoomsList();
    wss.clients.forEach(client => {
        if (client.readyState === ws_1.WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'rooms-list',
                rooms: roomsList,
            }));
        }
    });
}
function getRoomsList() {
    return Array.from(rooms.entries()).map(([id, room]) => ({
        id,
        name: room.name,
        participants: room.clients.size
    }));
}
// REST API for fetching room data
app.get('/rooms', (_req, res) => {
    res.json(getRoomsList());
});
// WebSocket heartbeat (keep-alive)
function heartbeat() {
    this.isAlive = true;
}
setInterval(() => {
    wss.clients.forEach((ws) => {
        var _a;
        if (!ws.isAlive) {
            logger.info(`Terminating inactive connection: ${(_a = users.get(ws)) === null || _a === void 0 ? void 0 : _a.id}`);
            return ws.terminate();
        }
        ws.isAlive = false;
        ws.ping();
    });
}, 30000);
wss.on('connection', (ws) => __awaiter(void 0, void 0, void 0, function* () {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    ws.on('message', (data) => __awaiter(void 0, void 0, void 0, function* () {
        let message;
        try {
            message = JSON.parse(data);
        }
        catch (err) {
            ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
            logger.error('Invalid message format');
            return;
        }
        if (message.type === 'init-user') {
            const userId = message.userId;
            try {
                const userData = yield fetchUserData(userId);
                users.set(ws, { id: userId, data: userData });
                logger.info(`User connected: ${userId}`);
                ws.send(JSON.stringify({
                    type: 'user-initialized',
                    userData
                }));
            }
            catch (err) {
                ws.send(JSON.stringify({ type: 'error', message: 'Failed to fetch user data' }));
                logger.error(`Failed to fetch user data for userId: ${userId}`);
            }
            return;
        }
        const user = users.get(ws);
        if (!user) {
            ws.send(JSON.stringify({ type: 'error', message: 'User not initialized' }));
            logger.error('User not initialized');
            return;
        }
        switch (message.type) {
            case 'get-rooms':
                ws.send(JSON.stringify({
                    type: 'rooms-list',
                    rooms: getRoomsList()
                }));
                break;
            case 'create-room':
                const roomId = crypto_1.default.randomBytes(4).toString('hex');
                rooms.set(roomId, {
                    name: message.name,
                    clients: new Set([ws]),
                    shapes: {
                        rectangles: [],
                        circles: [],
                        arrows: [],
                        scribbles: [],
                        text: []
                    }
                });
                ws.roomId = roomId;
                ws.send(JSON.stringify({
                    type: 'room-created',
                    roomId,
                }));
                logger.info(`Room created: ${roomId} by user ${user.id}`);
                broadcastRoomsList();
                break;
            case 'join-room':
                const room = rooms.get(message.roomId);
                if (room) {
                    room.clients.add(ws);
                    ws.roomId = message.roomId;
                    ws.send(JSON.stringify({
                        type: 'room-joined',
                        roomId: message.roomId,
                        shapes: room.shapes
                    }));
                    broadcastToRoom(message.roomId, {
                        type: 'participants-update',
                        participants: Array.from(room.clients).map(client => {
                            var _a;
                            return ({
                                id: (_a = users.get(client)) === null || _a === void 0 ? void 0 : _a.id
                            });
                        })
                    });
                }
                else {
                    ws.send(JSON.stringify({
                        type: 'join-failed',
                        message: `Room ${message.roomId} not found`
                    }));
                    logger.warn(`Join-room failed: Room ${message.roomId} not found for user ${user.id}`);
                }
                break;
            case 'shape-update':
                const targetRoom = rooms.get(message.roomId);
                if (targetRoom) {
                    targetRoom.shapes = message.shapes;
                    broadcastToRoom(message.roomId, message, ws);
                }
                else {
                    ws.send(JSON.stringify({ type: 'error', message: 'Room not found for shape update' }));
                    logger.warn(`Shape update failed: Room ${message.roomId} not found for user ${user.id}`);
                }
                break;
            default:
                ws.send(JSON.stringify({ type: 'error', message: 'Unknown message type' }));
                logger.error(`Unknown message type: ${message.type}`);
        }
    }));
    ws.on('close', () => {
        const user = users.get(ws);
        if (ws.roomId) {
            const room = rooms.get(ws.roomId);
            if (room) {
                room.clients.delete(ws);
                if (room.clients.size === 0) {
                    rooms.delete(ws.roomId);
                    logger.info(`Room deleted: ${ws.roomId}`);
                    broadcastRoomsList();
                }
                else {
                    broadcastToRoom(ws.roomId, {
                        type: 'participants-update',
                        participants: Array.from(room.clients).map(client => {
                            var _a;
                            return ({
                                id: (_a = users.get(client)) === null || _a === void 0 ? void 0 : _a.id
                            });
                        })
                    });
                }
            }
        }
        users.delete(ws);
        logger.info(`User disconnected: ${(user === null || user === void 0 ? void 0 : user.id) || 'unknown'}`);
    });
}));
server.listen(3001, () => {
    logger.info('Server running on port 3001');
    console.log('Server running on port 3001');
});
