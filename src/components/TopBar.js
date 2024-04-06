import React from 'react';
import DadPicture from '../images/dad.jpeg'

function TopBar() {
    return (
      <div className='TopBar'>
        <div className='TopBarInner'>
            <div className='TopBarUser'>
                <img className='TopBarUserImage' src={DadPicture}/>
            </div>
            <div className='TopBarUser'></div>
            <div className='TopBarUser'></div>
            <div className='TopBarUser'></div>
        </div>
      </div>
    );
  }
  
  export default TopBar;
  