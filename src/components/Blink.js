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
		let displayText = "";
		if (this.state.showText) {
			displayText = this.props.text;
		}

		return (
			<div>
				<h1>{displayText}</h1>
			</div>
		);
	}
}
