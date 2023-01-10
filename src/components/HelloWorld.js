import React from "react";

export default function HelloWorld({ title, desc, ...style }) {
	return (
		<div style={style}>
			<h1>{title}</h1>
			<p>{desc}</p>
		</div>
	);
}
