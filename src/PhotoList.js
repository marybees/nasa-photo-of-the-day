import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhotoCard from './PhotoCard'

function PhotoList() {

    const [photos, setPhotos] = useState([]);

    const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=bpJ7TgEPWUCwtiDA3KTp3s6CMzQXVUFF66TfzCIo&date=2020-08-12'

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

    const photosComponents = 
    photos.map((photo) => {
        return (
            <PhotoCard
            title = {photo.title} 
            date = {photo.date} 
            url = {photo.url}
            explanation = {photo.explanation} 
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