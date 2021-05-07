import Item from "./Components/Item";
import Card from "./Components/Card";

const App = () => {
	return (
		<>
			<h1>Meu primeiro React</h1>
			<ul>
				<Item>Item 1</Item>
				<Item>Item 2</Item>
				<Item>Item 3</Item>
			</ul>
			<Card />
		</>
	);
};

export default App;
