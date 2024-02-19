import React from "react";

const About = () => {
  return (
    <div name="about" className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center h-full">
        <div className="pb-3 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About:</p>
        </div>
        <div className="text-xl mt-8 sm:mt-20 max-w-prose">
          <p className="mb-1"> 
            Let's journey into the digital realm together. As a skilled web developer, I navigate through the intricacies of coding to tackle real-world challenges. Starting with Java and moving on to Kotlin, I've honed my skills across different programming languages. Transitioning smoothly into web development, I've crafted various solutions, each marking a step in my journey of growth and transformation. Join me as we explore and innovate in this dynamic landscape.
          </p>
          <p className="mb-1"> 
            As a seasoned full-stack web developer, I excel in crafting dynamic user interfaces with ReactJS and TailwindCSS, while leveraging the power of NodeJS and ExpressJS to engineer robust backend solutions, complete with RESTful APIs. 
            Yet, my expertise extends beyond the realm of technical prowess. I bring to the table a profound dedication to collaboration and a relentless drive for innovation. With each new challenge, I see an opportunity to unite minds and ignite creativity.
          </p>
          <p className="mb-1"> 
            I invite you to join me in a collaborative journey of exploration and growth. Together, we can leverage our individual talents, merge our unique perspectives, and collectively advance the boundaries of digital excellence. Let's unite and create something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
