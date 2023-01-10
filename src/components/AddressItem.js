import React from "react";

export default function AddressItem({ elem, address, setAddress }) {
	return (
		<li key={elem.id}>
			<div>
				{elem.name}
				{/* 문제2. X 누르고 지워지도록 */}
				<span
					onClick={e => {
						const newAddress = address.filter(item => {
							if (item.id === elem.id) {
								return false;
							}
							return true;
						});
						setAddress(newAddress);
					}}
					style={{ color: "red", cursor: "pointer" }}>
					X
				</span>
			</div>
		</li>
	);
}
