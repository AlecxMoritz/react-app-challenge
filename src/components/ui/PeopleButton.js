import React from 'react';

const PeopleButton = (props) => {
    return (
        <div>
            <button onClick={props.togglePeople}>People</button>
        </div>
    )
}

export default PeopleButton