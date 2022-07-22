const RightBox = () => {
  return (
    <div className="w-2/5 h-full">
      <video
        src="./images/robot.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default RightBox;
