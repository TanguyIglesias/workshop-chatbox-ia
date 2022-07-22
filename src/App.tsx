import ChatBoxContainer from "./components/chatbox";
import LeftBox from "./components/leftbox";

const App = () => {
  return (
    <main className="h-screen p-4 flex w-screen bg-[url('./../../public/images/background.jpg')] gap-4">
      <LeftBox />
      <ChatBoxContainer />
    </main>
  );
};

export default App;
