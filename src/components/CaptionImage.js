import React from "react";

// export default function CaptionImage(props) {
// 	console.log(props);
// 	return (
// 		<div>
// 			<img src={props.imgUrl} alt={props.caption} />
// 			<p>{props.caption}</p>
// 		</div>
// 	);
// }

export default function CaptionImage({ imgUrl, caption }) {
	// console.log(props);
	console.log(imgUrl);
	console.log(caption);
	return (
		<div>
			<img src={imgUrl} alt={caption} />
			<p>{caption}</p>
		</div>
	);
}
