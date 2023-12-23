import React, { useState } from "react";
import About from "./About";
import Education from "./Education";
import PageFooter from "./PageFooter";
import Projects from "./Projects";
import Recommendations from "./Recommendations";
import WorkExperience from "./WorkExperience";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SideNav = () => {
  const [aboutStyle, setAboutStyle] = useState("");
  const [projectStyle, setProjectStyle] = useState("");
  const [experienceStyle, setExperienceStyle] = useState("");
  const [educationStyle, setEducationStyle] = useState("");
  const [recommendationStyle, setRecommendationStyle] = useState("");

  const handleAboutClick = () => {
    if (aboutStyle !== "text-teal-300 font-bolder") {
      setAboutStyle("text-teal-300 font-bolder");
      setProjectStyle("");
      setExperienceStyle("");
      setEducationStyle("");
      setRecommendationStyle("");
    }
  };

  const handleProjectClick = () => {
    if (projectStyle !== "text-teal-300 font-bolder") {
      setAboutStyle("");
      setProjectStyle("text-teal-300 font-bolder");
      setExperienceStyle("");
      setEducationStyle("");
      setRecommendationStyle("");
    }
  };

  const handleExperienceClick = () => {
    if (experienceStyle !== "text-teal-300 font-bolder") {
      setAboutStyle("");
      setProjectStyle("");
      setExperienceStyle("text-teal-300 font-bolder");
      setEducationStyle("");
      setRecommendationStyle("");
    }
  };

  const handleEducationClick = () => {
    if (educationStyle !== "text-teal-300 font-bolder") {
      setAboutStyle("");
      setProjectStyle("");
      setExperienceStyle("");
      setEducationStyle("text-teal-300 font-bolder");
      setRecommendationStyle("");
    }
  };

  const handleRecommendationClick = () => {
    if (recommendationStyle !== "text-teal-300 font-bolder") {
      setAboutStyle("");
      setProjectStyle("");
      setExperienceStyle("");
      setEducationStyle("");
      setRecommendationStyle("text-teal-300 font-bolder");
    }
  };

  return (
    <div>
      <div className="hidden lg:flex lg:flex-col lg:items-start">
        <AnchorLink
          href="#about"
          className="hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button onClick={handleAboutClick} className={aboutStyle}>
            - About
          </button>
        </AnchorLink>
        <AnchorLink
          href="#projects"
          className="hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button onClick={handleProjectClick} className={projectStyle}> - Projects</button>
        </AnchorLink>
        <AnchorLink
          href="#experience"
          className="hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button onClick={handleExperienceClick} className={experienceStyle}> - Experience</button>
        </AnchorLink>
        <AnchorLink
          href="#education"
          className="hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button onClick={handleEducationClick} className={educationStyle}>- Education</button>
        </AnchorLink>
        <AnchorLink
          href="/"
          className="hidden hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button> - Affiliations</button>{" "}
        </AnchorLink>
        <AnchorLink
          href="#recommendations"
          className="hover:scale-100 hover:text-teal-300 hover:font-semibold py-2 active:scale-100 active:text-teal-300 active:font-bold"
        >
          <button onClick={handleRecommendationClick} className={recommendationStyle}>
            {" "}
            - Recommendations
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default SideNav;
