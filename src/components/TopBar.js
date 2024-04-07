import React from 'react';
import DadPicture from '../images/dad.jpeg';
import MomPicture from '../images/mom.jpeg';
import SonPicture from '../images/son.jpeg';
import BrotherPicture from '../images/brother.jpeg';


function TopBar() {
    return (
      <div className='TopBar'>
        <div className='TopBarInner'>
            <div className='TopBarUserIncompleted'>
                <img className='TopBarUserImage' src={DadPicture}/>
            </div>
            <div className='TopBarUserCompleted'>
                <img className='TopBarUserImage' src={MomPicture}/>
            </div>
            <div className='TopBarUserCompleted'>
                <img className='TopBarUserImage' src={SonPicture}/>
            </div>
            <div className='TopBarUserIncompleted'>
                <img className='TopBarUserImage' src={BrotherPicture}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default TopBar;
  