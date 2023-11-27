import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Porkers from "./Porkers"

function App() {
	return (
		<div className="App">
			<Nav />
			<Porkers hogs={hogs} />
		</div>
	);
}

export default App;