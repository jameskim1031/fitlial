import React, { useState, useEffect } from 'react';
import DadPicture from '../images/dad.jpeg';
import MomPicture from '../images/mom.jpeg';
import SonPicture from '../images/son.jpeg';
import BrotherPicture from '../images/brother.jpeg';

function PastGoodWorkoutList() {
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
                            <div className='PastWorkoutUserIncompleted'>
                                <img className='PastWorkoutUserImage' src={DadPicture}/>
                            </div>
                        </div>
                        <div className='PastWorkoutListBottomItemStatus'>
                            <button className='PastWorkoutListBottomItemStatusIncompleted'>Incompleted</button>
                        </div>
                    </div>
                    <div className='PastWorkoutListBottomItem'>
                        <div className='PastWorkoutListBottomItemName'>
                            <h3>Mom</h3>
                        </div>
                        <div className='PastWorkoutListBottomItemPicture'>
                            <div className='PastWorkoutUserCompleted'>
                                <img className='PastWorkoutUserImage' src={MomPicture}/>
                            </div>
                        </div>
                        <div className='PastWorkoutListBottomItemStatus'>
                            <button className='PastWorkoutListBottomItemStatusCompleted'>Completed</button>
                        </div>
                    </div>
                    <div className='PastWorkoutListBottomItem'>
                        <div className='PastWorkoutListBottomItemName'>
                            <h3>Me</h3>
                        </div>
                        <div className='PastWorkoutListBottomItemPicture'>
                            <div className='PastWorkoutUserCompleted'>
                                <img className='PastWorkoutUserImage' src={SonPicture}/>
                            </div>
                        </div>
                        <div className='PastWorkoutListBottomItemStatus'>
                            <button className='PastWorkoutListBottomItemStatusCompleted'>Completed</button>
                        </div>
                    </div>
                    <div className='PastWorkoutListBottomItem'>
                        <div className='PastWorkoutListBottomItemName'>
                            <h3>Brother</h3>
                        </div>
                        <div className='PastWorkoutListBottomItemPicture'>
                            <div className='PastWorkoutUserCompleted'>
                                <img className='PastWorkoutUserImage' src={BrotherPicture}/>
                            </div>
                        </div>
                        <div className='PastWorkoutListBottomItemStatus'>
                            <button className='PastWorkoutListBottomItemStatusCompleted'>Completed</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PastGoodWorkoutList;
