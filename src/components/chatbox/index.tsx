import { useEffect, useState } from "react";
import InputBar from "./InputBar";

interface typeMessageDisplay {
  id: number;
  user: string;
  message: string;
}

const ChatBoxContainer = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [botMessage, setBotMessage] = useState<string>("Réponse du bot");
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
  }, [createBox, textDisplay, userMessage]);

  const handleResponse = () => {
    const newMessage = {
      id: textDisplay.length + 1,
      user: "bot",
      message: botMessage,
    };
    setTextDisplay([...textDisplay, newMessage]);
  };

  return (
    <>
      <button className="border px-6 m-2" onClick={handleResponse}>
        Réponse Bot
      </button>
      <main className="border h-full p-2 rounded-lg shadow-lg flex flex-col justify-end">
        {textDisplay &&
          textDisplay.map((message) =>
            message.user === "user" ? (
              <div
                key={message.id}
                className="bg-blue-600 p-2 m-2 rounded-lg w-72 shadow-lg ml-auto"
              >
                <p className="break-words">{message.message}</p>
              </div>
            ) : (
              <div
                key={message.id}
                className="bg-gray-400 p-2 m-2 rounded-lg w-72 shadow-lg mr-auto"
              >
                <p className="break-words">{message.message}</p>
              </div>
            )
          )}
        <InputBar
          userMessage={userMessage}
          setUserMessage={setUserMessage}
          createBox={createBox}
          setCreateBox={setCreateBox}
        />
      </main>
    </>
  );
};

export default ChatBoxContainer;
