import { useEffect, useState } from "react";
import ToggleImages from "../components/Chat/ToggleImages.js";
import Image from "next/image";

const PlayerControls = () => {
  const [music, setMusic] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:3000/api/api")
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setMusic(data);
      });
  }, []);

  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <>
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-900 mb-5">
          Made for you
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {music.map((item) => {
            function toggle() {
              var audio = document
                .getElementById(item.id)
                .querySelector("audio");
              if (audio && audio.paused) audio && audio.play();
              else audio && audio.pause();
            }
            return (
              <div key={item.id} className="bg-gray-700 shadow-lg rounded p-3">
                <div className="group flex justify-center items-center relative">
                  <Image
                    className="w-full md:w-72 block rounded"
                    src={item.imgUrl}
                    alt="Picture"
                    width={200}
                    height={200}
                    loading="eager"
                  />
                  <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                    <button
                      onClick={toggle}
                      className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                    >
                      <ToggleImages
                        active={active}
                        handleChangeActive={handleChangeActive}
                      />
                      <audio id={item.id} src={item.url} />
                    </button>
                  </div>
                </div>
                <div className="py-5">
                  <h3 className="text-white text-lg">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default PlayerControls;
