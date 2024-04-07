import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import DadVideo from '../video/dad.MOV';
import PushUp from '../video/push_up.MOV';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiHeart } from "react-icons/bi";

function TodayWorkoutCarouselPost() {

    function Carousel() {
        const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
        return (
        <Slider {...settings}>
            <div className='LogVideo'>
                <video width="240" height="180" controls>
                <source src={DadVideo} type="video/mp4"></source>
                </video>
            </div>
            <div className='LogVideo'>
                <video width="240" height="180" controls>
                <source src="movie.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className='LogVideo'>
                <video width="240" height="180" controls>
                <source src="movie.mp4" type="video/mp4"></source>
                </video>
            </div>
        </Slider>
        );
    }  

    return (
        <div className='TodayWorkoutCarousel'>
            <div className='TodayWorkoutCarouselItem'>
                <div className='TodayWorkoutCarouselItemTop'>
                    <h3>My Log</h3>
                </div>
                <div className='TodayWorkoutCarouselItemBottom'>
                    <div className='Carousel'>
                        <Carousel />
                    </div>
                </div>
                <div className='TodayWorkoutCarouselItemReaction'>
                    <form className='comment-form'>
                        <input type='text' placeholder='Add a comment...' className='comment-input'/>
                        <button type='submit' className='comment-submit'>Post</button>
                    </form>
                    <div className='TodayWorkoutCarouselItemReactionIcons'>
                        <BiHeart size={27}/>
                    </div>
                </div>
            </div>
            <div className='TodayWorkoutCarouselItem'>
                <div className='TodayWorkoutCarouselItemTop'>
                    <h3>Mom's Log</h3>
                </div>
                <div className='TodayWorkoutCarouselItemBottom'>
                    <div className='Carousel'>
                        <Carousel />
                    </div>
                </div>
                <div className='TodayWorkoutCarouselItemReaction'>
                    <form className='comment-form'>
                        <input type='text' placeholder='Add a comment...' className='comment-input'/>
                        <button type='submit' className='comment-submit'>Post</button>
                    </form>
                    <div className='TodayWorkoutCarouselItemReactionIcons'>
                        <BiHeart size={27}/>
                    </div>
                </div>
            </div>
            <div className='TodayWorkoutCarouselItem'>
                <div className='TodayWorkoutCarouselItemTop'>
                    <h3>Brother's Log</h3>
                </div>
                <div className='TodayWorkoutCarouselItemBottom'>
                    <div className='Carousel'>
                        <Carousel />
                    </div>
                </div>
                <div className='TodayWorkoutCarouselItemReaction'>
                    <form className='comment-form'>
                        <input type='text' placeholder='Add a comment...' className='comment-input'/>
                        <button type='submit' className='comment-submit'>Post</button>
                    </form>
                    <div className='TodayWorkoutCarouselItemReactionIcons'>
                        <BiHeart size={27}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayWorkoutCarouselPost;