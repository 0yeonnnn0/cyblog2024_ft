import "../../App.css";

import { Route, Routes } from "react-router-dom";
import HPViews from "./HPViews";
import HPLeftSide from "./HPLeftSide";
import HPBlogTitle from "./HPBlogTitle";
import HPPostIt from "./HPPostIt";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import GuestbookPage from "../../pages/GuestbookPage";
import BlogPage from "../../pages/BlogPage";
import BPLeftside from "../BlogPage/BPLeftside";
import { useState } from "react";
import NewPostPage from "../../pages/NewPostPage";

function HPFrame() {
  const [selectDate, setSelectDate] = useState(new Date());

  return (
    <div className="flex ml-5 mt-5">
      <div className="basis-60 float-right rounded-3xl bg-white border-gray-500 border-solid border-r-0 p-outerLeft border-2">
        <div className="bg-gray-300 bg-clip-content border-dashed border-gray-500 border-2 rounded-3xl p-dot-left float-right border-r-0">
          <HPViews />

          <div className="bg-white border-solid border-gray-400 border-3 rounded-2xl h-content w-content-left m-content-left p-content-left">
            <Routes>
              <Route
                path="/blog"
                element={
                  <BPLeftside
                    selectDate={selectDate}
                    setSelectDate={setSelectDate}
                  />
                }
              />

              <Route path="*" element={<HPLeftSide />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="basis-outerRight float-left rounded-3xl bg-white border-gray-500 border-solid border-l-0 pt-4 pb-4 border-2">
        <div className="w-dotRight bg-gray-300 bg-clip-content border-dashed border-gray-500 border-2 rounded-3xl p-dot-right float-left border-l-0">
          <HPBlogTitle />

          <HPPostIt />

          <div className="w-content-right bg-white border-solid border-gray-400 border-3 h-content rounded-2xl m-content-right p-content-right">
            <div className="h-full overflow-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route
                  path="/blog"
                  element={<BlogPage selectDate={selectDate} />}
                />
                <Route path="/guestbook" element={<GuestbookPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HPFrame;
