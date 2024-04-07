import React from 'react';
import TodayWorkoutTopCountdown from './TodayWorkoutTopCountdown';

function TodayWorkoutTop() {
    return (
        <div className='WelcomeBar'>
            <div className='WelcomeBarTexts'>
                <h2>Today's workouts</h2>
                <TodayWorkoutTopCountdown />
            </div>
        </div>
    );
}; 

export default TodayWorkoutTop;