import React from "react";

export default class Blink extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showText: false,
		};
		setInterval(() => {
			this.setState({ showText: !this.state.showText });
		}, 3000);
	}

	render() {
		return (
			<div>
				<h1>{this.state.showText ? this.props.text : ""}</h1>
			</div>
		);
	}
}
