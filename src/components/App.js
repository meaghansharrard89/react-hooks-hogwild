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

/*1. send hogs data to component where it's looped through. top level of data lives here
	-display a tile for each hog
	-when the hog tile is clicked, display other details about the hog
2. filter hogs by grease
3. sort hogs based on name or weight

APP
	HOG INFO
		DISPLAY HOGS
		FILTER HOGS BY GREASE
		SORT HOGS BY WEIGHT/NAME
*/