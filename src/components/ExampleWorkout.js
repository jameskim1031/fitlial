import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Page from './Page';
import NavBar from './NavBar';
import PastWorkoutTop from './PastWorkoutTop';
import PastMidWorkoutList from './PastMidWorkoutList';
import PastPoorWorkoutList from './PastPoorWorkoutList';
import PastGoodWorkoutList from './PastGoodWorkoutList';
import PastVeryGoodWorkoutList from './PastVeryGoodWorkoutList';
import TodayWorkoutCarouselPre from './TodayWorkoutCarouselPre';
import TodayWorkoutCarouselPost from './TodayWorkoutCarouselPost';


function Workout() {
    const location = useLocation();
    const { date, status } = location.state || {};

    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }) : 'No date selected';

    let workoutlistDisplay = <PastVeryGoodWorkoutList />;
    if (status == 3) {
        workoutlistDisplay = <PastGoodWorkoutList />;
    } else if (status == 2) {
        workoutlistDisplay = <PastMidWorkoutList />;
    } else if (status == 1) {
        workoutlistDisplay = <PastPoorWorkoutList />;
    }


    return (
        <Page>
            <div className='MainCard'>
                <div className="MainContent">
                    <PastWorkoutTop date={formattedDate}/>
                    {workoutlistDisplay}
                    <TodayWorkoutCarouselPre />
                </div>
                <NavBar />
            </div>
        </Page>
        
    );
}

export default Workout;
