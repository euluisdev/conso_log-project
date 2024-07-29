import { useState } from "react";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'


const TodoCalendar = () => {
    const [calendar, setCalendar] = useState(new Date);

  return (
    <div>
      <Calendar />
    </div>
  )
}

export default TodoCalendar;