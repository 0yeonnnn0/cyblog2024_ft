import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function HPPostIt() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const location = useLocation();
  const pathname = location.pathname;

  const topButtons = [
    { path: "/", label: "홈" },
    { path: "/profile", label: "프로필" },
    { path: "/note/all", label: "블로그" },
    { path: "/guestbook", label: "방명록" },
    { path: "/writenotes", label: "글쓰기" },
  ];

  const bottomButtons = [
    { path: "/login", label: "로그인", condition: !state.isLoggedIn },
    { path: "/mypage", label: "MyPage", condition: state.isLoggedIn },
  ];

  const getButtonClass = (path) => {
    const isSelected = pathname === path;
    const baseClass =
      "block w-post-it h-post-it rounded-post-it border border-black border-l-0 m-[3px] -ml-[1px] text-[17px] shadow-[0px_2px_0px_0px_rgba(0,0,0,0.5)] outline-none select-none";
    const hoverClass = "hover:bg-white hover:text-black";
    const selectedClass = "bg-white";
    const defaultClass = "bg-theme-color-blue";

    const textClass = isSelected ? "text-black" : "text-white";

    return `${baseClass} ${hoverClass} ${
      isSelected ? selectedClass : defaultClass
    } ${textClass}`;
  };

  return (
    <div className="float-right w-0 m-post-it flex flex-col gap-36">
      <div>
        {topButtons.map((button, index) => {
          return (
            <button
              key={index}
              className={getButtonClass(button.path)}
              onClick={() => {
                navigate(button.path);
              }}
            >
              {button.label}
            </button>
          );
        })}
      </div>
      <div>
        {bottomButtons.map((button, index) => {
          return button.condition ? (
            <button
              key={index}
              className={getButtonClass(button.path)}
              onClick={() => {
                navigate(button.path);
              }}
            >
              {button.label}
            </button>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default HPPostIt;
