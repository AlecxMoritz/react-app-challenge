import React from 'react';

const MovieButton = (props) => {
    return (
        <div>
            <button onClick={props.toggleMovies}>Movies</button>
        </div>
    )
}

export default MovieButton