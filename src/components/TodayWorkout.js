import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import CountdownTimer from './CountdownTimer';

function TodayWorkout({workouts}) {
    
    // console.log("today workout");
    // console.log(workoutsList);

    const navigate = useNavigate();
    const handleOnClick = () => {
        // Handle the date click event
        navigate('/today');
    };

    return (
        <div className="TodayWorkoutCard">
            <div className="TodayWorkoutCardTop">
                <h1>Today's workout</h1>
            </div>
            <div className="TodayWorkoutCardMiddle">
                {workouts ? workouts.map((workout)=>(
                    <div key={workout.id} className="TodayWorkoutCardMiddleItem">
                    <img className="TodayWorkoutCardMiddleItemImage" src={workout.imageURL}/>
                    <div className="TodayWorkoutCardMiddleItemName">{workout.workoutName}</div>
                </div>
                    )) : null}
            </div>
            <div className="TodayWorkoutCardBottom">
                <button onClick={handleOnClick}>Complete</button>
                <CountdownTimer />
            </div>
        </div>
    );
};

export default TodayWorkout;


{/* <div className="TodayWorkoutCardMiddleItem">
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
                    <img className="TodayWorkoutCardMiddleItemImage" src={Squat}/>
                    <div className="TodayWorkoutCardMiddleItemName">Squat</div>
                </div> */}