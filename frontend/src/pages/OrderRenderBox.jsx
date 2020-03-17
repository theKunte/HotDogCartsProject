import React, { Component } from "react";
const styleOrderRenderBox = {
  border: "1px solid #bfbfbf",
  padding: "1.2rem",
  borderRadius: "6px",
  width: "100%",
  margin: "0.6rem 0"
};
class OrderRenderBox extends Component {
  render() {
    return (
      <div style={styleOrderRenderBox}>
        <div>
          <ul
            style={{ listStyle: "none", margin: "0" }}
            className="d-flex justify-content-between mr-5 ml-5"
          >
            <li>{this.props.OrderStatus}</li>
            <li>{this.props.TimeReceived}</li>
            <li>{this.props.LocationName}</li>
            <li>{this.props.Item}</li>
            <li>{this.props.Quantity}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default OrderRenderBox;
