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
          top_p: 0.3,
          frequency_penalty: 0.5,
          presence_penalty: 0.0,
          stop: [userMessage],
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
    }
  }, [botMessage, createBox, textDisplay, userMessage]);

  useEffect(() => {
    if (botMessage) {
      const newResponse = {
        id: textDisplay.length + 1,
        user: "bot",
        message: botMessage,
      };
      setTextDisplay([...textDisplay, newResponse]);
      setCreateBox(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botMessage]);

  return (
    <main className="border h-full rounded-lg shadow-lg flex flex-col justify-end w-1/2 bg-white">
      <div className="w-full overflow-x-hidden p-4">
        {textDisplay &&
          textDisplay.map((message) =>
            message.user === "user" ? (
              <div key={message.id} className="ml-auto my-2 flex justify-end">
                <p className="break-words bg-blue-500 p-2 m-2 rounded-lg shadow-lg max-w-md">
                  {message.message}
                </p>
                <div className="rounded-full overflow-hidden w-16 h-16 bg-blue-500 px-1 pb-0 pt-2 shadow-sm">
                  <img
                    src="/images/user.png"
                    alt="user"
                    className="w-full h-full"
                  />
                </div>
              </div>
            ) : (
              <div key={message.id} className="mr-auto my-2 flex">
                <div className="rounded-full overflow-hidden w-16 h-16 bg-amber-500 px-1 pb-0 pt-2 shadow-sm">
                  <img
                    src="/images/robotLuluBot.png"
                    alt="robotLulu"
                    className="w-full h-full"
                  />
                </div>
                <p className="break-words bg-gray-400 p-2 m-2 rounded-lg shadow-lg max-w-md">
                  {message.message}
                </p>
              </div>
            )
          )}
      </div>
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
