import React from "react";
import WorkForcePro from "../portfolio/WorkForcePro.png";
import ClassiqueCuisine from "../portfolio/ClassiqueCuisine.png";
import WebManagementApp from "../portfolio/WebManagementApp.png";
import Restaurantista from "../portfolio/Restaurantista.png";
import VehicleShop from "../portfolio/VehicleShop.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WorkForcePro,
      href: "https://github.com/GentritUkelli/Employee-Management",
    },
    {
      id: 2,
      src: ClassiqueCuisine,
      href: "https://github.com/GentritUkelli/ClassiqueCuisine",
    },
    {
      id: 3,
      src: WebManagementApp,
      href: "https://github.com/GentritUkelli/Employee-Management-App",
    },
    {
      id: 4,
      src: Restaurantista,
      href: "https://github.com/GentritUkelli/Restaurantista",
    },
    {
      id: 5,
      src: VehicleShop,
      href: "https://github.com/GentritUkelli/VehicleShop",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio:
          </p>
          <p className="py-6">
            Curious about what I've been creating lately? Take a peek at some
            of my work:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-2 sm:px-4 md:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-100 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
