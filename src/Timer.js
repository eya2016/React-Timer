import React from 'react';
import { useState, useEffect } from 'react';

const Layout = () => {
	
  const [seconds,setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
        interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
		}, 1000);
	  } else if (!isActive && seconds !== 0) {
		  clearInterval(interval);
		}
		return () => clearInterval(interval);
    }, [isActive, seconds]);
    
    // const affich = () => {

    // //  let totalSec = Math.floor(this.state.timer/ 3600) /1000;
    // let hh = String(parseInt(this.state.seconds/3600)).padStart(2,'0');
    // let min = String(parseInt(this.state.seconds/60)% 60).padStart(2,'0');
    // let ss = String(parseInt(this.state.seconds)% 60).padStart(2,'0');
    //    return hh + " : " + min + " : " + ss ;
    // };

  return (
    <div className="time-container">
      <div className="time text-center">
        {/* {Math.floor(seconds / 3600) + " : " + (Math.floor(seconds / 60) % 60) + " : " + (seconds % 60)} */}
        { (Math.floor(seconds / 3600) < 10 ? "0" + Math.floor(seconds / 3600) : Math.floor(seconds / 3600)) +
          " : " +
        ((Math.floor(seconds / 60) % 60) < 10 ? "0" + (Math.floor(seconds / 60) % 60) : (Math.floor(seconds / 60) % 60)) +
          " : " +
        ((seconds % 60) < 10 ? "0" + (seconds % 60) : (seconds % 60)) }
      </div>
      <div className='text'>Hours   &nbsp; :    &nbsp; Minutes  &nbsp; : &nbsp; Seconds  </div><br/><br/>
      <div className="row btn-side">
        <span className={`text-center button-start button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </span>
        <span className=" text-center button-reset" onClick={reset}>
          Reset
        </span>
      </div>
      </div>
  );
};

export default Layout;
