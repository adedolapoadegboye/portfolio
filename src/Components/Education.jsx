import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col gap-16 md:gap-20 pb-10 text-justify"
    >
      {" "}
      <div>
        <h1 className="font-extrabold text-slate-200 text-lg md:text-2xl">
          Education
        </h1>
      </div>
      {/* Masters */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
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
              <h2 className="font-bold text-white">
                Masters Degree, Electrical and Computer Engineering, University
                of Calgary
              </h2>
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>Graduated with a CGPA of 3.94/4.00</h3>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/18xoGH_X2YFRc9qGAad9ZbdbsNImFewsG/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex text-white hover:underline hover:underline-offset-2 hover:text-teal-300"
            >
              <h1 className="pe-2 text-white">View Transcripts</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
      {/* Bachelors */}
      <div className="flex hover:border hover:border-slate-900 hover:shadow-2xl hover:px-4 hover:py-4 hover:rounded-2xl hover:shadow-cyan-500/100">
        <div className="pe-10 w-1/4 lg:flex">
          <h1>Sept 2013 - Jun 2018</h1>
        </div>
        <div className="w-full">
          <div className=" hover:text-teal-300">
            <a
              href="https://web.kwasu.edu.ng"
              target="_blank"
              rel="noreferrer"
              className="col font-bold pe-2 pb-5"
            >
              <h2 className="font-bold text-white">
                Bachelors Degree, Electrical and Computer Engineering, Kwara
                State University, Nigeria
              </h2>
            </a>
          </div>
          <div className="pb-5 w-fit h-fit text-justify">
            <h3>Graduated with a CGPA of 3.63/4.00</h3>
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
              <h1 className="pe-2 text-white">View Transcripts</h1>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
