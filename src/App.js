import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios'
import { API_KEY } from './constants'
import Details from './Details'


function App() {
  const [photo, setPhoto] = useState([])
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
    </div>
  );
}

export default App;
