import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <section id='services'> {/* Remove '#' from id */}
      <Container>
        <h1 className='mt-5'>Our Services</h1>
      </Container>
      <Container fluid className='ml-auto mr-auto'>
        <Row className='mt-5'>
          <Col md={4} className='mb-4'> {/* Adjust column size for different screen sizes */}
            <Card>
              <Card.Img variant="top" src="https://weblium.com/blog/wp-content/uploads/2020/04/Screenshot-at-Jun-23-13-18-32-1600x743.png" />
              <Card.Body>
                <Card.Title>Web Solution 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://weblium.com/blog/wp-content/uploads/2020/04/Screenshot-at-Jun-23-13-18-32-1600x743.png" />
              <Card.Body>
                <Card.Title>Web Solution 2</Card.Title> {/* Change title accordingly */}
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://weblium.com/blog/wp-content/uploads/2020/04/Screenshot-at-Jun-23-13-18-32-1600x743.png" />
              <Card.Body>
                <Card.Title>Web Solution 3</Card.Title> {/* Change title accordingly */}
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
       <Row className='mt-5'>
          <Col md={4} className='mb-4'> {/* Adjust column size for different screen sizes */}
            <Card>
              <Card.Img variant="top" src="https://www.sei.com/wp-content/uploads/2018/04/delivering-machine-learning-solutions.jpg" />
              <Card.Body>
                <Card.Title>Machine Learning Model 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://www.sei.com/wp-content/uploads/2018/04/delivering-machine-learning-solutions.jpg" />
              <Card.Body>
                <Card.Title>Machine Learning Model 2</Card.Title> {/* Change title accordingly */}
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-4'>
            <Card>
              <Card.Img variant="top" src="https://www.sei.com/wp-content/uploads/2018/04/delivering-machine-learning-solutions.jpg" />
              <Card.Body>
                <Card.Title>Machine Learning Model 3</Card.Title> {/* Change title accordingly */}
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Services;
