import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/chat/Sidebar";
import NoChatSelected from "../components/chat/NoChatSelected";
import ChatContainer from "../components/chat/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div>
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
