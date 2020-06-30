import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
	static defaultProps = {
		numWords: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	constructor(props) {
		super(props);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.props.handleClick(this.props.idx);
	}

	render() {
		let classes = `Die fas fa-dice-${this.props.numWords[this.props.val - 1]} fa-5x `;
		if (this.props.locked) classes += 'Die-locked';
		return <i className={classes} onClick={this.handleToggle} disabled={this.props.disabled} />;
	}
}

export default Die;
