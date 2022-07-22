const RightBox = () => {
  return (
    <div className="w-0 h-full hidden lg:block lg:w-2/5">
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
