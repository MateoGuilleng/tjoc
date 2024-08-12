"use client";

import Image from "next/image";
import { useState } from "react";

function NavBar({ setBlur }) {
  return (
    <nav
      className="flex items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-md border-b-2 border-white/25"
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
          src="https://static.wikia.nocookie.net/the-joy-of-creation-scott/images/9/94/The_Joy_Of_Creation_Logo.jpg/revision/latest/scale-to-width-down/350?cb=20240428060730"
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
