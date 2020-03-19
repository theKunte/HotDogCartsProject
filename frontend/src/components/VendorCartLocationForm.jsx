import React from 'react';
import { Component } from 'react';

class VendorCartLocationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.id,
        value: this.props.defaultLocation
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.submitData(this.state); //invokes submitData function passed in through props in VendorCartLocation.jsx
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Current Location:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default VendorCartLocationForm;