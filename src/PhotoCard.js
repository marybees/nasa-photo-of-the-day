import React from 'react'

const PhotoCard = (props) => {
    console.log(props);
    return (
    <div>
        <div className='header'>
            <h1>NASA Photo of the Day</h1>
            <button>Get Today's Photo</button>
        </div>
        <div className='above-photo'>
            <h2>Title: {props.title}</h2>
            <h3>Date: {props.date}</h3>
        </div>
        <div className = 'photo'>{props.url}</div>
        <div className="below-photo">
            <p>Explanation: {props.explanation}</p>
        </div>
        <div className='footer'>
            <p>Copyright: {props.copyright}</p>
        </div>
    </div>
    );
};

export default PhotoCard;