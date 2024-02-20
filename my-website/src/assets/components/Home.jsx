import React from "react";
import Gentii from "../portfolio/Gentii.jpg"
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col justify-center items-center">

      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center px-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-center text-center sm:text-left sm:w-1/2 sm:pr-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Web Developer</h2>
          <p className="text-white py-4 max-w-md">
            Hey there! I'm Gentrit Ukelli, a dedicated full-stack web developer who loves creating impactful digital experiences. With over two years of experience, I've been deeply involved in web development, always learning and growing to deliver high-quality solutions
          </p>
          <Link to="portfolio" smooth duration={500} offset={-100} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-700 to-yellow-500 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowRight size={20} className="ml-1" />
            </span>
          </Link>
        </div>

        
        <div className="hidden sm:w-1/2 sm:pl-8 justify-center sm:flex">
          <div className="max-w-xs sm:max-w-none">
            <img src={Gentii} alt="my profile" className="rounded-lg mx-auto mb-2 w-80 sm:w-96" />
          </div>
        </div>

        
        <div className="sm:hidden w-full flex justify-center">
          <div className="max-w-xs sm:max-w-none">
            <img src={Gentii} alt="my profile" className="rounded-lg mx-auto mb-2 w-48" style={{ marginTop: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
