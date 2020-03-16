import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductConsumer } from '../data/context';
import {Link} from 'react-router-dom';

export default class VendorMenuItem extends Component {
    state = {
             switch1: true
           };

    handleSwitchChange = nr => () => {
             let switchNumber = `switch${nr}`;
             this.setState({
               [switchNumber]: !this.state[switchNumber]
         });
    }

    render() {

    const {id, title, img, price, info, inCart} = this.props.product;

		return (
			<Row>
				<Col>
					<div>Your Item:</div>
					<ProductConsumer>
						{(value) => (
							<div className="contentBox">
								<img className="productImg" src="https://regmedia.co.uk/2017/07/07/hotdog.jpg?x=442&y=293&crop=1" alt="" />
								<div className="titleBox">
										<h6 className="productTitle">{this.props.product.title}</h6>
										<p className="productInfo">{this.props.product.info}</p>
								</div>
								<hr></hr>
                                <div className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitches"
                                    checked={this.state.switch1} // To do read from database
                                    onChange={this.handleSwitchChange(1)}
                                    readOnly
                                />
                                <label className="custom-control-label" htmlFor="customSwitches">
                                    Available
                                </label>
                                </div>
                                
								
							</div>
						)}
					</ProductConsumer>
				</Col>
			</Row>
    )
  }
}