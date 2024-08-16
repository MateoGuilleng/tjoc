import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa"; // Importa el ícono de audio

export default function MusicPlayer({ position, url, play, color }) {
  const colorBotón = color;
  const posición = position;
  const [isVisible, setIsVisible] = useState(play);

  const toggleControls = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`fixed ${
        posición === "izquierdaD" ? "bottom-4 left-4" : "bottom-4 right-4"
      } p-2 bg-transparent rounded-lg shadow-lg flex flex-col items-center space-y-2`}
    >
      <button
        onClick={toggleControls}
        className={`text-${colorBotón}-700 text-xl`}
        aria-label="Toggle audio controls"
      >
        <FaVolumeUp className={`text-${colorBotón}-700`} />
      </button>
      {isVisible && (
        <div className="flex flex-col items-center space-y-2">
          <audio autoPlay={true} controls loop>
            <source src={`${url}`} type="audio/mp3" />
          </audio>
        </div>
      )}
    </div>
  );
}
