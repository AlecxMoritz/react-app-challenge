import React from 'react';

const HeroButton = () => {
    return (
        <React.Fragment>
            <button className="app-btn" onClick={props.toggleHero}>Heroes</button>
        </React.Fragment>
    )
}

export default HeroButton;