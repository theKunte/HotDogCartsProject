import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const styleHeading = {
    position: 'relative',
    top: '20px',
    lineHeight: '100px',
    fontSize: '8rem',
    color: '#f4aa1b',
    letterSpacing: '2px'
}

const styleSubheading = {
  position: 'relative',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '1.2rem',
}

const styleMainBtn = {
  position: 'relative',
  top: '15px'
}

function HeroSection() {
  return (
    <Jumbotron fluid className="text-left">
      <div className="menu-bg"></div>
      <Container>
        <Row style={{paddingLeft: '2rem'}}>
          <Col sm='12' md='12'>
          <p style={styleSubheading}>
            A rustic hot dog vendor specializing in vegan dogs<br></br> and traditional farming practices.
          </p>
          <h1 style={styleHeading}>Bob's <br></br>Dogs</h1>
          <a className="btn btn-outline-warning btn-lg" href="/cart-locations"
            style={styleMainBtn}
          >
            Find Hot Dog Carts
          </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default HeroSection;
