import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";


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
        href="https://www.instagram.com/adethedeveloper"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://x.com/AdeTheDeveloper"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-125 hover:text-teal-300"
      >
        <FaXTwitter size={25} />
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
