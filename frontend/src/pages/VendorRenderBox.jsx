import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const styleVendorRenderBox = {
  border: "1px solid #bfbfbf",
  padding: "1.2rem",
  borderRadius: "6px",
  width: "100%",
  margin: "0.6rem 0"
};
class VendorRenderBox extends Component {
  state = {
    switch1: true
  };
  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  };
  render() {
    return (
      <div style={styleVendorRenderBox}>
        <div>
          <ul
            style={{ listStyle: "none", margin: "0" }}
            className="d-flex justify-content-between mr-5 ml-5"
          >
            <li>{this.props.VendorName}</li>
            <li>{this.props.Address}</li>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitches"
                checked={this.state.switch1}
                onChange={this.handleSwitchChange(1)}
                readOnly
              />
              <label className="custom-control-label" htmlFor="customSwitches">
                Show on map
              </label>
            </div>
            <Button variant="danger">Remove</Button>
          </ul>
        </div>
      </div>
    );
  }
}
export default VendorRenderBox;
