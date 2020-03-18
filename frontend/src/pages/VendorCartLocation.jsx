import React from 'react';
import { Component } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

//import VendorRenderBox from './VendorRenderBox';
import VendorSideNav from '../components/VendorSideNav';
class VendorCartLocation extends Component {
    constructor(){
        super();
        this.state = {
            vendorusers:[]
        };
    }
    componentDidMount(){
        fetch("http://localhost:3000/admin/vendorusers/")
        .then(res => res.json())
        .then(vendorusers => this.setState({vendorusers}))
    }

    render() {
        return (
            <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2" xl="2" style={{ paddingLeft: "0" }}>
            <VendorSideNav />
          </Col>
          <Col
            xs="8"
            sm="9"
            md="9"
            lg="10"
            xl="10"
            style={{ paddingTop: "75px" }}
          >
            <h6>Change Cart Location</h6>
            <hr></hr>
            <Form>
              <Form.Group controlId="formAddress">
                <Form.Label>New Address</Form.Label>
                <Form.Control type="text" placeholder="Enter New Address" />
              </Form.Group>

              <Button variant="warning" type="submit">
                Change Location
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
        )
    }
}
export default VendorCartLocation;