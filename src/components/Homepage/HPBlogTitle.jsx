import { useNavigate } from "react-router-dom";

function HPBlogTitle() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row flex-nowrap justify-between items-end h-14 px-6">
      <p
        className="inline-block text-3xl cursor-pointer select-none"
        onClick={() => {
          navigate("/");
        }}
      >
        Trust.
      </p>
      <span className="float-right text-xs mr-2 text-gray-600">
        https://cyblog.fly.dev
      </span>
    </div>
  );
}

export default HPBlogTitle;
