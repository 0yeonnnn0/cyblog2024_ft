import { useState } from "react";
import CalendarBody from "../Public/Calendar";

function BPLeftside({ selectDate, setSelectDate }) {
    let 글있는날 = {
        '2024-07': ['2024-07-10', '2024-07-15'],
        '2024-08': ['2024-08-01', '2024-08-10', '2024-08-20'],
      }; //하고 지우기
  return (
    <div>
      <CalendarBody selectDate={selectDate} setSelectDate={setSelectDate} 글있는날={글있는날} />
    </div>
  );
}

export default BPLeftside;
