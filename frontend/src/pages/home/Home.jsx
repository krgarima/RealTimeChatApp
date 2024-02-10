import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { showChat } = useConversation();

  return (
    <>
      {/* Large screen */}
      <div className="sm:hidden md:block">
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
      {/* Mobile screen */}
      <div className="sm:block md:hidden">
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          {showChat ? <MessageContainer /> : <Sidebar />}
        </div>
      </div>
    </>
  );
};
export default Home;
