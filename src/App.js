import logo from "./logo.svg";
import "./App.css";
import CaptionImage from "./components/CaptionImage";
import HelloWorld from "./components/HelloWorld";
import Blink from "./components/Blink";

function App() {
	const objHello = {
		title: "환영합니다",
		desc: "저의 첫번째 React App이에요.",
		color: "red",
		fontWeight: 800,
		textAlign: "left",
	};
	const { title, desc, ...style } = objHello;
	// title, desc, color, fontWeight, textAlign
	return (
		<div className="App">
			<Blink text="이건 깜빡입니다." />
			<HelloWorld title={title} desc={desc} {...style} />
			<CaptionImage
				imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSEyPCHfLQrB1O44wJTRVLmYxFwk9qIJ_usVheNv4&s"
				caption="이건 트럭입니다."
			/>
			<CaptionImage
				imgUrl="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F202208%2FFPL%2F1413623693.jpg&type=sc960_832"
				caption="꽃사진"
			/>
		</div>
	);
}

export default App;
