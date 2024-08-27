import { useState } from "react";
import profileImg from "../../assets/images/profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faSquarePen } from "@fortawesome/free-solid-svg-icons";

function HPLeftSide() {
  return (
    <div className="flex items-center justify-between flex-col gap-3 h-full pb-3">
      <div>
        <img
          src={profileImg}
          alt="profile"
          className="w-40 h-40 rounded-xl bg-cover mb-5 select-none"
        ></img>

        <div className="w-40 h-32 text-pretty select-none">
          제 일기장에 오신 것을 환영합니다. 🌱
        </div>
      </div>
      <div className="flex gap-5 font-black select-none">
        <a href="https://www.instagram.com/___yeonnnn" target="_blank">
          <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
        </a>
        <a href="https://github.com/0yeonnnn0" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        </a>
        <a href="https://lmsd1.tistory.com/" target="_blank">
          <FontAwesomeIcon icon={faSquarePen} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default HPLeftSide;
