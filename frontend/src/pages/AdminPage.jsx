import React from "react";
import { Component } from "react";
// import VendorRenderBox from './VendorRenderBox';
import AdminSideNav from "../components/AdminSideNav";
import { Container, Row, Col } from "react-bootstrap";

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      vendors: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/admin/vendors/")
      .then(res => res.json())
      .then(vendors => this.setState({ vendors }));
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
            <h6> Active list of vendors: </h6>
            <ul>
              {this.state.vendors.map(vendor => (
                <li key={vendor.LocationID}>
                  {" "}
                  {vendor.Address} {vendor.Availability}
                </li>
              ))}
            </ul>
            {/* <AdminRenderBox /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminPage;
