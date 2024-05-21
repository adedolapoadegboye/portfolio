import React from "react";

const Animation = () => {
  return (
    <div className="hidden md:flex md:flex-col w-3/4">
      <div className="pb-5 font-extrabold text-white text-lg md:text-2xl">
        Fun fact about me
      </div>
      <div className="text-justify">
        <h1>
          In my free time, I enjoy participating in business and product naming
          contests and selling domain names on{" "}
          <span>
            <a
              href="https://www.squadhelp.com/domain-portfolio/Deepee/70514"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 font-bold text-white"
            >
              Atom.com
            </a>
          </span>{" "}
          <br></br>
          <br></br>
          Check out some of the products and businesses I've helped transform{" "}
          <a
            href="https://www.squadhelp.com/winning-portfolio/Deepee/70514"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 font-bold text-white"
          >
            here
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Animation;
