import React, { useState } from "react";
import PorkerFilter from "./PorkerFilter";
import PorkerTile from "./PorkerTile";
import PorkerSort from "./PorkerSort";
import { isCompositeComponent } from "react-dom/test-utils";

function Porkers ( { hogs } ) {
const [selectedCategory, setSelectedCategory] = useState("All")
const [hog, setHogs] = useState(hogs)

const onOptionSelect = (option) => {
    setSelectedCategory(option)
}

const sortByName = () => {
    const sortedHogs = [...hog].sort((a, b) => a.name.localeCompare(b.name));
    setHogs(sortedHogs);
}

const sortByWeight = () => {
    const sortedHogs = [...hog].sort((a, b) => a.weight - b.weight);
    setHogs(sortedHogs);
}

//filter pigs by greased
const greasedPorkers = hog.filter((individualHog) => {
    if (selectedCategory === "All") {
        return true;
    } else if (selectedCategory === "Greased") {
        return individualHog.greased;
    } else {
        return !individualHog.greased;
    }
})

//displays hogs based on greased sorting
const displayHogs = greasedPorkers.map((hog) => {
    return (
        <PorkerTile 
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            image={hog.image}
            highestMedal={hog["highest medal achieved"]}
        />
    )
    }
    )

//displays the sort filter and displayed hogs
    return (
        <div>
            <PorkerFilter onOptionSelect={onOptionSelect}/>
            <PorkerSort sortByName={sortByName} sortByWeight={sortByWeight} />
            <div className="ui grid container">{displayHogs}</div>
        </div>
    )
}

export default Porkers;