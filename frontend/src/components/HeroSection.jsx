import React from "react";
import { Jumbotron, InputGroup, FormControl } from "react-bootstrap";

function HeroSection() {
  return (
    <Jumbotron fluid className="text-center">
     
      <h1>Bob's Dogs!</h1>
      <p>
        A rustic hot dog vendor specializing in vegan and not-so vegan dogs
        <br /> and traditional farming practices.
      </p>
      <InputGroup className="mb-3">
        <FormControl
          size="lg"
          placeholder="Enter Your Address or Zip Code..."
        />
        <InputGroup.Append>
          <a className="btn btn-warning" href="/cart-locations">
            Search
          </a>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
}

export default HeroSection;
