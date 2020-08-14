import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap';

const WrapperDiv = styled.div`
font-family: 'Orbitron', sans-serif;
text-align: center;
background-color: black;
`
;

const Header = styled.div`
font-weight: bold;
font-size: 40px;
padding: 1%;
`
;

const SubHeading = styled.div`
padding: 1%;
`
;
const Paragraph = styled.p`
font-size: 20px;
padding: 0 18% 0 18%;
text-align: justify;
`
;

const Btn = styled.div`
padding: 2%;
`
;



const PhotoCard = (props) => {
    return (
    <WrapperDiv>
        <Header className='header'>
            <h1>Photo of the Day</h1>
        </Header>
        <SubHeading className='above-photo'>
            <h4>{props.title}</h4>
            <h5>Date: {props.date}</h5>
        </SubHeading>
        <div className='photo-container'>
        <img
          alt='post thumbnail'
          className='photo'
          src={props.url}
        />
      </div>
      <Btn className='button'>
        <Button outline color="info" onClick={props.toggleExplanation}>{props.buttonText}</Button>
        {/* <button onClick={props.toggleExplanation}>{props.buttonText}</button> */}
      </Btn>
        <Paragraph className='below-photo'>
            <p>{props.explanation}</p>

        </Paragraph>
        <div className='footer'>
            <h5>© {props.copyright}</h5>
        </div>
    </WrapperDiv>
    );
};

export default PhotoCard;