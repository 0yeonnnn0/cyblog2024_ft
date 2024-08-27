/**
 * @폐기예정 파일입니다.
 */

import "../App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../store/store.js";
import axios from "axios";

function HomePage() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  let [userdata, setUserData] = useState([]);

  useEffect(() => {}, []);

  return <>asdf</>;
}

export default HomePage;
