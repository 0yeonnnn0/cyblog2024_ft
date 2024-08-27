import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GBContents({ guestbook }) {
    return (
      <div className="border-t border-solid border-gray-300">
        {guestbook?.map(function (a, i) {
          return (
            <div className="guestbook-comments" key={i}>
              <div className="guestbook-header flex justify-between w-full pr-4">
                {/* guestbook[i].isUser == true ? 유저이름 색상 변경해주기 */}
                <div
                  className="guestbook-username font-bold font-mono"
                  onClick={() => {
                    console.log(guestbook[i]);
                  }}
                >
                  {guestbook[i].guestName}
                </div>
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  className="guestbook-delete-btn text-gray-500"
                  onClick={() => {
                    console.log("이거 누르면 팝업 띄워줌");
                  }}
                />
              </div>
  
              <div className="pl-6 w-full font-mono">{guestbook[i].contents}</div>
  
              <div className="guestbook-footer pl-6 text-sm">
                <div className="guestbook-upload-date">
                  {guestbook[i].date.slice(2, 10)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  export default GBContents;