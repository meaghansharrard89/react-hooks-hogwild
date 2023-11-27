import React, { useState } from "react";

function PorkerTile ( { name, image, specialty, greased, weight, highestMedal } ) {
    const [isClicked, setIsClicked] = useState(false)

    function handleClick() {
        setIsClicked(!isClicked);
    }
  
    return (
        <div onClick={handleClick} className="pigTile">
            <h1>{name}</h1>
            <img src={image} alt={name} width="250px"/>
            {isClicked ? (
                <>
                <p>{specialty}</p>
                <p>{greased}</p>
                <p>{weight}</p>
                <p>{highestMedal}</p>
                </>
            ) : null}
        </div>
    )
}

export default PorkerTile;
