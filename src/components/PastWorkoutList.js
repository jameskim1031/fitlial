import React, { useState, useEffect } from 'react';
import DadPicture from '../images/dad.jpeg';
import MomPicture from '../images/mom.jpeg';
import SonPicture from '../images/son.jpeg';
import BrotherPicture from '../images/brother.jpeg';

function PastWorkoutList() {
    return (
        <div className='PastWorkoutList'>
            <div className='PastWorkoutListTop'>
                <h2>Workout Summary</h2>
            </div>
            <div className='PastWorkoutListBottom'>
                <div className='PastWorkoutListBottomItem'>
                    <div className='PastWorkoutListBottomItemName'>
                        <h3>Dad</h3>
                    </div>
                    <div className='PastWorkoutListBottomItemPicture'>
                    <div className='TopBarUserIncompleted'>
                        <img className='TopBarUserImage' src={DadPicture}/>
                    </div>
                    </div>
                    <div className='PastWorkoutListBottomItemStatus'></div>
                </div>
                <div className='PastWorkoutListBottomItem'></div>
                <div className='PastWorkoutListBottomItem'></div>
                <div className='PastWorkoutListBottomItem'></div>
            </div>
        </div>
    );
};

export default PastWorkoutList;
