import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

function CalendarCard() {
    const handleDateClick = (value) => {
    // Handle the date click event
    console.log(value);
    };

    // const tileContent = ({ date, view }) => {
    //     // Add content to specific date, for example, the 15th of any month
    //     if (view === 'month' && date.getDate() === 15) {
    //       return <p>🌟</p>; // Example: Adds a star emoji to the 15th of every month
    //     }
    //   };

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