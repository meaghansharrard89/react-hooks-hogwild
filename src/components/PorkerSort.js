import React from "react";

function PorkerSort( { sortByName, sortByWeight } ) {

    return (
    <div>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByWeight}>Sort by Weight</button>
      </div>
    )
}

export default PorkerSort;