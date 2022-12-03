import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/KumarAnkitMoha1"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/1.ankit.8/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ankitkumarmohanty/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/AnkitM18-tech"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt />
        </a>
      </div>
      <div>
        <a
          href="https://public.tableau.com/app/profile/ankit.kumar.mohanty"
          target="_blank"
          rel="noreferrer"
        >
          <SiTableau />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/Kumar.16.Ankit"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
