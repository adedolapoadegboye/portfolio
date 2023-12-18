import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Socials = () => {
  return (
    <div className="flex gap-x-4 pt-4">
      <a
        href="https://github.com/adedolapoadegboye"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://www.instagram.com/prince.deepee"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://twitter.com/AdeTheDeveloper"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaTwitter size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/adegboyeadedolapo/"
        rel="noreferrer"
        target="_blank"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaLinkedin size={25} />
      </a>
    </div>
  );
};

export default Socials;
