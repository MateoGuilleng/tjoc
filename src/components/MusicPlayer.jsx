import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa"; // Importa el ícono de audio

export default function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleControls = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed bottom-4 left-4 p-2 bg-transparent rounded-lg shadow-lg flex flex-col items-center space-y-2">
      <button
        onClick={toggleControls}
        className="text-white text-xl"
        aria-label="Toggle audio controls"
      >
        <FaVolumeUp />
      </button>
      {isVisible && (
        <div className="flex flex-col items-center space-y-2">
          <audio controls loop>
            <source src="videoplayback.mp3" type="audio/mp3" />
          </audio>
        </div>
      )}
    </div>
  );
}
