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
import Labb1 from './components/Labb1';
import Labb2 from './components/Labb2';
import Labb3 from './components/Labb3';
import Labb4 from './components/Labb4';
import Labb5 from './components/Labb5';
import Labb6 from './components/Labb6';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MyProjects />} />
          <Route path="/labb1" element={<Labb1 />} />
          <Route path="/labb2" element={<Labb2 />} />
          <Route path="/labb3" element={<Labb3 />} />
          <Route path="/labb4" element={<Labb4 />} />
          <Route path="/labb5" element={<Labb5 />} />
          <Route path="/labb6" element={<Labb6 />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
