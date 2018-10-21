import React from 'react';
import PeopleButton from './ui/PeopleButton';
import MovieButton from './ui/MovieButton';

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            mode: '',
            data: {}
        }
        this.togglePeople = this.togglePeople.bind(this);
        this.toggleMovies = this.toggleMovies.bind(this);
    }

    togglePeople(e) {
        console.log("People toggled")
        this.setState({
            mode: 'people'
        })
    }


    toggleMovies(e) {
        console.log("Movies toggled");
        this.setState({
            mode: 'movies'
        })
    }

    render() {
        return (
            <div>
                <p>main</p>
                <p>{this.state.mode}</p>
                <div>
                    <PeopleButton togglePeople={this.togglePeople} />
                    <MovieButton toggleMovies={this.toggleMovies} />
                </div>
            </div>
        )
    }
}