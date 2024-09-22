import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="text-justify pb-10 leading-relaxed tracking-wide"
    >
      <h2 className="font-semibold text-md md:text-lg lg:text-2xl tracking-tighter text-slate-200 pt-2 hidden">
        About
      </h2>
      <br></br>
      <h3 className="font-extrabold text-slate-200 text-lg md:text-2xl lg:text-4xl">
        Hello World!
      </h3>
      <br></br>
      <h3 className="2xl:text-lg">
        My name is <span className="font-extrabold text-slate-200">Ade </span> —
        a <span className="font-extrabold text-slate-200">GNSS Engineer</span>{" "}
        with a deep passion for Satellite Communications, including Positioning
        and Navigation systems, Space Communications, and Satellite Payload
        Engineering. I focus on researching, designing, and developing solutions
        that address challenges in the space communications industry—whether
        through embedded software or full-stack web and mobile applications for
        post-processing and comprehensive system evaluations.
        <br />
        <br />
        My professional journey began as a{" "}
        <span className="font-extrabold text-slate-200">
          Systems Engineer-in-Training
        </span>{" "}
        at{" "}
        <span className="font-extrabold text-slate-200">
          Tektelic Communications
        </span>
        , where I honed my expertise in LoRaWAN IoT sensors and systems design.
        A notable achievement during this time was the design and testing of a
        lone worker safety device, utilizing GNSS for outdoor localization and
        BLE technology for indoor positioning.
        <br />
        <br />I have since transitioned into{" "}
        <span className="font-extrabold text-slate-200">GNSS Engineering</span>,
        and currently work as a{" "}
        <span className="font-extrabold text-slate-200">GNSS Engineer</span> at{" "}
        <span className="font-extrabold text-slate-200">Quectel</span>. In this
        role, I support and assist customers in implementing GNSS solutions to
        meet their complex business needs. These applications span from asset
        tracking—requiring decimeter-level accuracy—to advanced use cases such
        as self-driving cars and autonomous systems, which demand
        centimeter-level precision.
      </h3>
      <br></br>
      <h3 className="2xl:text-lg">
        Excited to collaborate on the next big project? Feel free to connect
        with me through any of my social links or email me at{" "}
        <span className="font-extrabold text-slate-200">
          adedolapo.adegboye@alumni.ucalgary.ca
        </span>
        . Let's engineer greatness together!
      </h3>
    </div>
  );
};

export default About;
