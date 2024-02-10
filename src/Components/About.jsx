import React from "react";

const About = () => {
  return (
    <div className="text-justify pb-10 ">
      <h2 className="font-semibold text-md lg:text-lg tracking-tighter text-slate-200 pt-2 hidden">
        About
      </h2>
      <br></br>
      <h3 id="about" className="font-extrabold text-slate-200">
        Hello World!
      </h3>
      <br></br>
      <h3>
        My interest in web development started in{" "}
        <span className="font-extrabold text-slate-200">early 2022</span> when I
        started designing and developing user-friendly dashboards for IoT
        applications as part of my responsibilities as an{" "}
        <span className="font-extrabold text-slate-200">
          IoT Systems Engineer-in-training at TEKTELIC
        </span>
        . Since then, I've dedicated my time to truly learn and understand the
        concepts of web development, with the goal of using my acquired coding
        skills and my experience in system design to create stunning and
        user-friendly digital experiences that is accessible for all.
      </h3>
      <br></br>
      <h3>
        I am not just looking for{" "}
        <span className="font-extrabold text-slate-200">collaborations</span> in
        web development; I'm seeking a open and exciting environment
        where I'll be able to make impactful contributions to solving real life problems. Whether
        you have an exciting project in mind or need an extra pair of hands on
        an ongoing endeavor, please connect with me through any of my social
        accounts, or reach out to me via e-mail at{" "}
        <span className="font-extrabold text-slate-200">
          adedolapo.adegboye@alumni.ucalgary.ca
        </span>

      </h3>
    </div>
  );
};

export default About;
