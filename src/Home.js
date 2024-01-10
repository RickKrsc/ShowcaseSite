import React, { useState, useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from './Assets/example.jpg'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {

  /* rosso CE1818F0 */
  const textHeader = { whiteSpace: 'nowrap', fontFamily: 'Impact, sans-serif', fontSize: '2.5rem', marginTop: '1.5rem', color: '#FFFFFFF0' };
  const textColStyle = { overflow: 'visible', color: '#FFFFFFF0', fontSize: '1rem', fontWeight: '600' };
  const imageStyle = { marginTop: '5rem', };


  const [size, setSize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth <= 768 ? 12 : 5;
      setSize(newSize);
    };

    window.addEventListener('resize', handleResize);

    // Chiamato quando il componente si smonta per rimuovere l'event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div id='home'>
      <Container>
        <Row>
          <Col xs={size} className='text-start'>
            <h1 style={textHeader}>Lorem Ipsum</h1>
            <p style={textColStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa venenatis, finibus odio vitae,
              consequat dui. Nulla id vulputate nisl.
              Suspendisse massa ipsum, venenatis non quam eu, dapibus hendrerit felis. Nullam non dictum lacus.
              Sed est mi, aliquam id congue id, viverra sed metus. Sed non blandit urna. Integer sodales metus
              a ante tincidunt sodales. Mauris diam neque,
              porta sit amet magna vitae, faucibus cursus libero. Sed a dolor vulputate nisi iaculis dignissim.
              Suspendisse molestie, nisl ac ornare consectetur, massa nisl faucibus odio, vitae finibus risus orci
              at arcu. Phasellus et pharetra sapien,
              id eleifend dolor. Nulla facilisis massa tortor, pulvinar sodales neque condimentum sit amet.</p>
          </Col>
          <Col xs={size}>
            <img src={mainImage} className='img-fluid' style={imageStyle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
  /* return (
      <div id='home'>
        <Container>
          <Row>
            <Col xs={12} md={5}>
              <img src={mainImage} className='img-fluid' alt='Main' />
            </Col>
            <Col xs={12} md={7} className='text-start'>
              <h1 style={textHeader}>Lorem Ipsum</h1>
              <p style={textColStyle}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac massa venenatis, finibus odio vitae, 
                          consequat dui. Nulla id vulputate nisl. 
                          Suspendisse massa ipsum, venenatis non quam eu, dapibus hendrerit felis. Nullam non dictum lacus. 
                          Sed est mi, aliquam id congue id, viverra sed metus. Sed non blandit urna. Integer sodales metus 
                          a ante tincidunt sodales. Mauris diam neque, 
                          porta sit amet magna vitae, faucibus cursus libero. Sed a dolor vulputate nisi iaculis dignissim.
                           Suspendisse molestie, nisl ac ornare consectetur, massa nisl faucibus odio, vitae finibus risus orci 
                           at arcu. Phasellus et pharetra sapien, 
                           id eleifend dolor. Nulla facilisis massa tortor, pulvinar sodales neque condimentum sit amet.</p>
            </Col>
          </Row>
        </Container>
      </div> 
    ); */
}

export default Home;