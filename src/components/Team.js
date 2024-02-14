import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  return (
    <section id="team" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://hivlawcommission.org/wp-content/uploads/2016/04/Business-man-1.png" />
              <Card.Body>
                <Card.Title>Mr.ChandraSekhar</Card.Title>
                <Card.Text>
                  Web Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://hivlawcommission.org/wp-content/uploads/2016/04/Business-man-1.png" />
              <Card.Body>
                <Card.Title>Mr.Ravi</Card.Title>
                <Card.Text>
                  Talent Acquistation
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src="https://photovideolounge.com/wp-content/uploads/2019/11/formal-blonde-passport-photo.jpg" />
              <Card.Body>
                <Card.Title>Ms.Rekha</Card.Title>
                <Card.Text>
                  IT Analyst
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;
