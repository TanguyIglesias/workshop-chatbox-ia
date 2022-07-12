import { useEffect, useState } from "react";
import InputBar from "./InputBar";
// import ResponseIA from "./ResponseIA";
import { Configuration, OpenAIApi } from "openai";

type typeMessageDisplay = {
  id: number;
  user: string;
  message: string;
};

const ChatBoxContainer = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [createBox, setCreateBox] = useState<boolean>(false);
  const [textDisplay, setTextDisplay] = useState<typeMessageDisplay[]>([]);
  // const [respIA, setRespIA] = useState<any>()

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
      stop: [userMessage],
    });

   console.log(response);
   
  } 

  useEffect(() => {
    if (createBox) {
      const newMessage = {
        id: textDisplay.length + 1,
        user: "user",
        message: userMessage,
      };
      setTextDisplay([...textDisplay, newMessage]);
      responseAI();
      setUserMessage("");
      setCreateBox(false);
    }
  }, [createBox, textDisplay, userMessage]);

  return (
    <main className="border h-full p-2 rounded-lg shadow-lg flex flex-col justify-end">
      {textDisplay &&
        textDisplay.map((message) =>
          message.user === "user" ? (
            <div
              key={message.id}
              className="bg-blue-600 p-2 m-2 rounded-lg w-72 shadow-lg ml-auto "
            >
              <p className="break-words">{message.message}</p>
            </div>
          ) : (
            <div key={message.id}>{message.message}</div>
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
