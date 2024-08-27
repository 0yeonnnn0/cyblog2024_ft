import {
  faEllipsisV,
  faTrashCan,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/css/guestbook.css";
import GBTextArea from "../components/GuestBook/GBTextArea";
import GBForm from "../components/GuestBook/GBForm";
import GBContents from "../components/GuestBook/GBContents";

function GuestbookPage({ user }) {
  const textRef = useRef();
  let [guestbook, setGuestbook] = useState([
    {
      _id: "1",
      guestName: "guestName1",
      date: "2021-09-01",
      contents: "contents",
      isUser: true,
    },
    {
      _id: "2",
      guestName: "guestName2",
      date: "2021-09-01",
      contents: "contents",
      isUser: false,
    },
    {
      _id: "2",
      guestName: "guestName3",
      date: "2021-09-01",
      contents: "contents",
      isUser: false,
    },
  ]);

  function getGuestbookAPI() {
    // setLoading(true);
    // axios.get('/guestbook/list')
    //     .then((result) => {
    //         setGuestbook(result.data.reverse());
    //         setLoading(false);
    //     });
  }
  useEffect(() => {
    getGuestbookAPI();
  }, []);

  return (
    <div className="guestbook-form p-2">
      <GBForm
        user={user}
        textRef={textRef}
        guestbook={guestbook}
        setGuestbook={setGuestbook}
      />

      <GBContents guestbook={guestbook} user={user} />
    </div>
  );
}

export default GuestbookPage;
