import React from 'react'
<<<<<<< HEAD
import PhotoList from './PhotoList'
=======
>>>>>>> parent of 75df4eb... Add click event to hide and show explanation

const PhotoCard = (props) => {
    return (
    <div>
        <div className='header'>
            <h1>NASA Photo of the Day</h1>
        </div>
        <div className='above-photo'>
            <h4>Title: {props.title}</h4>
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
<<<<<<< HEAD
            <button onClick={props.toggleExplanation}>{props.buttonText}</button>
            <p>{props.explanation}</p>
=======
            <button>Show Explanation</button>
            <p>Explanation: {props.explanation}</p>
>>>>>>> parent of 75df4eb... Add click event to hide and show explanation
        </div>
        <div className='footer'>
            <p>Copyright: {props.copyright}</p>
        </div>
    </div>
    );
};

export default PhotoCard;