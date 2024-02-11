import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation";

const Sidebar = () => {
  const { showChat } = useConversation();
  return (
    <div className={`${showChat ? "hidden" : "block"} md:block`}>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  );
};
export default Sidebar;
