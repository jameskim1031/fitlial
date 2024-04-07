import React from 'react';
import TodayWorkoutTopCountdown from './TodayWorkoutTopCountdown';

function PastWorkoutTop({date}) {
    return (
        <div className='WelcomeBar'>
            <div className='WelcomeBarTexts'>
                <h2>{date}</h2>
                <h3>See family's workouts</h3>
            </div>
        </div>
    );
}; 

export default PastWorkoutTop;