import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfinitySign from './components/InfinitySign';
import { useNavigate } from 'react-router';
import Countdown from 'react-countdown';

function App() {
  const navigator = useNavigate();



  return (
    <div className="bg-white">
        
      <InfinitySign />
   
      <div
        onClick={() => {
          navigator("/22:22");
        }}
        className="left-14 top-32 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"
      ></div>
      <div>
        <div
          className="right-32 bottom-48 fixed w-1 h-1 bg-red-600 hover:cursor-pointer animate-blink"
        ></div>
         <div className="right-24 bottom-48 fixed w-1 h-1 bg-red-600 hover:cursor-pointer animate-blink"></div>

         <div className="right-20 bottom-44 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"></div>
         <div className="right-24 bottom-40 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"></div>
         <div className="right-28 bottom-40 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"></div>
         <div onClick={() => {
            navigator("/liczenietrwa");
          }} className="right-32 bottom-40 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"></div>
         <div className="right-36 bottom-44 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer"></div>
      </div>
    </div>
  );
}

export default App;
