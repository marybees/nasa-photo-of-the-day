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
          console.log(response.data)
        })
        .catch(error => {
          console.log('The data was not returned', error);
        })

    }, [])
    return (
    <div className='photo'>
        photos.map(photo => {
            return (
                <PhotoCard
                title = {photo.title} 
                date = {photo.date} 
                url = {photo.url}
                explanation = {photo.explanation} 
                copyright = {photo.copyright}/>
            )
        })
    </div>
    );
  }
  
  export default PhotoList;