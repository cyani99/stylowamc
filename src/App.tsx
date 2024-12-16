import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfinitySign from './components/InfinitySign';
import { useNavigate } from 'react-router';

function App() {
  const navigator = useNavigate();


  return (
    <div className="bg-white">
      <InfinitySign/>
      <div onClick={()=>{
        navigator('/22:22');
      }} className='left-14 top-32 fixed w-1 h-1 bg-slate-600 hover:cursor-pointer'></div>
    </div>
  );
}

export default App;
