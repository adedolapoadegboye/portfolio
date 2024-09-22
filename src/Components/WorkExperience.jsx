import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col gap-16 md:gap-20 pb-10 text-justify"
    >
      <div>
        <h1 className="font-extrabold text-slate-200 text-lg md:text-2xl 2xl:text-4xl">
          Experience
        </h1>
      </div>
      {/* Quectel */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Sept 2024 - Present</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://quectel.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                GNSS Engineer at Quectel Wireless
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
              Providing technical support and guidance to enterprise-level
              customers, helping them integrate and optimize GNSS solutions for
              applications like asset tracking and autonomous systems, while
              ensuring precise positioning and addressing any hardware or
              software challenges
            </h3>
          </div>
          <div className="lg:flex lg:flex-wrap hidden">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              GNSS
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Embedded Software Development
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Documentations
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Hardware Design review{" "}
            </button>
          </div>
        </div>
      </div>
      {/* Tektelic */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Nov 2021 - Sept 2024</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://tektelic.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Sensor Systems Engineer at Tektelic Communications
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
              Designed, tested, and sustained system operations of different
              types of battery-powered sensors, maintaining high quality
              standards in technical and non-technical deliverables.
            </h3>
          </div>
          <div className="lg:flex lg:flex-wrap hidden">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Sensor System Design
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Feature Testing
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Documentations
            </button>
          </div>
        </div>
      </div>
      {/* Calgary Parking Authority */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>May 2021 - Oct 2021</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://www.calgaryparking.com/home.html"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5 text-white 2xl:text-2xl">
                Network Engineer Intern at Calgary Parking Authority
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
              Managed the ticketing system by assigning external tickets to the
              appropriate team for resolution, and providing tier-1 IT support
              to internal users with an overall ticket resolution average of 85%
              within the first 3 days.
            </h3>
          </div>
          <div className="lg:flex lg:flex-wrap hidden">
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Active Directory
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              IP Camera Systems
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Documentations
            </button>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1vLHCaLv5RpZW-xhyLRAm0TfXsteMOYRG/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300 pt-5"
        >
          <h1 className="pe-2 text-white">View Resume</h1>
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;
