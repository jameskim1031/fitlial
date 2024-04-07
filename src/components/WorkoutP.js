import React, { useState, useEffect } from 'react';
import Page from './Page';
import NavBar from './NavBar';
import TodayWorkoutTop from './TodayWorkoutTop';
import TodayWorkoutList from './TodayWorkoutList';
import TodayWorkoutCarouselPre from './TodayWorkoutCarouselPre';
import TodayWorkoutCarouselPost from './TodayWorkoutCarouselPost';


function WorkoutPost() {

  return (
    <Page>
        <div className='MainCard'>
            <div className="MainContent">
                <TodayWorkoutTop />
                <TodayWorkoutList />
                <TodayWorkoutCarouselPost />
            </div>
            <NavBar />
        </div>
    </Page>
    
  );
}

export default WorkoutPost;
