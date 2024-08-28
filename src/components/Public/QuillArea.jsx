import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { FormEvent, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillArea() {
  const quillRef = useRef(null);

  // 상태 변수
  const [textValue, setTextValue] = useState("");

  // 이미지 핸들러
  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 핸들러가 시작됩니다!");

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files?.[0];

      if (file) {
        const formData = new FormData();
        formData.append("img", file);

        try {
          const result = await axios.post("/community/img", formData);
          console.log("성공 시, 백엔드가 보내주는 데이터", result.data.url);
          const IMG_URL = result.data.url;

          const editor = quillRef.current?.getEditor();

          if (editor) {
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", IMG_URL);
          }
        } catch (error) {
          console.log("실패했어요ㅠ", error);
        }
      }
    });
  };

  // React Quill 모듈 설정
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  // React Quill 포맷 설정
  const formats = ["header", "bold", "italic", "underline", "strike", "image"];

  // 날짜 포맷 함수
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // 현재 날짜 및 시간
  const today = new Date();
  const timestamp = today.getTime();

  return (
    <div className="flex flex-col h-full">
      <ReactQuill
        className="flex flex-col h-full bg-white"
        ref={quillRef}
        theme="snow"
        placeholder="내용을 입력해주세요"
        value={textValue}
        onChange={setTextValue}
        modules={modules}
        formats={formats}
      />
      <textarea className="hidden" value={textValue} name="contents" />
      <div className="flex px-5 py-2 bg-white">
        <div>
          <FontAwesomeIcon icon={faCalendar} />
          <input
            type="text"
            className="mx-3"
            name="writeDate"
            value={formatDate(timestamp)}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
export default QuillArea;
