import { useState, useEffect } from 'react';

const RoomManagement = ({ onJoinRoom, userId }) => {
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [ws, setWs] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = () => {
      // Send the user ID to initialize the user on the backend
      socket.send(JSON.stringify({ type: 'init-user', userId }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.type) {
        case 'user-initialized':
          setUserData(data.userData);
          socket.send(JSON.stringify({ type: 'get-rooms' })); // Fetch rooms after user is initialized
          break;

        case 'rooms-list':
          setRooms(data.rooms);
          break;

        case 'room-created':
        case 'room-joined':
          onJoinRoom(data.roomId, socket);
          break;

        default:
          console.warn('Unhandled message type:', data.type);
      }
    };

    setWs(socket);
    // return () => socket.close();
  }, [userId, onJoinRoom]);

  const createRoom = () => {
    if (!roomName.trim()) return;
    ws.send(
      JSON.stringify({
        type: 'create-room',
        name: roomName,
      })
    );
  };

  const joinRoomWithCode = () => {
    if (!joinCode.trim()) return;
    ws.send(
      JSON.stringify({
        type: 'join-room',
        roomId: joinCode,
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {userData && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Welcome, {userData.name}!</h2>
            <p className="text-gray-600">Email: {userData.email}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Create New Room</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Room Name"
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={createRoom}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Create Room
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Join with Code</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="Enter Room Code"
              className="flex-1 p-2 border rounded"
            />
            <button
              onClick={joinRoomWithCode}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Join Room
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
          <div className="grid gap-4">
            {rooms.map((room) => (
              <div key={room.id} className="border rounded p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{room.name}</h3>
                  <p className="text-sm text-gray-500">{room.participants} participants</p>
                </div>
                <button
                  onClick={() => {
                    ws.send(
                      JSON.stringify({
                        type: 'join-room',
                        roomId: room.id,
                      })
                    );
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomManagement;
