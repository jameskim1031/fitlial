import React, { useState, useEffect } from 'react';
import Page from './Page';
import NavBar from './NavBar';
import PastWorkoutTop from './PastWorkoutTop';
import PastWorkoutList from './PastWorkoutList';
import TodayWorkoutCarousel from './TodayWorkoutCarousel';


function Workout() {
  return (
    <Page>
        <div className='MainCard'>
            <div className="MainContent">
                <PastWorkoutTop />
                <PastWorkoutList />
                <TodayWorkoutCarousel />
            </div>
            <NavBar />
        </div>
    </Page>
    
  );
}

export default Workout;
