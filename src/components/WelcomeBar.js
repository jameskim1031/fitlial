import React from 'react';
import Son from '../images/son.jpeg';

function WelcomeBar() {
    return (
        <div className='WelcomeBar'>
            <div className='WelcomeBarTexts'>
                <h2>Hi, James</h2>
                <h3>Let's check the family's progress!</h3>
            </div>
            <div className="WelcomeBarProfile">
                <img className="WelcomeBarProfileImage" src={Son}/>
            </div>
            
        </div>
    );
}; 

export default WelcomeBar;