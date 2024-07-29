import { useState } from "react";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css' 


const LibCalendar = () => {
    const [calendar, setCalendar] = useState(new Date);

    return (
        <div className="todo-calendar">
            <Calendar
                onChange={setCalendar} 
                value={calendar} 
                className='react-calendar'
            />
        </div>
    )
}

export default LibCalendar;  