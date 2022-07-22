import SendIcon from "@mui/icons-material/Send";

const dataRobot = [
  {
    id: 1,
    name: "Lulu",
    color: "bg-amber-500",
  },
  {
    id: 2,
    name: "Eli",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Stan",
    color: "bg-red-500",
  },
  {
    id: 4,
    name: "Micha",
    color: "bg-green-500",
  },
  {
    id: 5,
    name: "Marv",
    color: "bg-teal-500",
  },
  {
    id: 6,
    name: "Diego",
    color: "bg-purple-500",
  },
];

const LeftBox = () => {
  return (
    <ul className="hidden md:block md:w-1/3 bg-white border h-full p-4 rounded-lg shadow-lg">
      {dataRobot.map((robot) => (
        <li
          key={robot.id}
          className={`flex justify-between px-4 items-center border shadow-md cursor-pointer hover:bg-black/10 rounded-md pt-1 mb-4`}
        >
          <div
            className={`rounded-full w-16 h-16 ${robot.color} px-1 pb-0 pt-2 mr-4 shadow-sm`}
          >
            <img
              src="/images/robotLuluBot.png"
              alt="robotLulu"
              className="w-full h-full"
            />
          </div>
          <h2 className="grow text-xl">{robot.name}</h2>
          <p className="text-bold text-lg">
            <SendIcon />
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LeftBox;
