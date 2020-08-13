import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhotoCard from './PhotoCard'

function PhotoList() {

    const [photos, setPhotos] = useState([]);
    
    // const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=1hrs3VcXiRvjz5c9kEvjeaR1K5hViVsIwbIwsGRx&date=2020-08-12'

    useEffect(() => {
      axios.get(nasaUrl)
        .then(response => {
          setPhotos([response.data])
          console.log(response.data)
        })
        .catch(error => {
          console.log('The data was not returned', error);
        })

    }, [])

    const [ explanationOn, setExplanationOn ] = useState(true);
    
    const buttonText = explanationOn ? 'Show Explanation' : 'Hide Explanation'

    const toggleExplanation = () => {
        return setExplanationOn(!explanationOn)
    };

    const photosComponents = 
    photos.map((photo) => {
        const explanation = explanationOn ? photo.explanation : ''
        return (
            <PhotoCard
            title = {photo.title} 
            date = {photo.date} 
            url = {photo.url}
            explanation = {explanation} 
            buttonText = {buttonText}
            toggleExplanation = {toggleExplanation}
            copyright = {photo.copyright}/>
        )
    })
    return (
    <div className='photos'>
        {photosComponents}
    </div>
    );

  }
  
  export default PhotoList;