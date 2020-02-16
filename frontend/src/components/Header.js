import React from 'react';
import { Jumbotron, Button, InputGroup, FormControl } from 'react-bootstrap';

function Header() {
    return (
        <Jumbotron className="text-center">
            <h1>HOT DOG CART HEADING GOES HERE</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.</p>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter Your Address or Zip Code.."
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
      </Jumbotron>
    )
}

export default Header;
