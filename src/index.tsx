import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import Teaser1 from './teaser1/Teaser1Page';
import Teaser1part2 from './teaser1/Teaser1Page2';
import Teaser2 from './teaser2/Teaser2Page';
import Teaser2part2 from './teaser2/Teaser2Page2';
import Teaser3 from './teaser3/Teaser3Page';
import Teaser4 from './teaser4/Teaser4Page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL1} element={<Teaser1 />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL2} element={<Teaser1part2 />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL3} element={<Teaser2 />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL4} element={<Teaser2part2 />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL5} element={<Teaser3 />} />
      <Route path={process.env.REACT_APP_SPRYTNIE_UKRYTY_URL6} element={<Teaser4 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
