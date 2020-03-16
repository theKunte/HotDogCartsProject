import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideNav from "../components/AdminSideNav";
import MenuRenderBox from "./MenuRenderBox";

class AdminMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/admin/menu/")
      .then(res => res.json())
      .then(menu =>
        this.setState({ menu }, () => console.log("Menu Fetched ", menu))
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
            <h6> Menu </h6>
            <ul>
              <hr></hr>
              {this.state.menu.map(menuItem => (
                <>
                  <MenuRenderBox
                    VendorName={menuItem.VendorName}
                    Item={menuItem.Item}
                    Quantity={menuItem.Quantity}
                  />
                </>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminMenu;
