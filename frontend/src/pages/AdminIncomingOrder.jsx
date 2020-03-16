import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideNav from "../components/AdminSideNav";
import OrderRenderBox from "./OrderRenderBox";

class AdminIncomingOrder extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/admin/orders/")
      .then(res => res.json())
      .then(orders =>
        this.setState({ orders }, () => console.log("Orders Fetched ", orders))
      );
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2" xl="2" style={{ paddingLeft: "0" }}>
            <AdminSideNav />
          </Col>
          <Col
            xs="8"
            sm="9"
            md="9"
            lg="10"
            xl="10"
            style={{ paddingTop: "75px" }}
          >
            <h6>Incoming Orders</h6>
            <hr></hr>
            {this.state.orders.map(order => (
              <>
                <OrderRenderBox
                  OrderStatus={order.OrderStatus}
                  TimeReceived={order.TimeReceived}
                  LocationName={order.LocationName}
                  Item={order.Item}
                  Quantity={order.Quantity}
                />
              </>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AdminIncomingOrder;
