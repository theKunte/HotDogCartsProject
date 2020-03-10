import React from 'react';
import { Component } from 'react';
import VendorRenderBox from './VendorRenderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';
class VendorPage extends Component {
    constructor(){
        super();
        this.state ={
            vendors:[]
        };
    }

    componentDidMount(){
        fetch("http://localhost:3000/vendor/vendors/")
        .then(res =>res.json())
        .then(vendors => this.setState({vendors}));
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                        <VendorSideNav />
                    </Col>
                    <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                        <h6>Test VENDOR HOMEPAGE:</h6>
                        <ul>
                        <hr></hr>
                        {this.state.vendors.map(vendor =>(
                            <>
                            <VendorRenderBox
                                Address ={vendor.Address}
                                VendorName ={vendor.VendorName}
                            />
                            </>
                        ))}
                        </ul>
                    </Col>
                </Row>
             </Container>
        )
    }
}
export default VendorPage;