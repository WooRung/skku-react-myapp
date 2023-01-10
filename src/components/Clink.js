import React from "react";

export default function Clink(props) {
	// Hook: useState
	// return value는 [state, state를 변화시킬수 있는 함수]
	const [count, setCount] = React.useState(0);

	// count를 1씩 증가시키는 함수.
	const increaseCount = () => {
		setCount(count + 1);
	};

	// Hook:useEffect --> 특정 State가 변경될때마다 실행되는 함수.
	// useEffect의 인자 (실행시킬 function, [감지할 State])
	// React.useEffect(() => {
	// 	alert("클릭되었습니다.");
	// }, [count]);

	// React.useEffect(() => {
	// 	alert("로딩될때 한번만 호출됩니다.");
	// }, []);

	// Hook: useCallback --> 특정 State가 변경될때마다 다시 정의할 함수.
	// useCallback의 인자 (정의할 function, [감지할 states])
	// return value는 함수.
	const decreaseCount = React.useCallback(
		e => {
			setCount(count - 1);
		},
		[count],
	);

	const value = React.useMemo(() => {
		return count ** 2;
	}, [count]);

	return (
		<div>
			<h3>{count}</h3>
			<p>{value}</p>
			<button
				type="button"
				onClick={e => {
					increaseCount();
				}}>
				증가
			</button>
			<button type="button" onClick={decreaseCount}>
				감소
			</button>
			<h1>{props.text}</h1>
		</div>
	);
}
