import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const styleVendorRenderBox = {
  border: "1px solid #bfbfbf",
  padding: "1.2rem",
  borderRadius: "6px",
  width: "100%",
  margin: "0.6rem 0"
};
class VendorIncomingOrderBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orderid: this.props.order.id,
          itemName: this.props.order.itemName,
          itemQty: this.props.order.itemQty
        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    

  render() {
    return (
      <div style={styleVendorRenderBox}>
        <div>
          <ul
            style={{ listStyle: "none", margin: "0" }}
            className="d-flex justify-content-between mr-5 ml-5"
          >
            <li>OrderNumber: {this.state.orderid}</li>
            <li>Item:{this.state.itemName}</li>
            <li>Quantity: {this.state.itemQty}</li>

            <Button variant="danger">Remove</Button>
          </ul>
        </div>
      </div>
    );
  }
}
export default VendorIncomingOrderBox;
