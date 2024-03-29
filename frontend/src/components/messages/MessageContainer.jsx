import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

const MessageContainer = () => {
  const {
    selectedConversation,
    setSelectedConversation,
    showChat,
    setShowChat,
  } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={`${showChat ? "" : "hidden"} md:block h-full`}>
      <div className="md:min-w-[450px] flex flex-col h-full">
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            {/* Header */}
            <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center">
              <span className="label-text" onClick={() => setShowChat(false)}>
                <FaArrowLeft />
              </span>{" "}
              <div className="w-10 rounded-full mx-1">
                <img
                  alt="Profile Picture"
                  src={selectedConversation.profilePic}
                />
              </div>
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
