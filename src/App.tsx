import ChatBoxContainer from "./components/chatbox";
import LeftBox from "./components/leftbox";
import RightBox from "./components/rightbox";

const App = () => {
  return (
    <main className="h-screen py-12 px-40 flex w-screen bg-[url('./../../public/images/background.jpg')] gap-4">
      <LeftBox />
      <ChatBoxContainer />
      <RightBox />
    </main>
  );
};

export default App;
