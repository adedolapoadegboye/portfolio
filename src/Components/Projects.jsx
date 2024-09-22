import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import weatherappscreenshot from "../images/weather-forecaster-screenshot.png";
import calcscreenshot from "../images/calculator-project-screenshot.png";
import portfolioscreenshot from "../images/portfolio-screenshot.png";
import aptechstore from "../images/aptechstore-screenshot.png";
import gnssmetrics from "../images/gnssmetrics.png";
import coinwatchpro from "../images/coinwatchpro.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col gap-16 md:gap-20 pb-10 text-justify"
    >
      <h1 className="font-extrabold text-slate-200 text-lg md:text-2xl 2xl:text-4xl">
        Projects
      </h1>
      {/* Project 1 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
            src={gnssmetrics}
            alt="gnss metrics project screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://gnssmetrics.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                GNSS Metrics
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit">
            <h3>
              A webtool for analyzing static GNSS position readings. Features
              include Circular Error Probability (CEP), Spherical Error
              Probability (SEP), and other relevant analytics.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/gnss-metrics"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2 text-white">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Figma
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              React
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
      {/* Project 2 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
            src={coinwatchpro}
            alt="e-commerce website project screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://coinwatchpro.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Coinwatch Pro
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit">
            <h3>
              A full-stack expense tracker web app designed to efficiently
              manage personal finances by allowing users to seamlessly record,
              categorize, analyze, and track their expenses and subscriptions in
              real-time with user-friendly interfaces and customizable features.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/CoinWatchPro"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2 text-white">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Figma
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              React
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
      {/* Project 3 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
            src={aptechstore}
            alt="e-commerce website project screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://aptechstore.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                AP-Tech Store
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit">
            <h3>
              A full-stack MERN e-commerce application offering a seamless
              shopping experience, featuring user-friendly interfaces and robust
              backend management for inventory and customer interactions.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/ap-tech"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2 text-white">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Figma
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              React
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              TailwindCSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Node.js
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Express.js
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              MongoDB
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              AWS S3
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Vercel
            </button>
          </div>
        </div>
      </div>
      {/* Project 4 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
            src={portfolioscreenshot}
            alt="portfolio screenshot"
            width={500}
            height={250}
          ></img>
        </div>
        <div className="pe-10 w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://www.adedolapo.dev"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Portfolio Website
              </h2>
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
              <h3 className="w-fit pe-2 text-white">Source code</h3>
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
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
            </button>
          </div>
          <div className="py-2 hidden">
            <a
              href="https://adedolapo.dev"
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
      {/* Project 5 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
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
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Weather Forecaster App
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit">
            <h3>
              An API-based weather forecast web app providing up-to-date weather
              information and forecasts for locations worldwide, offering users
              accurate and accessible weather data for planning activities and
              staying informed.
            </h3>
          </div>
          <div className="pb-5">
            <a
              href="https://github.com/adedolapoadegboye/react-weather-app"
              target="_blank"
              rel="noreferrer"
              className="flex hover:text-teal-300"
            >
              <h3 className="w-fit pe-2 text-white">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Figma
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              React
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
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
      {/* Project 6 */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 hidden md:flex">
          <img
            className="w-full h-fit"
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
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Calculator App
              </h2>
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
              <h3 className="w-fit pe-2 text-white">Source code</h3>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="flex flex-wrap">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              React
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              TailwindCSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Firebase
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              HTML
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              CSS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
