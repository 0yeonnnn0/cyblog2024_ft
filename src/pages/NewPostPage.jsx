import QuillArea from "../components/Public/QuillArea";

function NewPostPage({ setWriteModal }) {
  return (
    <div className="flex absolute justify-center top-0 left-0 w-full h-full">
      <div className="w-full h-full p-14 bg-[#00000088]">
        <div className="flex flex-col justify-between bg-white w-full h-full">
          <h1 className=" text-2xl h-20 p-5">새 글 작성</h1>
          <div className="w-full h-full overflow-y-scroll bg-gray-300 p-5">
            <QuillArea />
          </div>
          <div className="w-full h-20 py-5 flex gap-10 justify-center">
            <button
              onClick={() => setWriteModal(false)}
              className="border w-24 h-10 bg-white border-gray-600 rounded-lg"
            >
              닫기
            </button>
            <button
              onClick={() => setWriteModal(false)}
              className="w-24 h-10 bg-theme-color-blue text-white rounded-lg"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
