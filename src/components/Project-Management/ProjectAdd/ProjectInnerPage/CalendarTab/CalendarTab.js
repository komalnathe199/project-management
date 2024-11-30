import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarTab = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className='calendar-tab'>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}

export default CalendarTab;
