import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element, scroller } from 'react-scroll';
import CV from './assets/AlexAndstenCV.pdf';
import './App.css';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import fadeIn from 'react-animations/lib/fade-in';
import styled, { keyframes } from 'styled-components';  
import al3 from './img/transpbackground2.png';
import whiteBg from './img/whiteBg.jpg';
import { Stack, Typography, GlobalStyles, IconButton, Drawer, Grid } from '@mui/material';
import { styled as muiStyled } from '@mui/system'; 
import { useMediaQuery } from '@mui/material';
import slideInRight from 'react-animations/lib/slide-in-right';
import slideInLeft from 'react-animations/lib/slide-in-left';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/predictor" element={<MyProjects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
