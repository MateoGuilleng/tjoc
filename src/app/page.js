"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import InfoCard from "@/components/InfoCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import MusicPlayer from "@/components/MusicPlayer";
import "aos/dist/aos.css";

export default function Home() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [timesFlahsed, setTimesFlahsed] = useState(0);
  const lanternRef = useRef(null);
  const soundRef = useRef(null); // Initialize as null
  useEffect(() => {
    // Ensure Audio is created only on the client-side
    soundRef.current = new Audio("efecto.mp3");
    soundRef.current.volume = 0.1; // Volumen más bajo (0.1 es 10% del volumen máximo)
  }, []);

  const flashEffectRef = useRef(null);
  const redEffectRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);

  if (timesFlahsed === 5) {
    redEffectRef.current.classList.add("red-background");
    // Desplazar la página hacia arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  }

  const handleMouseEnter = (e) => {
    soundRef.current.play(); // Reproduce el sonido inmediatamente

    // Activa el parpadeo
    flashEffectRef.current.classList.add("flash-effect");

    // Configura un timeout para eliminar la imagen
    const destroyTimeout = setTimeout(() => {
      e.target.remove(); // Elimina la imagen del DOM

      setTimesFlahsed((prevTimes) => prevTimes + 1);

      setTimeout(() => {
        flashEffectRef.current.classList.remove("flash-effect"); // Detiene el efecto después de 2 segundos
      }, 1700); // Duración del efecto de parpadeo
    }, 1700); // 2 segundos de espera para destruir la imagen

    setTimeoutId(destroyTimeout); // Guarda el timeout para poder limpiarlo
  };

  const handleMouseLeave = () => {
    soundRef.current.pause(); // Pausa el sonido cuando el mouse sale
    soundRef.current.currentTime = 0; // Reinicia el sonido

    // Detiene el parpadeo y limpia el timeout si el mouse sale antes de 2 segundos
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    flashEffectRef.current.classList.remove("flash-effect");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcula la posición del fondo para centrar el gradiente en el cursor
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      lanternRef.current.style.backgroundPosition = `${x}px ${y}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Función para manejar el clic en los botones
  const handleClick = (buttonNumber) => {
    setShowContent(false); // Ocultar contenido actual
    setSelectedButton(buttonNumber);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  useEffect(() => {
    if (selectedButton !== null) {
      // Agregar vibración suave al cuerpo al cambiar de botón
      document.body.classList.add("animate-shake");

      const timer = setTimeout(() => {
        setShowContent(true); // Mostrar contenido con animación
        document.body.classList.remove("animate-shake");
      }, 500); // Tiempo de la animación (en ms)

      return () => {
        clearTimeout(timer);
        document.body.classList.remove("animate-shake");
      };
    }
  }, [selectedButton]);

  const renderContent = () => {
    switch (selectedButton) {
      case 1:
        return (
          <div>
            <section className="relative w-full p-8 bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 blur-sm"
                style={{
                  backgroundImage:
                  "url(https://res.cloudinary.com/dudftt5ha/image/upload/v1723480373/ie1l22fttpummaaow5xs.png)",
                  backgroundPosition: "center",
                }}
              />
              <section className="p-8">
                <div data-aos="fade-up" className="text-center">
                  <div className="relative max-w-5xl mx-auto text-center">
                    <p className="text-lg mb-6">
                      The Joy of Creation (Remaster 2024) is a psychological
                      horror game developed by Nikson, which released a demo in
                      2024 on Steam as a preview of the full version expected in
                      summer 2025. This remaster is a revamp of The Joy of
                      Creation: Story Mode, but with significant improvements in
                      graphics, gameplay, and narrative.
                    </p>
                    <h3 className="text-2xl font-bold my-6">
                      Synopsis and Gameplay:
                    </h3>
                    <p className="text-lg mb-6">
                      Like its predecessor, the game follows the survival and
                      horror theme within the Five Nights at Freddy&quot;s
                      (FNaF) universe. However, this new version introduces new
                      mechanics, more detailed scenarios, and a deeper and
                      expanded story. Players once again face twisted and
                      terrifying versions of the animatronics, now with more
                      realistic animations and designs that enhance the horror
                      experience.
                    </p>
                    <p className="text-lg mb-6">
                      The demo offers a glimpse of the updated visual style and
                      gameplay changes, presenting players with a much more
                      interactive and dynamic environment, with new ways to
                      explore, hide, and survive. The game&quot;s atmosphere
                      remains unsettling, with a focus on building tension and
                      managing suspense.
                    </p>
                    <h3 className="text-2xl font-bold my-6">Reception:</h3>
                    <p className="text-lg mb-6">
                      Since its release, The Joy of Creation&quot;s demo on
                      Steam has been enthusiastically received by the community,
                      especially by fans of the FNaF universe and horror games
                      in general. Players have praised the improvements in
                      visual quality and the intensity of the gameplay
                      experience, generating high expectations for the full
                      version.
                    </p>
                    <p className="text-lg mb-6">
                      This release on Steam marks an important step for The Joy
                      of Creation, taking it from a fanmade project to a more
                      formal and accessible production on a mass distribution
                      platform.
                    </p>
                    <div className="image-container">
                      <img
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233a722d-6c16-4c20-84ed-5add165cde4c/dfss1kk-43eee3b2-48ae-4783-9f3b-cf362c0d3ae1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzM2E3MjJkLTZjMTYtNGMyMC04NGVkLTVhZGQxNjVjZGU0Y1wvZGZzczFray00M2VlZTNiMi00OGFlLTQ3ODMtOWYzYi1jZjM2MmMwZDNhZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yh65kgusSgeYzpcBUZMHfrnU7VdXvsEXI-5nEdsRxWA"
                        width={100}
                        height={100}
                        alt="Efecto de Imagen"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </section>
            <section className="relative w-full p-8 bg-black">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
              <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Gameplay Screenshots
                </h2>
                <section className="p-8">
                  <div data-aos="fade-up" className="text-center">
                    <div className="w-7/12 border-2 border-white/25 mx-auto content-evenly">
                      <Slider className="text-white" {...settings}>
                        <div className="justify-center">
                          <Image
                            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_3257b4a5a5ef8890b102abe541223ac43f8568c2.600x338.jpg?t=1722624886"
                            alt="Gameplay Screenshot 1"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_d6c3bc1794ef83d5d97bbf7473c98d690f55cb4c.600x338.jpg?t=1722624886"
                            alt="Gameplay Screenshot 2"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_528538fcce410745c3bcc0190f6594aecaeb6d52.600x338.jpg?t=1722624886"
                            alt="Gameplay Screenshot 3"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_5c2d808e9eb594d659f915add4265d935ccb09e4.600x338.jpg?t=1722624886"
                            alt="Gameplay Screenshot 4"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        );
      case 2:
        return (
          <div>
            <section className="relative w-full p-8 bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 blur-sm"
                style={{
                  backgroundImage: `url(data:image/jpeg;base64,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)`,
                  backgroundPosition: "center",
                }}
              />
              <section className="p-8">
                <div data-aos="fade-up" className="text-center">
                  <div className="relative max-w-5xl mx-auto text-center">
                    <p className="text-lg mb-6">
                      The Joy of Creation: Story Mode is a psychological horror
                      video game developed by Nikson, released in 2017 and
                      published on GameJolt. This game is an expanded and more
                      narrative-driven version of the original game, The Joy of
                      Creation, which was initially a simple survival game
                      inspired by the Five Nights at Freddy&quot;s (FNaF)
                      series.
                    </p>
                    <h3 className="text-2xl font-bold my-6">
                      Synopsis and Gameplay:
                    </h3>
                    <p className="text-lg mb-6">
                      The game follows the story of Scott Cawthon, the fictional
                      creator of FNaF, who faces terrifying, disfigured versions
                      of the animatronics of his own creation. The plot unfolds
                      across five chapters, each depicting a different phase of
                      Scott&quot;s life, from childhood to adulthood.
                    </p>
                    <p className="text-lg mb-6">
                      Each level has a unique layout and mechanics, with the
                      player needing to accomplish different objectives while
                      being chased by the animatronics. Gameplay focuses on
                      exploration, puzzle-solving, and evading enemies, creating
                      an immersive and terrifying experience.
                    </p>
                    <h3 className="text-2xl font-bold my-6">Reception:</h3>
                    <p className="text-lg mb-6">
                      The game was very well received by the gaming community,
                      especially by FNaF fans. It was praised for its eerie
                      atmosphere, improved graphics, and immersive narrative
                      that adds an extra layer of depth to the FNaF universe.
                    </p>
                    <p className="text-lg mb-6">
                      The Joy of Creation: Story Mode has become one of the most
                      popular fanmade games within the FNaF fandom and has been
                      hailed for its quality and the dedication Nikson put into
                      its development.
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <section className="relative w-full p-8 bg-black">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
              <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Gameplay Screenshots
                </h2>
                <section className="p-8">
                  <div data-aos="fade-up" className="text-center">
                    <div className="w-7/12 border-2 border-white/25 mx-auto content-evenly">
                      <Slider className="text-white" {...settings}>
                        <div className="justify-center">
                          <Image
                            src="https://i.gjcdn.net/public-data/games/2/218/139218/screenshots/t_at-iwk4nhvq.png"
                            alt="Gameplay Screenshot 1"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://i.gjcdn.net/public-data/games/2/218/139218/screenshots/t_basement-e6ux7bpf.png"
                            alt="Gameplay Screenshot 2"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://i.gjcdn.net/public-data/games/2/218/139218/screenshots/t_o-n8kvgzfp.png"
                            alt="Gameplay Screenshot 3"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://i.gjcdn.net/public-data/games/2/218/139218/screenshots/t_bedroom-67ncacb5.png"
                            alt="Gameplay Screenshot 4"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://i.gjcdn.net/public-data/games/2/218/139218/screenshots/highresscreenshot00034-in7fkanr.png"
                            alt="Gameplay Screenshot 4"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div className="image-container">
                          <img
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233a722d-6c16-4c20-84ed-5add165cde4c/dfss1kk-43eee3b2-48ae-4783-9f3b-cf362c0d3ae1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzM2E3MjJkLTZjMTYtNGMyMC04NGVkLTVhZGQxNjVjZGU0Y1wvZGZzczFray00M2VlZTNiMi00OGFlLTQ3ODMtOWYzYi1jZjM2MmMwZDNhZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yh65kgusSgeYzpcBUZMHfrnU7VdXvsEXI-5nEdsRxWA"
                            width={100}
                            height={100}
                            alt="Efecto de Imagen"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        );
      case 3:
        return (
          <div>
            <section className="relative w-full p-8 bg-black">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 blur-sm"
                style={{
                  backgroundImage: url("https://s2.dmcdn.net/v/NOnZ11XEwEcKFleEY/x1080"),
                  backgroundPosition: "center",
                }}
              />
              <section className="p-8">
                <div data-aos="fade-up" className="text-center">
                  <div className="relative max-w-5xl mx-auto text-center">
                    <p className="text-lg mb-6">
                      The Joy of Creation: Reborn is an indie horror video game
                      developed by Nikson, released in 2016 on GameJolt. This
                      game is a reimagined version of the original title, The
                      Joy of Creation, and is known for its first-person horror
                      gameplay inspired by the Five Nights at Freddy&quot;s
                      (FNaF) series.
                    </p>
                    <div className="image-container">
                      <img
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233a722d-6c16-4c20-84ed-5add165cde4c/dfss1kk-43eee3b2-48ae-4783-9f3b-cf362c0d3ae1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzM2E3MjJkLTZjMTYtNGMyMC04NGVkLTVhZGQxNjVjZGU0Y1wvZGZzczFray00M2VlZTNiMi00OGFlLTQ3ODMtOWYzYi1jZjM2MmMwZDNhZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yh65kgusSgeYzpcBUZMHfrnU7VdXvsEXI-5nEdsRxWA"
                        width={100}
                        height={100}
                        alt="Efecto de Imagen"
                      />
                    </div>
                    <h3 className="text-2xl font-bold my-6">
                      Synopsis and Gameplay:
                    </h3>
                    <p className="text-lg mb-6">
                      In The Joy of Creation: Reborn, players take on the role
                      of a character who must survive a series of dark,
                      labyrinthine environments while being hunted by warped and
                      terrifyingly menacing versions of FNaF&quot;s
                      animatronics. Unlike the original FNaF games, where the
                      player is mostly static, in this game players are given
                      freedom of movement and must explore the environments to
                      accomplish objectives and avoid capture.
                    </p>
                    <p className="text-lg mb-6">
                      Each level offers a unique gameplay experience, with
                      different animatronics and challenges that test the
                      player&quot;s ability to stay calm under pressure and use
                      the environment to their advantage. The atmosphere of the
                      game is tense, with a focus on darkness, ambient sound,
                      and time management to create a constant sense of
                      impending danger.
                    </p>
                    <h3 className="text-2xl font-bold my-6">Reception:</h3>
                    <p className="text-lg mb-6">
                      The Joy of Creation: Reborn was very well received by the
                      horror gaming community and FNaF fans. It was praised for
                      its ability to create an intense horror experience and its
                      innovative approach to survival within the genre. The
                      combination of freedom of movement and the constant threat
                      of animatronics created an immersive and terrifying
                      experience that has maintained its popularity in the indie
                      gaming community.
                    </p>
                    <p className="text-lg mb-6">
                      This title helped cement Nikson&quot;s reputation as a
                      talented developer in the fanmade games scene and laid the
                      groundwork for future installments such as The Joy of
                      Creation: Story Mode and the remaster planned for 2025.
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <section className="relative w-full p-8 bg-black">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
              <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">
                  Gameplay Screenshots
                </h2>
                <section className="p-8">
                  <div data-aos="fade-up" className="text-center">
                    <div className="w-7/12 border-2 border-white/25 mx-auto content-evenly">
                      <Slider className="text-white" {...settings}>
                        <div className="justify-center">
                          <Image
                            src="https://res.cloudinary.com/dudftt5ha/image/upload/v1723483220/beixg0udxw6viqkiyx4m.png"
                            alt="Gameplay Screenshot 1"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://res.cloudinary.com/dudftt5ha/image/upload/v1723483286/wqsqlt48duax8trghciv.png"
                            alt="Gameplay Screenshot 2"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                        <div>
                          <Image
                            src="https://res.cloudinary.com/dudftt5ha/image/upload/v1723483353/rlolraqcpwle1u9kl5ce.png"
                            alt="Gameplay Screenshot 3"
                            width={800}
                            height={450}
                            className="rounded-lg shadow-lg w-full"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        );
      default:
        return <p></p>;
    }
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => <ul style={{ margin: "0px" }}> {dots} </ul>,
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "white", // Color blanco para los dots
        }}
      ></div>
    ),
  };

  return (
    <div className="bg-black relative text-white">
      <NavBar setBlur={setIsBlurred} />

      <main
        className={`flex min-h-screen flex-col items-center justify-center transition duration-300 ${
          isBlurred ? "blur-lg" : ""
        }`}
      >
        {/* Hero Section */}
        <section
          className="relative brightness-200 w-full h-screen flex flex-col items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_eb5d982ce494e885bfddfd5d47795a41f2fc7de5.600x338.jpg?t=1722624886)`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center p-6">
            <div className="image-container">
              <div className="flex-1 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dudftt5ha/image/upload/v1723838990/f4tlrfblcub4yyln5qre.png"
                  alt="Game Logo"
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </div>
            <p className="text-lg md:text-xl mb-6">
              A terrifying journey through a world of darkness and fear
            </p>
            <div>
              <a
                href="https://store.steampowered.com/app/2948730/THE_JOY_OF_CREATION/"
                className="bg-red-600 m-2 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Play the Demo
              </a>
              <a
                href="https://gamejolt.com/games/tjocsm/139218"
                className="bg-red-600 m-2 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Play story mode (2017)
              </a>
              <a
                href="https://gamejolt.com/games/tjocsm/139218"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Play Reborn
              </a>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center">
          <section className="p-8">
            <div data-aos="fade-up" className="text-center">
              <div className="">
                <div className="image-container">
                  <img
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233a722d-6c16-4c20-84ed-5add165cde4c/dfss1kk-43eee3b2-48ae-4783-9f3b-cf362c0d3ae1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzM2E3MjJkLTZjMTYtNGMyMC04NGVkLTVhZGQxNjVjZGU0Y1wvZGZzczFray00M2VlZTNiMi00OGFlLTQ3ODMtOWYzYi1jZjM2MmMwZDNhZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yh65kgusSgeYzpcBUZMHfrnU7VdXvsEXI-5nEdsRxWA"
                    width={100}
                    height={100}
                    alt="Efecto de Imagen"
                  />
                </div>
                <h2 className="text-4xl font-bold my-6">About the Game</h2>
              </div>

              <div className="flex space-x-4 my-4">
                <button
                  className="bg-gray-500 text-gray-200 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:text-gray-400 hover:shadow-gray-700 hover:shadow-[0_0_25px_5px] hover:translate-y-1 hover:-translate-x-1"
                  onClick={() => handleClick(1)}
                >
                  The Joy of Creation (Demo)
                </button>
                <button
                  className="bg-gray-500 text-gray-200 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:text-gray-400 hover:shadow-gray-700 hover:shadow-[0_0_25px_5px] hover:translate-y-1 hover:-translate-x-1"
                  onClick={() => handleClick(2)}
                >
                  Story Mode (2017)
                </button>
                <button
                  className="bg-gray-500 text-gray-200 px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-700 hover:text-gray-400 hover:shadow-gray-700 hover:shadow-[0_0_25px_5px] hover:translate-y-1 hover:-translate-x-1"
                  onClick={() => handleClick(3)}
                >
                  The Joy of Creation Reborn
                </button>
              </div>
            </div>
          </section>

          {/* Contenido dependiendo del botón presionado */}
          <div className="mt-4">{renderContent()}</div>
        </div>

        {/* Gameplay Screenshot Section */}

        {/* News Section */}

        <section className="relative w-full p-8 bg-black">
          <section className="p-8">
            <div data-aos="fade-up" className="text-center">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-50 "
                style={{
                  backgroundImage: `url(&quot;https://res.cloudinary.com/dudftt5ha/image/upload/v1723435764/mkmgnuvreujpmvq2fxce.png&quot;)`,
                }}
              />
              <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">News</h2>
                <div className="grid gap-5 px-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  <InfoCard
                    imageUrl="data:image/jpeg;base64,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"
                    title="The joy of creation demo in launched"
                    content="The demo of the remastered vesion of the original game is oficially launched on steam, this demo allow us to see a lot of improvments in comparation of the original game, this brief demo makes part of a 10 years celebration schedule of Five Nights At Freddys, the game taken by inspiration."
                    createdAt="August 3, 2024"
                  />
                  <InfoCard
                    imageUrl="https://pbs.twimg.com/media/GUExNKJWcAAi66A?format=jpg&name=small"
                    title="1.0.8 version"
                    content="1 day after the demo lauch, nikson, the main developer of the proyect made some patch changes, 1.0.8 patch notes! fixes some bugs and mechanics"
                    createdAt="August 4, 2024"
                  />
                  <InfoCard
                    imageUrl="https://pbs.twimg.com/media/GUJOUYxXIAAgqTh?format=jpg&name=small"
                    title="Community support and feedback"
                    content="The game overall has a good recievement and feedback. Some streamers even play TJOC at a cinema!"
                    createdAt="August 11, 2024"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Footer Section */}
        <footer className="w-full p-6 bg-black text-white text-center">
          <p>&copy; 2024 THE JOY OF CREATION. All rights reserved.</p>
          <div className="image-container">
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233a722d-6c16-4c20-84ed-5add165cde4c/dfss1kk-43eee3b2-48ae-4783-9f3b-cf362c0d3ae1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzM2E3MjJkLTZjMTYtNGMyMC04NGVkLTVhZGQxNjVjZGU0Y1wvZGZzczFray00M2VlZTNiMi00OGFlLTQ3ODMtOWYzYi1jZjM2MmMwZDNhZTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yh65kgusSgeYzpcBUZMHfrnU7VdXvsEXI-5nEdsRxWA"
              width={100}
              height={100}
              alt="Efecto de Imagen"
            />
          </div>
        </footer>
      </main>
      <div className="lantern-effect" ref={lanternRef}></div>
      <div ref={flashEffectRef} className="flash-effect-container"></div>
      <div ref={redEffectRef} className=""></div>
      <MusicPlayer
        position={"izquierdaD"}
        url={"videoplayback.mp3"}
        color={"white"}
        play={false}
      />
      {timesFlahsed >= 5 ? (
        <MusicPlayer url={"ambiente.mp3"} color={"red"} play={true} />
      ) : (
        ""
      )}
    </div>
  );
}
