import React, { useState } from 'react'
import PhotoList from './PhotoList'

const PhotoCard = (props) => {

    const [ explanationOn, setExplanationOn ] = useState(true);
    
    const buttonText = explanationOn ? 'Show Explanation' : 'Hide Explanation'

    const explanation = explanationOn ? props.explanation : ''

    const toggleExplanation = () => {
        return setExplanationOn(!explanationOn)
    };

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
            <button onClick={toggleExplanation}>{buttonText}</button>
            <p>{explanation}</p>
        </div>
        <div className='footer'>
            <h6>© {props.copyright}</h6>
        </div>

        <PhotoList/>

    </div>
    );
};

export default PhotoCard;