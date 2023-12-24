import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div>
      <div>
        <h1 id="education" className="font-semibold text-md lg:text-lg tracking-tighter text-slate-200 pt-2">
          Education
        </h1>
        <br></br>
      </div>
      {/* Masters */}
      <div className="flex pb-5">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Jan 2020 - May 2022</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://grad.ucalgary.ca/future-students/explore-programs/electrical-and-computer-engineering-meng-course"
              target="_blank"
              rel="noreferrer"
              className="col font-bold pe-2 pb-5"
            >
              <h2 className="">
                Masters Degree, Electrical and Computer Engineering
              </h2>
              <h2>University of Calgary</h2>
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
              Graduated with a CGPA of 3.94/4.00
            </h3>
          </div>
          <div className="hidden">
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
              href="https://drive.google.com/file/d/18xoGH_X2YFRc9qGAad9ZbdbsNImFewsG/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300"
            >
              <h1 className="pe-2">View Transcripts</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      {/* Bachelors */}
      <div className="flex pb-2">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Sept 2013 - June 2018</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://web.kwasu.edu.ng"
              target="_blank"
              rel="noreferrer"
              className="col font-bold pe-2 pb-5"
            >
              <h2 className="">
                Bachelors Degree, Electrical and Computer Engineering
              </h2>
              <h2> Kwara State University, Nigeria</h2>
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>
                Graduated with a CGPA of 3.63/4.00
            </h3>
          </div>
          <div className="hidden">
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
              href="https://drive.google.com/file/d/1wWqsRs2XleHusSvqgDDcYmWPsYSIfu3j/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300"
            >
              <h1 className="pe-2">View Transcripts</h1>
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

export default Education;
