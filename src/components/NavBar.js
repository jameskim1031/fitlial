import React from 'react';


function NavBar() {
    return (
        <div className='NavBar'>
            <a href="#" class="navItem active">Home</a>
            <a href="#" class="navItem">Workouts</a>
            <a href="#" class="navItem">Progress</a>
            <a href="#" class="navItem">Profile</a>
        </div>
    );
}; 

export default NavBar;