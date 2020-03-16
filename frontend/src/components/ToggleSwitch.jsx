// -- Youtube tutorial about switches-- Not implemented yet

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.lable `
	position: realitive;
	display: inline-block;
	width: 30px;
	height: 16px
	> input {
		display: none;
`;

const Slider = styled.span`
	postion: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #dd;
	transition: 0.4s;
	border-radisu: 15px
	&:before{
		position: absolute;
		content: '';
		height: 15px;
		width: 15px;
		background-color: #999;
		transitio: 0.2s;
		border-radius: 50%;
	}
`;

const SliderInput = styled.input`
	&:checked + ${Slider}{
		background-color: #0365b2;
		&:before {
			transform: translateX(15px);
			background-color: white;
		}
	}
`;
export default class ToggleSwitch extends React.Component {

	render(){
		return(
			<Container>
				<Slider type ="checkbox" checked = {this.props.checked} onChange = {(e) => this.props.onchange(e.target.checked)} />
				<Slider />
			</Container >

		);
	}
}

ToggleSwitch.propTypes = {
	checked: PropTypes.bool,
	onchanged: PropTypes.func,

}
