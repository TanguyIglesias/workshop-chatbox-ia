import { useEffect, useState } from "react";
import InputBar from "./InputBar";

type typeMessageDisplay = {
  id: number;
  user: string;
  message: string;
};

const ChatBoxContainer = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [createBox, setCreateBox] = useState<boolean>(false);
  const [textDisplay, setTextDisplay] = useState<typeMessageDisplay[]>([]);

  useEffect(() => {
    if (createBox) {
      const newMessage = {
        id: textDisplay.length + 1,
        user: "user",
        message: userMessage,
      };
      setTextDisplay([...textDisplay, newMessage]);
      setUserMessage("");
      setCreateBox(false);
    }
  }, [createBox]);

  return (
    <main className="border h-full p-2 rounded-lg shadow-lg flex flex-col justify-end">
      {textDisplay &&
        textDisplay.map((message) => <p key={message.id}>{message.message}</p>)}
      <InputBar
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        createBox={createBox}
        setCreateBox={setCreateBox}
      />
    </main>
  );
};

export default ChatBoxContainer;
