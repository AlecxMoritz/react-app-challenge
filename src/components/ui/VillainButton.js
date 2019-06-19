import React from 'react';

const VillainButton = (props) => {
    return (
        <React.Fragment>
            <button className="app-btn" onClick={props.toggleVillain}>Villains</button>
        </React.Fragment>
    )
}

export default VillainButton;