import React from 'react';
import { Jumbotron, InputGroup, FormControl } from 'react-bootstrap';

function HeroSection() {
    return (
        <Jumbotron fluid className="text-center">
            <h1>HOT DOG CART HEADING</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra 
            <br/> attention to featured content or information.</p>
            <InputGroup className="mb-3">
                <FormControl size="lg" placeholder="Enter Your Address or Zip Code..." />
                <InputGroup.Append>
                    <a className="btn btn-warning" href="/cart-locations">Search</a>
                </InputGroup.Append>
            </InputGroup>
      </Jumbotron>
    )
}

export default HeroSection;
