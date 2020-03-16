import React from "react";
import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideNav from "../components/AdminSideNav";
import LogRenderBox from "./LogRenderBox";

class AdminLog extends Component {
  constructor() {
    super();
    this.state = {
      log: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/admin/log/")
      .then(res => res.json())
      .then(log =>
        this.setState({ log }, () => console.log("Log Fetched ", log))
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
            <h6> Log </h6>
            <ul>
              <hr></hr>
              {this.state.log.map(singleLog => (
                <>
                  <LogRenderBox
                    Location={singleLog.Location}
                    Change_Type={singleLog.Change_Type}
                    Time={singleLog.Time}
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

export default AdminLog;
