import React, { useState, useEffect } from 'react';

function TodayWorkoutList() {
    return (
        <div className='TodayWorkoutList'>
            <div className='TodayWorkoutListItem'>
                <div className='TodayWorkoutListItemTop'>
                    <h3>푸시업</h3>
                </div>
                <div className='TodayWorkoutListItemBottom'>
                    <div className='TodayWorkoutListItemBottomVideoContainer'>
                        <video width="80" height="60" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <button className='TodayWorkoutListItemBottomButton'>Upload</button>
                </div>
            </div>
            <div className='TodayWorkoutListItem'>
                <div className='TodayWorkoutListItemTop'>
                    <h3>Wall sit</h3>
                </div>
                <div className='TodayWorkoutListItemBottom'>
                    <div className='TodayWorkoutListItemBottomVideoContainer'>
                        <video width="80" height="60" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <button className='TodayWorkoutListItemBottomButton'>Upload</button>
                </div>
            </div>
            <div className='TodayWorkoutListItem'>
                <div className='TodayWorkoutListItemTop'>
                    <h3>板</h3>
                </div>
                <div className='TodayWorkoutListItemBottom'>
                    <div className='TodayWorkoutListItemBottomVideoContainer'>
                        <video width="80" height="60" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <button className='TodayWorkoutListItemBottomButton'>Upload</button>
                </div>
            </div>
            <div className='TodayWorkoutListItem'>
                <div className='TodayWorkoutListItemTop'>
                    <h3>Sit up</h3>
                </div>
                <div className='TodayWorkoutListItemBottom'>
                    <div className='TodayWorkoutListItemBottomVideoContainer'>
                        <video width="80" height="60" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <button className='TodayWorkoutListItemBottomButton'>Upload</button>
                </div>
            </div>
            <div className='TodayWorkoutListItem'>
                <div className='TodayWorkoutListItemTop'>
                    <h3>Squat</h3>
                </div>
                <div className='TodayWorkoutListItemBottom'>
                    <div className='TodayWorkoutListItemBottomVideoContainer'>
                        <video width="80" height="60" controls>
                            <source src="movie.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <button className='TodayWorkoutListItemBottomButton'>Upload</button>
                </div>
            </div>
            <div className='TodayWorkoutListItemSubmit'>
                <button className='TodayWorkoutListItemSubmitButton'>Submit</button>
            </div>
        </div>
    );
};

export default TodayWorkoutList;
