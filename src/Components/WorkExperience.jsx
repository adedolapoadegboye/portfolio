import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div>
      <div>
        <h1
          id="experience"
          className="font-semibold text-md lg:text-lg tracking-tighter text-slate-200 pt-2"
        >
          Experience
        </h1>
        <br></br>
      </div>
      {/* Tektelic */}
      <div className="flex">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Nov 2021 - Present</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://tektelic.com"
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <h2 className="font-bold pe-2 pb-5">
                IoT Sensor Systems Engineer at Tektelic Communications
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
              System Design
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Feature Testing
            </button>
            <button className="px-2 text-teal-300 bg-teal-900 mx-2 my-1 rounded-full">
              Documentations
            </button>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1lspIiInBWXffOohOf7EmahowaZNmPW_d/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300 pt-5"
            >
              <h1 className="pe-2">View Resume</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      {/* Calgary Parking Authority */}
      <div className="flex">
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
              <h2 className="font-bold pe-2 pb-5">
                Network Engineer Intern at Calgary Parking Authority
              </h2>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
              Managed the ticketing system by assigning external
              tickets to the appropriate team for resolution, and providing
              tier-1 IT support to internal users with an overall ticket
              resolution average of 85% within the first 3 days.
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
          <div>
            <a
              href="https://drive.google.com/file/d/1VMTODrDHeRGGPSQpWc74iFXFOaguCnBG/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300 pt-5"
            >
              <h1 className="pe-2">View Resume</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default WorkExperience;
