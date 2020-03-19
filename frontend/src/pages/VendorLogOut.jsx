import React from "react";
import {Component} from "react";
import {Container, Row, Col } from "react-bootstrap";
import VendorSideNav from "../components/VendorSideNav";
import LogRenderBox from "./LogRenderBox";


class VendorLogOut extends Component{ 
    constructor(){
      super();
      this.state = {
        log: []
      };
    }
    componentDidMount(){
      fetch("http://localhost:3000/vendor/log/")
      .then(res => res.json())
      .then(log => this.setState({log}, () => console.log("Log Fetched ", log))
      );
    }
    render() {
        return (
            <Container fluid>
                <Row>
          <Col xs="4" sm="3" md="3" lg="2" xl="2" style={{ paddingLeft: "0" }}>
            <VendorSideNav />
          </Col>
          <Col
            xs="8"
            sm="9"
            md="9"
            lg="10"
            xl="10"
            style={{ paddingTop: "75px" }}
          >
            <h6> Log Out Test</h6>
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

export default VendorLogOut;