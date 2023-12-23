import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import weatherappscreenshot from "../images/weather-forecaster-screenshot.png";
import calcscreenshot from "../images/calculator-project-screenshot.png";
import portfolioscreenshot from "../images/portfolio-screenshot.png";

const Projects = () => {
  return (
    <div className="flex flex-col pb-10 text-justify">
      <div>
        <h1 id="projects" className="font-semibold text-md lg:text-lg tracking-tighter text-slate-200 pt-2">
          Projects
        </h1>
        <br></br>
      </div>
      {/* Project 1 */}
      <div className="flex pb-5">
        <div className="pe-10 w-1/4 hidden lg:flex">
          <img className="w-[50px] h-[25px] md:w-[150px] md:h-[50px] lg:w-[300px] lg:h-[80px] "
            src={weatherappscreenshot}
            alt="weather forecaster project screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://react-weather-forecaster-001.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5">Weather Forecaster App</h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit">
            <h3>
              A weather forecast web app loosely designed with figma, developed
              with Reactjs, styled with TailwindCSS, and deployed on Netlify.
              User inputs are first geo-coded into Latitude and Longitude using
              OpenWeather geocode API, then data for the resolved coordinates
              are polled from the OpenWeather weather API.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/react-weather-app"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Figma
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Reactjs
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              TailwindCSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Netlify
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              OpenWeatherAPI
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              OpenWeatherGeocodeAPI
            </button>
          </div>
        </div>
      </div>
      <br></br>
      {/* Project 2 */}
      <div className="flex pb-5">
        <div className="pe-10 w-1/4 hidden lg:flex">
        <img className="w-[50px] h-[25px] md:w-[150px] md:h-[75px] lg:w-[300px] lg:h-[80px] "
            src={calcscreenshot}
            alt="calculator project screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="pe-10 w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://react-calculator-8472c.web.app"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5">Calculator App</h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 h-fit w-fit">
            <h3>
              A simple calculator web app for solving arithmetic equations,
              developed with Reactjs, styled with TailwindCSS, and deployed with
              Firebase.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/calculator"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Reactjs
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              TailwindCSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Firebase
            </button>
          </div>
        </div>
      </div>
      <br></br>
      {/* Project 3 */}
      <div className="flex">
        <div className="pe-10 w-1/4 hidden lg:flex">
        <img className="w-[50px] h-[25px] md:w-[150px] md:h-[75px] lg:w-[300px] lg:h-[80px] "
            src={portfolioscreenshot}
            alt="portfolio screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="pe-10 w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://adedolapo.info"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5">Portfolio/Resume Website</h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 h-fit w-fit">
            <h3>
              This portfolio/resume website was built with Reactjs, styled with
              TailwindCSS, and hosted on Vercel.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Reactjs
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              TailwindCSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Vercel
            </button>
          </div>
          <div className="py-2 hidden">
            <a
              href="https://portfolio-resume-coral.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300 pt-5"
            >
              <h1 className="pe-2">View Full Project Catalog</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Projects;
