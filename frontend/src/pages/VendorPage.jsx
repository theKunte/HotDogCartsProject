import React from 'react';
import { Component } from 'react';
import VendorRenderBox from './VendorRenderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';
class VendorPage extends Component {
    constructor(){
        super();
        this.state ={
            userId: 0,
            userFirstName: null,
            userLastName: null,
            userEmail: null,
            userType: null,
            dataIsLoaded: false
        };
    }

    componentDidMount(){
        //retrieve data from database
         fetch(`http://localhost:3000/getUser?userid=${this.props.match.params.id}`)
         .then(res => res.json())
         .then(data => 
            this.setState({
                userId: data.userid,
                userFirstName: data.firstname,
                userLastName: data.lastname,
                userEmail: data.email,
                userType: data.usertype,
                dataIsLoaded: true
            })
        );
        console.log(`VendorPage loaded for userId: ${this.props.match.params.id}`);
    }

    render() {
        if (!this.state.dataIsLoaded) {return null;}
        return (
            <Container fluid>
                <Row>
                    <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                        <VendorSideNav 
                            id={this.state.userId}
                            highlight='none'
                        />
                    </Col>
                    <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                        <h2>Welcome {this.state.userFirstName}! Here's your info:</h2>
                        <p>Name: {this.state.userFirstName} {this.state.userLastName}</p>
                        <p>Email: {this.state.userEmail}</p>
                        <p>UserType: {this.state.userType}</p>
 
                    </Col>
                </Row>
             </Container>
        )
    }
}
export default VendorPage;