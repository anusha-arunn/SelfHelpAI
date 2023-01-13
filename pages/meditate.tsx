import AudioPlayer from "react-h5-audio-player";

function PlayerControls() {
  return (
    <div className="flex flex-col justify-between items-center">
      <AudioPlayer
        autoPlay
        src={"/music/song.mp3"}
        onPlay={(e) => console.log("onPlay")}
        // other props here
        showSkipControls
        autoPlayAfterSrcChange
      />
    </div>
  );
}
export default PlayerControls;

//https://blog.openreplay.com/building-a-music-entertainment-application-with-reactjs-nextjs-algolia-and-firebase/
