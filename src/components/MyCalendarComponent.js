import React from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; // Default styling

function CalendarCard() {
    const navigate = useNavigate();
    const handleDateClick = (value) => {
    // Handle the date click event
    console.log(value);
    let statusValue = 4;
    if (value.getDate() % 3 == 0) {
      statusValue = 3;
    } else if (value.getDate() % 4 == 0) {
      statusValue = 2;
    } else if (value.getDate() % 5 == 0) {
      statusValue = 1;
    }

    navigate('/example', { state: { date: value, status: statusValue } });
    };


    const tileClassName = ({ date, view }) => {
        // Initialize class name string
        let nameOfClass = '';
        
        if (view === 'month') {
          // Normalize both dates to midnight for accurate comparison
          const today = new Date();
          today.setHours(0, 0, 0, 0); // Set today's date to midnight
      
          const compareDate = new Date(date);
          compareDate.setHours(0, 0, 0, 0); // Ensure the comparison date is also set to midnight
      
          // Check if the date is before today
          if (compareDate <= today) {
            nameOfClass += 'pastDateCircle'; // Apply class if the date is in the past
          }

          if (date.getDate() % 3 == 0) {
            nameOfClass += 'Triple';
          } 

          if (date.getDate() % 4 == 0) {
            nameOfClass += 'Quarter';
          } 

          if (date.getDate() % 5 == 0) {
            nameOfClass += 'Fifth';
          } 

        }

      
        return nameOfClass;
      };

    return (
    <div className="myCalendarCard">
        <Calendar
        onClickDay={handleDateClick}
        tileClassName={tileClassName}
        />
    </div>
    );
}

export default CalendarCard;