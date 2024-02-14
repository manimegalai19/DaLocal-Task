import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <Container fluid>
        <Row className="align-items-center">
            <Col className='center mt-5 mb-5'>
              <h1>Welcome to DaLocal</h1>
              <p>Your one-stop solution for all your local needs.</p>
            </Col>
        </Row>
      <Row>
       <Col lg={8} className="mx-auto">
          <Carousel className='rounded custom-carousel' style={{ borderRadius: '15px' }}>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/corsol1.jpg")}
                alt="First slide" />
              <Carousel.Caption>
                <h3 className="display-4 d-none d-sm-block"> Web Development Solutions</h3>
                <h3 className="d-none">Web Solutions</h3>
                <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/corsol2.jpg")}
                alt="Second slide" />

              <Carousel.Caption>
                <h3 className="display-4 d-none d-sm-block">AI/ML Solutions</h3>
                <h3 className="d-none">AI/ML Solutions</h3>
                <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../images/corsol3.jpg")}
                alt="Third slide" />

              <Carousel.Caption>
                <h3 className="display-4 d-none d-sm-block">Networking Solutions</h3>
                <h3 className="d-none">Networking Solutions</h3>
                <p className='d-none d-sm-block'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
