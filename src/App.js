import React from 'react'
import "./App.css";
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
