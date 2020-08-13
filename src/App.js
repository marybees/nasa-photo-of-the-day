import React, { useState, useEffect } from 'react'
import "./App.css";
import axios from 'axios'
// import { API_KEY } from './constants'
import PhotoCard from './PhotoCard'


function App() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=bpJ7TgEPWUCwtiDA3KTp3s6CMzQXVUFF66TfzCIo')
      .then(response => {
        setPhoto(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log('The data was not returned', error);
      })
      // .finally(() => {
      // })
  }, [])
  return (
    // <div className="header">
    //   <h1>NASA Photo of the Day</h1>
    //   <button>Get Today's Photo</button>
    // </div>
    // <div className="above-photo">
    //   <h2>Title:</h2>
    //   <h3>Date:</h3>
    // </div>
    // <div className="below-photo">
    //   <p>Explanation:</p>
    // </div>
    // <div className="footer">
    //   <p>Copyright:</p>
    // </div>
  );
}

export default App;
