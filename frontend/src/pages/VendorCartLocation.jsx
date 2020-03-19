import React from 'react';
import { Component } from 'react';
import VendorSideNav from '../components/VendorSideNav';
import VendorCartLocationForm from '../components/VendorCartLocationForm'
import { Container, Row, Col } from 'react-bootstrap';
import { ProductConsumer } from '../data/context';

class VendorCartLocation extends Component {

    submitData(data) {

      fetch('http://localhost:3000/vendorLocation', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(body => console.log(body));
    }

    render() {
        return (
          <ProductConsumer>{(context) => {
            return(
              <Container fluid>
              <Row>
                  <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                      <VendorSideNav />
                  </Col>
                  <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                      <h6>Welcome! Your Cart Location:</h6>
                      <hr></hr>
                      <VendorCartLocationForm 
                        id={this.props.match.params.id}
                       // defaultLocation={'555 test street'}
                        submitData={this.submitData} //pass submit function to component through props
                      />
                  </Col>
              </Row>
          </Container>
            )
          }}</ProductConsumer>
        )
    }
}
export default VendorCartLocation;