import "../App.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  let [userdata, setUserData] = useState([]);

  useEffect(() => {}, []);

  return (
    <>홈페이지 개발중
    </>
  );
}

export default HomePage;
