import GBTextArea from "./GBTextArea";
import GBUserInput from "./GBUserInput";

function GBForm({ user, textRef, guestbook, setGuestbook }) {
  function changeGuestBook() {
    console.log(textRef.current.value);
    // setGuestbook([textRef.current.value], [...guestbook]);
  }

  return (
    <div className="guestbook-post">
      <GBUserInput user={user} />
      <div className="guestbook-upload">
        <GBTextArea textRef={textRef} />
      </div>
      <div className="flex justify-end">
        <button
          className="guestbook-upload-btn text-theme-color-blue bg-[#D1E9F6]"
          onClick={() => {
            changeGuestBook();
          }}
          type="submit"
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default GBForm;
