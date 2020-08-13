import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from './constants'
import PhotoCard from './PhotoCard'

function PhotoList() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      axios.get({API_KEY})
        .then(response => {
          setPhotos(response.data)
          console.log(response)
        })
        .catch(error => {
          console.log('The data was not returned', error);
        })
        // .finally(() => {
        // })
    }, [])
    return (
    <div className="photo">
        photos.map(photo => {
            return (
            <PhotoCard
            title = {PhotoCard.title} date = {PhotoCard.date} explanation = {PhotoCard.explanation} copyright = {PhotoCard.copyright}/>
            )
        })
    </div>
    );
  }
  
  export default PhotoList;