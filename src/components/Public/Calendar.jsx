import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "../../assets/css/calendar.css";

function CalendarBody({ selectDate, setSelectDate, 글있는날 }) {
  const [boldDates, setBoldDates] = useState(new Set());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  //   API 요청
  const fetchBoldDates = (month) => {
    // 예시로 로컬 데이터를 사용
    const data = 글있는날;
    return new Set(data[`2024-${String(month + 1).padStart(2, "0")}`] || []);
  };

  useEffect(() => {
    const loadDates = () => {
      const dates = fetchBoldDates(currentMonth);
      setBoldDates(dates);
    };
    loadDates();
  }, [currentMonth]);

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      if (boldDates.has(dateString)) {
        return "bold-date";
      }
    }
    return null;
  };

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setCurrentMonth(activeStartDate.getMonth());
  };

  return (
    <div>
      <Calendar
        className="font-mono justify-center"
        calendarType="gregory"
        showNeighboringMonth={false}
        formatDay={(locale, date) => format(date, "d")}
        minDetail="year"
        next2Label={null}
        prev2Label={null}
        value={selectDate}
        onChange={setSelectDate}
        locale="ko"
        tileClassName={tileClassName}
        onActiveStartDateChange={handleActiveStartDateChange}
      />
      <div className="mt-6 flex justify-center">
        <button onClick={() => setSelectDate(new Date())} className="p-1 border border-gray-600">
          Go Today
        </button>
      </div>
    </div>
  );
}

export default CalendarBody;
