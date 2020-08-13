import React from 'react'
import PhotoList from './PhotoList'

const PhotoCard = (props) => {
    return (

    <div>
        <div className='header'>
            <h1>Photo of the Day</h1>
        </div>
        <div className='above-photo'>
            <h4>{props.title}</h4>
            <h5>Date: {props.date}</h5>
        </div>
        <div className='photo-container'>
        <img
          alt='post thumbnail'
          className='photo'
          src={props.url}
        />
      </div>
        <div className="below-photo">
            <button onClick={props.toggleExplanation}>{props.buttonText}</button>
            <p>{props.explanation}</p>
        </div>
        <div className='footer'>
            <h6>© {props.copyright}</h6>
        </div>

        <PhotoList/>

    </div>
    );
};

export default PhotoCard;