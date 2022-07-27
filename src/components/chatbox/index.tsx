const ChatBoxContainer = () => {
  return (
    <main className="border h-full rounded-lg shadow-lg flex flex-col justify-end w-full md:w-2/3 bg-white">
      <div className="w-full overflow-x-hidden p-4">
        <div className="my-2 flex justify-end">
          <p className="break-words bg-blue-500 p-2 m-2 rounded-lg shadow-lg max-w-xs">
            {/* message user */}
          </p>
          <div className="rounded-full overflow-hidden w-16 h-16 bg-blue-500 px-1 pb-0 pt-2 shadow-sm">
            <img src="/images/user.png" alt="user" className="w-full h-full" />
          </div>
        </div>

        <div className="my-2 flex">
          <div className="rounded-full overflow-hidden w-16 h-16 bg-amber-500 px-1 pb-0 pt-2 shadow-sm">
            <img
              src="/images/robotLuluBot.png"
              alt="robotLulu"
              className="w-full h-full"
            />
          </div>
          <p className="break-words bg-gray-400 p-2 m-2 rounded-lg shadow-lg max-w-xs">
            {/* message bot */}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ChatBoxContainer;
