import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.css'

const Card = props => {
    return <div style={{ marginTop: '10%' }} >
        <Container>
            <h2 className='cardh2' >{props.color}</h2>
            <div className='cardContainer' style={{ backgroundColor: props.color }}></div>
        </Container>
    </div>;
};

export default Card