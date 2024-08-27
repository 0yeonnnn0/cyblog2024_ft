import { useNavigate } from "react-router-dom";

function NavigationLink({ path, label }) {
  const navigate = useNavigate();
  return (
    <a
      className="cursor-pointer text-center"
      onClick={() => {
        navigate(path);
      }}
    >
      {label}
    </a>
  );
}

export default NavigationLink;
