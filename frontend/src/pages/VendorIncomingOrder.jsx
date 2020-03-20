import React from 'react';
import { Component } from 'react';
import VendorIncomingOrderBox from '../components/VendorIncomingOrderBox';
import VendorSideNav from '../components/VendorSideNav';
import { Container, Row, Col } from 'react-bootstrap';
class VendorIncomingOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            dataIsLoaded: false
            
        };
    }

    componentDidMount(){
        // temp: add fake ordr object to array of orders
        this.setState({
            dataIsLoaded: true,
            orders:[
                {        
                    key: 1,
                    id:2,
                    itemName: " AVACADO DOG",
                    itemQty: 4,
                    status:"Received"
                },
                {        
                    key: 2,
                    id:2,
                    itemName: " CHICAGO STYLE",
                    itemQty: 2,
                    status:"Received"
                },
                { 
                    key: 3,       
                    id:2,
                    itemName: " VEGGIE STYLE",
                    itemQty: 1,
                    status:"Received"
                },
                        

            ]
        });
    }

    render() {
        if (!this.state.dataIsLoaded) {return null;}
        return (
            <Container fluid>
                <Row>
                    <Col xs='4' sm='3' md='3' lg='2' xl='2' style={{ paddingLeft: '0' }}>
                        <VendorSideNav />
                    </Col>
                    <Col xs='8' sm='9' md='9' lg='10' xl='10' style={{ paddingTop: '75px'}}>
                        <h6>Welcome! Your Incoming Orders:</h6>
                        <hr></hr>

                        {this.state.orders.map(order =>{
                            // if(order.status == 'Fulfilled'){return null};
                            return <VendorIncomingOrderBox order={order} key={order.key}/>;
                        })}
                    </Col>
                </Row>
             </Container>
        )
    }
}
export default VendorIncomingOrder;