import React, { useState } from "react";
import PorkerTile from "./PorkerTile.js";
import PorkerFilter from "./PorkerFilter";

function Porkers ( { hogs } ) {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const onOptionSelect = (option) => {
        setSelectedCategory(option);
    }

    const greasedPigs = hogs.filter((hog) => {
        if (selectedCategory === "All") {
            return true;
        } else if (selectedCategory === "Greased") {
            return hog.greased;
        } else {
            return !hog.greased;
        }
    })

    const displayHogs = greasedPigs.map((hog) => {
        return (
            <PorkerTile
            key={hog.name}
            name={hog.name}
            image={hog.image} 
            weight={hog.weight}
            greased={hog.greased}
            specialty={hog.specialty}
            highestMedal={hog["highest medal achieved"]}
            />
        );
    })
    return (
        <div>
            <PorkerFilter onOptionSelect={onOptionSelect} />
            <div className="porkers">{displayHogs}</div>
        </div>
    )
}

export default Porkers;