import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
    const { userChats, isUserChatsLoading, updateCurrentChat } = useContext(ChatContext);
    console.log("UserChats", userChats);

    return <>Chat</>
};
 
export default Chat;
