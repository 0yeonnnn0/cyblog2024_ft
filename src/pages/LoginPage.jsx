import { useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo_fire.gif";
import LPTextForm from "../components/LoginPage/LPTextForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import NavigationLink from "../components/Public/NavigationLink";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="border border-transparent rounded-[10px] p-[5px]">
      <div className="flex flex-col justify-center">
        <img src={logoImg} alt="Blog Logo Fire ver." className="w-56 mx-auto" />
        <div className="w-login-button m-[20px] mx-auto">
          <div className="border-solid border border-gray-300 rounded-md">
            <div className="bg-gray-300 h-14">
              <div className="flex items-center justify-center h-14 gap-3 text-lg">
                <FontAwesomeIcon icon={faRightToBracket} />
                ID/PW
              </div>
            </div>
            <LPTextForm />
          </div>

          <div className="flex text-sm justify-center mt-4 text-gray-500 gap-3">
            <NavigationLink path="/find/id" label="아이디 찾기" />
            <p>|</p>
            <NavigationLink path="/find/pw" label="비밀번호 찾기" />
            <p>|</p>
            <NavigationLink path="/join" label="회원가입" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
