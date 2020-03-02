import React, { Component } from 'react';
const styleVendorRenderBox = {
    border: '1px solid #bfbfbf',
    padding: '1.2rem',
    borderRadius: '6px',
    width: '100%',
    margin: '0.6rem 0'
}
class VendorRenderBox extends Component {
    state = {
        switch1: true,
      }
      handleSwitchChange = nr => () => {
        let switchNumber = `switch${nr}`;
        this.setState({
          [switchNumber]: !this.state[switchNumber]
        });
    }
    render () {
        return (
            <div style={ styleVendorRenderBox } >
                <div >
                    <ul style={{ listStyle: 'none', margin: '0'}} className='d-flex justify-content-between mr-5 ml-5'>
                        <li>ABC Hot Dog</li>
                        <li>123 4th Ave, Seattle, WA 98122</li>
                        <div className='custom-control custom-switch'>
                        <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitches'
                        checked={this.state.switch1}
                        onChange={this.handleSwitchChange(1)}
                        readOnly
                        />
                        <label className='custom-control-label' htmlFor='customSwitches'>
                        Show on map
                        </label>
                    </div>
                    </ul>
                </div>
            </div>
        )
    }
}
export default VendorRenderBox;