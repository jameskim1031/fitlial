import React from 'react';
import Page from './Page';
import WelcomeBarMain from './WelcomeBarMain';
import CalendarTopBar from './CalendarTopBar';
import NavBar from './NavBar';
import MyCalendarComponent from './MyCalendarComponent';
import FamilyGoals from './FamilyGoals';

function CalendarCard() {
    return (
        <Page>
            <div className='MainCard'>
                <div className="MainContent">
                    <CalendarTopBar />
                    <MyCalendarComponent />
                    <FamilyGoals />
                </div>
                <NavBar />
            </div>
        </Page>
    );
};

export default CalendarCard;