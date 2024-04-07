import React, { useState, useEffect } from 'react';
import PushUp from "../images/pushup.jpeg";
import WallSit from "../images/wallsit.jpeg";
import Plank from "../images/plank.png";
import SitUp from "../images/situp.avif";
import CountdownTimer from './CountdownTimer';

function TodayWorkout() {
    return (
        <div className="TodayWorkoutCard">
            <div className="TodayWorkoutCardTop">
                <h1>Today's workout</h1>
            </div>
            <div className="TodayWorkoutCardMiddle">
                <div className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={PushUp}/>
                    <div className="TodayWorkoutCardMiddleItemName">푸시업</div>
                </div>
                <div className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={WallSit}/>
                    <div className="TodayWorkoutCardMiddleItemName">Wall sit</div>
                </div>
                <div className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={Plank}/>
                    <div className="TodayWorkoutCardMiddleItemName">板</div>
                </div>
                <div className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={SitUp}/>
                    <div className="TodayWorkoutCardMiddleItemName">Sit Up</div>
                </div>
                <div className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={SitUp}/>
                    <div className="TodayWorkoutCardMiddleItemName">Sit Up</div>
                </div>
            </div>
            <div className="TodayWorkoutCardBottom">
                <button>Complete</button>
                <CountdownTimer />
            </div>
        </div>
    );
};

export default TodayWorkout;
