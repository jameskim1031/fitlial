import React from 'react';

function WeeklyStreak() {
    return (
        <div className='WeeklyStreak'>
            <div className="WeeklyStreakTop">
                <h1>Past Week</h1>
            </div>
            <div className='WeeklyStreakBottom'>
                <div className='WeeklyStreakBottomItemMid'>S</div>
                <div className='WeeklyStreakBottomItemBad'>M</div>
                <div className='WeeklyStreakBottomItemGood'>T</div>
                <div className='WeeklyStreakBottomItemMid'>W</div>
                <div className='WeeklyStreakBottomItemGood'>T</div>
                <div className='WeeklyStreakBottomItemGood'>F</div>
                <div className='WeeklyStreakBottomItem'>S</div>
            </div>
        </div>
    );
}; 

export default WeeklyStreak;