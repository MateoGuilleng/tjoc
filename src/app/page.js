"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
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
                  backgroundImage: `url('https://res.cloudinary.com/dudftt5ha/image/upload/v1723480373/ie1l22fttpummaaow5xs.png')`,
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
                      horror theme within the Five Nights at Freddy's (FNaF)
                      universe. However, this new version introduces new
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
                      explore, hide, and survive. The game's atmosphere remains
                      unsettling, with a focus on building tension and managing
                      suspense.
                    </p>
                    <h3 className="text-2xl font-bold my-6">Reception:</h3>
                    <p className="text-lg mb-6">
                      Since its release, The Joy of Creation's demo on Steam has
                      been enthusiastically received by the community,
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
                  backgroundImage: `url('data:image/jpeg;base64,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')`,
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
                      inspired by the Five Nights at Freddy's (FNaF) series.
                    </p>
                    <h3 className="text-2xl font-bold my-6">
                      Synopsis and Gameplay:
                    </h3>
                    <p className="text-lg mb-6">
                      The game follows the story of Scott Cawthon, the fictional
                      creator of FNaF, who faces terrifying, disfigured versions
                      of the animatronics of his own creation. The plot unfolds
                      across five chapters, each depicting a different phase of
                      Scott's life, from childhood to adulthood.
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
                  backgroundImage: `url('https://s2.dmcdn.net/v/NOnZ11XEwEcKFleEY/x1080')`,
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
                      gameplay inspired by the Five Nights at Freddy's (FNaF)
                      series.
                    </p>
                    <h3 className="text-2xl font-bold my-6">
                      Synopsis and Gameplay:
                    </h3>
                    <p className="text-lg mb-6">
                      In The Joy of Creation: Reborn, players take on the role
                      of a character who must survive a series of dark,
                      labyrinthine environments while being hunted by warped and
                      terrifyingly menacing versions of FNaF's animatronics.
                      Unlike the original FNaF games, where the player is mostly
                      static, in this game players are given freedom of movement
                      and must explore the environments to accomplish objectives
                      and avoid capture.
                    </p>
                    <p className="text-lg mb-6">
                      Each level offers a unique gameplay experience, with
                      different animatronics and challenges that test the
                      player's ability to stay calm under pressure and use the
                      environment to their advantage. The atmosphere of the game
                      is tense, with a focus on darkness, ambient sound, and
                      time management to create a constant sense of impending
                      danger.
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
                      This title helped cement Nikson's reputation as a talented
                      developer in the fanmade games scene and laid the
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
            backgroundImage: `url('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2948730/ss_eb5d982ce494e885bfddfd5d47795a41f2fc7de5.600x338.jpg?t=1722624886')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center p-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600">
              THE JOY OF CREATION
            </h1>
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
              <h2 className="text-4xl font-bold my-6">About the Game</h2>
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
                  backgroundImage: `url('https://res.cloudinary.com/dudftt5ha/image/upload/v1723435764/mkmgnuvreujpmvq2fxce.png')`,
                }}
              />
              <div className="relative max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">News</h2>
                <div className="grid gap-5 px-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  <InfoCard
                    imageUrl="https://res.cloudinary.com/dudftt5ha/image/upload/v1723433529/e2nowyhpy1f3tl9qdv1y.png"
                    title="My Info Card"
                    content="This is the content of the card. It can be a description or any useful information."
                    createdAt="August 11, 2024"
                  />
                  <InfoCard
                    imageUrl="https://res.cloudinary.com/dudftt5ha/image/upload/v1723433529/e2nowyhpy1f3tl9qdv1y.png"
                    title="My Info Card"
                    content="This is the content of the card. It can be a description or any useful information."
                    createdAt="August 11, 2024"
                  />
                  <InfoCard
                    imageUrl="https://res.cloudinary.com/dudftt5ha/image/upload/v1723433529/e2nowyhpy1f3tl9qdv1y.png"
                    title="My Info Card"
                    content="This is the content of the card. It can be a description or any useful information."
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
        </footer>
      </main>
      <MusicPlayer />
    </div>
  );
}
