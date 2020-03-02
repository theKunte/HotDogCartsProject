import React from 'react';
import { Component } from 'react';
import VendorRenderBox from './VendorRenderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';
class VendorPage extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                        <VendorSideNav />
                    </Col>
                    <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                        <h6>Test VENDOR HOMEPAGE:</h6>
                        <hr></hr>
                        <VendorRenderBox />
                      
                    </Col>
                </Row>
             </Container>
        )
    }
}
export default VendorPage;