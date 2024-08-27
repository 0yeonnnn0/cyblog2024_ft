import { useCallback, useRef } from "react";

function GBTextArea({ textRef }) {
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  return (
    <textarea
      className="guestbook-textarea "
      ref={textRef}
      onInput={handleResizeHeight}
      placeholder="방명록입니다."
      rows={1}
      maxLength={300}
      name="contents"
    />
  );
}

export default GBTextArea;
