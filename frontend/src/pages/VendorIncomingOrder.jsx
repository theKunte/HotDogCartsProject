import React from 'react';
import { Component } from 'react';
import VendorIncomingOrderBox from '../components/VendorIncomingOrderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';
class VendorIncomingOrder extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                        <VendorSideNav />
                    </Col>
                    <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                        <h6>Welcome! Your Incoming Orders:</h6>
                        <hr></hr>
                        <VendorIncomingOrderBox 
                            order = {
                                {   // To Do: use data from data Base
                                    id:2, 
                                    itemName:'VeggieDog',
                                    itemQty: 4
                                }
                            }
                        />

  
                    </Col>
                </Row>
             </Container>
        )
    }
}
export default VendorIncomingOrder;