import React, { useState } from 'react';
import {Container,Col, Row} from 'react-bootstrap'
import Card from '../components/Card';

const Home = () => {
  
  return <div>
    <Container>
      <Col style={{textAlign:'center'}}>
        <button className='homeRandomButton' >Random Color</button>
      </Col>
    </Container>
    <Row>
      <Col>
      <Card/>
      </Col>
      <Col>
      <Card/>
      </Col>
      <Col>
      <Card/>
      </Col>
    </Row>
  </div>;
};

export default Home;
