import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios'
import { API_KEY } from './constants'
import PhotoCard from './PhotoCard'
import PhotoList from './PhotoList';


function App() {
  return (
  <div className='App'>
    <div className='App-header'>
      {/* <img className='logo' src={appLogo}></img> */}
      <PhotoList/>
    </div>
  </div>
  );
}

export default App;
