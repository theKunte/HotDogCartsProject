import React, { Component } from "react";
const styleLogRenderBox = {
  border: "1px solid #bfbfbf",
  padding: "1.2rem",
  borderRadius: "6px",
  width: "100%",
  margin: "0.6rem 0"
};
class LogRenderBox extends Component {
  render() {
    return (
      <div style={styleLogRenderBox}>
        <div>
          <ul
            style={{ listStyle: "none", margin: "0" }}
            className="d-flex justify-content-between mr-5 ml-5"
          >
            <li>{this.props.Location}</li>
            <li>{this.props.Change_Type}</li>
            <li>{this.props.Time}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default LogRenderBox;
