const Shortcard = ({ src, title, channelName }) => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center relative ">
      <div className="w-full h-full bg-black flex absolute top-0 rounded-2xl">
        <video src={src} controls className="h-5/6" />
      </div>
      <div className="absolute bottom-0 p-2 bg-black bg-opacity-50 text-white">
        <h3 className="shorts-title">{title}</h3>
        <p className="shorts-channel">{channelName}</p>
      </div>
    </div>
  );
};

export default Shortcard;
