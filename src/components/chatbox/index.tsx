import { useEffect, useState } from "react";
import InputBar from "./InputBar";
import { Configuration, OpenAIApi } from "openai";

interface typeMessageDisplay {
  id: number;
  user: string;
  message: string | undefined;
}

const ChatBoxContainer = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [botMessage, setBotMessage] = useState<string>();
  const [createBox, setCreateBox] = useState<boolean>(false);
  const [textDisplay, setTextDisplay] = useState<typeMessageDisplay[]>([]);

  useEffect(() => {
    if (createBox && userMessage) {
      const responseAI = async () => {
        const configuration = new Configuration({
          apiKey: process.env.REACT_APP_URL,
        });

        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: userMessage,
          temperature: 0.5,
          max_tokens: 60,
          top_p: 1.0,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
          stop: ["stop"],
        });
        setBotMessage(response?.data?.choices?.slice(0, 1)[0].text);
      };
      responseAI();

      const newMessage = {
        id: textDisplay.length + 1,
        user: "user",
        message: userMessage,
      };

      setTextDisplay([...textDisplay, newMessage]);
      setUserMessage("");

      const newResponse = {
        id: textDisplay.length + 1,
        user: "bot",
        message: botMessage,
      };
      setTextDisplay([...textDisplay, newResponse]);
      setCreateBox(false);
    }
  }, [botMessage, createBox, textDisplay, userMessage]);

  return (
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
  );
};

export default ChatBoxContainer;
