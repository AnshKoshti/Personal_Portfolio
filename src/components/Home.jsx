import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className=" flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-6xl font-semibold text-white">
            I'am a full stack dev.
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            magnam pariatur autem cum sed consequuntur, voluptas, tenetur
            corrupti dolorum assumenda quo quos sunt, non rerum in dolorem
            repellat ad ratione.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={400}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ImArrowRight2 size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
