import React from "react";
import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import AdminSideNav from "../components/AdminSideNav";

class AdminAddCart extends Component {
  constructor() {
    super();
    this.state = {
      vendorusers: [],
      data: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/admin/vendorusers/")
      .then(res => res.json())
      .then(vendorusers => this.setState({ vendorusers }));
  }
  handleSubmit() {
    alert("A vendor was submitted: ");
  }
  handleChange(event) {
    this.alert("hi " + event.target.value);
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
            <h6>Add Cart</h6>
            <hr></hr>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formVendorName">
                <Form.Label>Vendor Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter vendor name"
                  onChange={this.handleChange.bind(this)}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Vendor Address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formVendor">
                <Form.Label>Vendor</Form.Label>
                <Form.Control as="select">
                  {this.state.vendorusers.map(vendoruser => (
                    <>
                      <option>{vendoruser.firstname}</option>
                    </>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button type="submit" variant="warning">
                Add Vendor
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AdminAddCart;
