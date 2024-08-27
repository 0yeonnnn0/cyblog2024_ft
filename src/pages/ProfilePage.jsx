import profileImg from "../assets/images/profile_pic.jpeg";
import "../assets/css/profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFileCode } from "@fortawesome/free-regular-svg-icons";

function ProfilePage() {
  return (
    <div>
      <div className="profile-container">
        <img src={profileImg} alt="profile" className="profile-pic"></img>
        <div>
          <FontAwesomeIcon icon={faLaptopCode} />
          <div>by Dongyeon Kim</div>
          <FontAwesomeIcon icon={faCakeCandles} />
          <div>2000. Feb. 20</div>
          <FontAwesomeIcon icon={faFileCode} />
          <div>23.08.07 ~ 23.09.02(Ver.1)</div>
          <div>
            <a href="https://github.com/0yeonnnn0/cyblog2024_ft" target="blank">
              ON GITHUB
            </a>
          </div>
          <FontAwesomeIcon icon={faEnvelope} />
          <div>angrybird2600 @ gmail.com</div>
        </div>
        <div className="profile-note">안녕하세요</div>
      </div>
    </div>
  );
}
export default ProfilePage;
