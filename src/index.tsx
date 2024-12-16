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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/22:22" element={<Teaser1 />} />
      <Route path="/wspomnienie1" element={<Teaser1part2 />} />
      <Route path="/liczenietrwa" element={<Teaser2 />} />
      <Route path="/ontambyl" element={<Teaser2part2 />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
