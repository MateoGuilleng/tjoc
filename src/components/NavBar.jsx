"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function NavBar({ setBlur }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo, esconder navbar
        setIsVisible(false);
      } else {
        // Scroll hacia arriba, mostrar navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-md border-b-2 border-white/25 transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
    >
      {/* Contenedor izquierdo con enlaces */}
      <div className="flex-1 flex">
        <a
          href="/"
          className="text-white text-sm font-semibold transition duration-300"
        >
          Home
        </a>
      </div>

      {/* Contenedor central con el logo */}
      <div className="flex-1 flex justify-center">
        <Image
          src="https://res.cloudinary.com/dudftt5ha/image/upload/v1723839379/bgr5byoofyglqfel77bb.png"
          alt="Game Logo"
          width={100}
          height={24}
          priority
        />
      </div>

      {/* Contenedor derecho con enlaces */}
      <div className="flex-1 flex justify-end space-x-4">
        <a
          href="https://store.steampowered.com/app/2948730/THE_JOY_OF_CREATION/"
          className="text-white text-sm font-semibold transition duration-300"
        >
          Steam
        </a>
        <a
          href="https://gamejolt.com/games/tjocsm/139218"
          className="text-white text-sm font-semibold transition duration-300"
        >
          Gamejolt
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
