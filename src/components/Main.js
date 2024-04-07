import React from 'react';
import Page from './Page';
import TopBar from './TopBar';
import TodayWorkout from './TodayWorkout';
import WelcomeBar from './WelcomeBar';
import NavBar from './NavBar';
import WeeklyStreak from './WeeklyStreak';

function Main() {
    return (
        <Page>
            <div className='MainCard'>
                <div className="MainContent">
                    <WelcomeBar />
                    <TopBar />
                    <TodayWorkout />
                    <WeeklyStreak />
                </div>
                <NavBar />
            </div>
        </Page>
    );
}; 

export default Main;