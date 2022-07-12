import { Configuration, OpenAIApi } from "openai";

const ResponseIA = async (userMessage:string) => {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_URL,
      });
    
      const openai = new OpenAIApi(configuration);
    
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "You:" + userMessage,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
      });

      console.log(response);
      
        return response
};

export default ResponseIA;
