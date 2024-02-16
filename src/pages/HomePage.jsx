import video from "../assets/video.mp4";

const HomePage = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted />
      Welcome page!
    </div>
  );
};

export default HomePage;
