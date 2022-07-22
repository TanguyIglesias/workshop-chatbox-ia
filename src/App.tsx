import ChatBoxContainer from "./components/chatbox";
import LeftBox from "./components/leftbox";
import RightBox from "./components/rightbox";

const App = () => {
  return (
    <main className="h-screen bg-[url('./../../public/images/background.jpg')] ">
      <div className="h-full mx-auto px-4 py-4 max-w-xs md:py-12 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl flex gap-4">
        <LeftBox />
        <ChatBoxContainer />
        <RightBox />
      </div>
    </main>
  );
};

export default App;
