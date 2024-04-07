import React, { useState } from 'react';
import DadPicture from '../images/dad.jpeg';
import MomPicture from '../images/mom.jpeg';
import SonPicture from '../images/son.jpeg';
import BrotherPicture from '../images/brother.jpeg';


function TopBar() {

    const ToastDad = ({ message }) => (
        <div className={`toastNotification ${showToastDad ? 'show' : ''}`}>{message}</div>
    );

    const ToastBro = ({ message }) => (
        <div className={`toastNotification ${showToastBro ? 'show' : ''}`}>{message}</div>
    );

    const [showToastDad, setShowToastDad] = useState(false);
    const [showToastBro, setShowToastBro] = useState(false);

    const handleOnClickDad = () => {
        setShowToastDad(true);
        setTimeout(() => setShowToastDad(false), 1000); // Hide the toast after 3 seconds
    };

    const handleOnClickBro = () => {
        setShowToastBro(true);
        setTimeout(() => setShowToastBro(false), 1000); // Hide the toast after 3 seconds
    };

    return (
      <div className='TopBar'>
        <div className='TopBarInner'>
            <div onClick={handleOnClickDad} className='TopBarUserIncompleted'>
                <img className='TopBarUserImage' src={DadPicture}/>
            </div>
            <div className='TopBarUserCompleted'>
                <img className='TopBarUserImage' src={MomPicture}/>
            </div>
            <div className='TopBarUserCompleted'>
                <img className='TopBarUserImage' src={SonPicture}/>
            </div>
            <div onClick={handleOnClickBro} className='TopBarUserIncompleted'>
                <img className='TopBarUserImage' src={BrotherPicture}/>
            </div>
        </div>
        {setShowToastDad && <ToastDad message="Dad Nudged" />}
        {setShowToastBro && <ToastBro message="Brother Nudged" />}
      </div>
    );
  }
  
  export default TopBar;
  