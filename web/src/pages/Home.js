import React, { useState } from 'react';
import {Container,Col, Row} from 'react-bootstrap'
import Card from '../components/Card';

const Home = () => {
  const [colorOne,setColorOne] = useState('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')
  const [colorTwo,setColorTwo] = useState('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')
  const [colorThree,setcolorThree] = useState('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')

  const chengeColor = () =>{
    setColorOne('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')
    setColorTwo('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')
    setcolorThree('rgb('+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+','+Math.floor(Math.random()* 255)+')')
  }

  return <div>
    <Container>
      <Col style={{textAlign:'center'}}>
        <button className='homeRandomButton' onClick={()=> chengeColor()} >Random Color</button>
      </Col>
    </Container>
    <Row>
      <Col>
      <Card color={colorOne}  />
      </Col>
      <Col>
      <Card color={colorTwo}  />
      </Col>
      <Col>
      <Card color={colorThree} />
      </Col>
    </Row>
  </div>;
};

export default Home;
