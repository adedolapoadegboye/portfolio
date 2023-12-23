import React from "react";

const Animation = () => {
  return (
    <div className="hidden lg:flex lg:flex-col w-3/4">
      <div className="pb-5 font-extrabold text-white">Fun Fact about Me</div>
      <div className="text-justify">
        <h1>
          In my free time, I enjoy participating in business and product naming
          contests and selling domain names on{" "}
          <span>
            <a
              href="https://www.squadhelp.com/domain-portfolio/Deepee/70514"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-300 font-bold"
            >
              Squadhelp.com
            </a>
          </span>{" "}
          <br></br>
          <br></br>
          Check out some of the product and business name and tagline contests
          I've won in the past{" "}
          <a
            href="https://www.squadhelp.com/winning-portfolio/Deepee/70514"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 font-bold"
          >
            here
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Animation;
