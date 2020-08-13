import React from 'react'

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
            <button>Show Explanation</button>
            <p>Explanation: {props.explanation}</p>
        </div>
        <div className='footer'>
            <p>Copyright: {props.copyright}</p>
        </div>
    </div>
    );
};

export default PhotoCard;