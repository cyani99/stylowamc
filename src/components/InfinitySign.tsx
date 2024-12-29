import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Countdown from "react-countdown";
import sminfinity from './sminfinity.gif'


interface IRenderer{
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
  days: number;
}

function InfinitySign (){
  // Define the animation
  const [timer, setTimer]= useState(false);
  const [infinityIsClicked, setInfinityIsClicked] = useState(false);
  const Completionist = () => {
    if (infinityIsClicked) return (
      <a href="https://imgur.com/M5tvmaL">
      <img src={sminfinity} alt="sminfinity"></img></a>
    )
    else{
      return (
      <div className="text-orange-400 bg-slate-800 p-4 rounded-xl cursor-pointer font-bold hover:bg-slate-700" onClick={()=>{setInfinityIsClicked(true);
        start();
      }}>TO JUŻ TEN MOMENT! KLIKNIJ I PRZENIEŚ SIĘ W TAJEMNICZE KRAINY SM!</div>)
    }
  }
 // Animation for the stroke dash offset
  let audio = new Audio('/sminfinityintro.mp3')

  const start = () => {
    audio.play()
  }
  
  const renderer = ({ hours, minutes, seconds, completed,days }: IRenderer) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span onDoubleClick={()=>{setTimer(!timer)}} className='text-yellow-500 text-4xl'>{days}:{hours}:{minutes}:{seconds}</span>;
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      {timer ? ( <Countdown
    date={'2024-12-29T17:22:22'}
    renderer={renderer}
  />) : (<svg onDoubleClick={()=>{setTimer(!timer);
  }}
    className="w-48 h-24"
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Define the infinity path */}
    <path
      d="M50,50a25,25 0 1,1 50,0a25,25 0 1,1 -50,0 M100,50a25,25 0 1,1 50,0a25,25 0 1,1 -50,0"
      stroke="gold"
      strokeWidth="4"
      fill="none"
      strokeDasharray="314 314" // Total length of the path
      className="animate-infinity"
    />
  </svg>) }
      
    
  </div>
  );
};

export default InfinitySign;