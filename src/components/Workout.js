import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Workout() {
  return (
    <div>
      <h1>Today's Workout 💪</h1>
      <div className='WorkoutBox'>
        <div className='WorkoutExercise'>
            <p>Push-ups</p>
            <div>
              <button type="button">Demo</button>
              <button type="button">Upload</button>
            </div>
        </div>
        <div className='WorkoutExercise'>
            <p>Wall sits</p>
            <div>
              <button type="button">Demo</button>
              <button type="button">Upload</button>
            </div>
        </div>
        <div className='WorkoutExercise'>
            <p>平板撑</p>
            <div>
              <button type="button">Demo</button>
              <button type="button">Upload</button>
            </div>
        </div>
        <div class="Timer"><Timer /></div>
      </div>

      <div className='WorkoutLogs'>
        <div>
            <p>Mom's Log</p>
            <div className='Carousel'><Carousel /></div>
        </div>
        <div>
            <p>Son's Log</p>
            <div className='Carousel'><Carousel /></div>
        </div>
      </div>
    </div>
  );
}



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
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4"></source>
          </video>
      </div>
      <div className='LogVideo'>
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4"></source>
          </video>
      </div>
      <div className='LogVideo'>
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4"></source>
          </video>
      </div>
    </Slider>
  );
}


function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Set end of day time (23:59:59.999)

    const difference = endOfDay - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  }

  return (
    <div>
      <p>{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds} remaining</p>
    </div>
  );
}


export default Workout;