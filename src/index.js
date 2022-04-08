import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Hello,
  Requests,
  Posts,
  Story,
  SummerLunch,
  BabyShower,
  SarahConor
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
      <Route path="/story" element={<Story />} />
      <Route path="/requests" element={<Requests />} />
      <Route path="/portfolio" element={<Posts />}/>
      <Route path="/portfolio/summer-long-lunch" element={<SummerLunch />} />
      <Route path="/portfolio/baby-shower" element={<BabyShower/>} />
      <Route path="/portfolio/sarah-conor" element={<SarahConor/>} />      
    </Routes>
    <Footer />
  </Router>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
