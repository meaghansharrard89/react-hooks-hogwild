import React, { useState } from "react";

function PorkerTile ( { name, image, weight, greased, specialty, highestMedal } ) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div onClick={handleClick} className="pigTile" >
        <h3>{name}</h3>
        <img src={image} alt={name}/>
        {isClicked ? (
            <div>
                <p>Weight: {weight}</p>
                <p>Specialties: {specialty}</p>
                <p>{greased ? "Greased" : ""}</p>
            </div>
        ) : null}
        </div>
    )
}

export default PorkerTile;