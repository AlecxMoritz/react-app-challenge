import React, { useState } from 'react';
import HeroButton from './ui/HeroButton';
import VillainButton from './ui/VillainButton';
import data from '../data/heroesAndVillans';

let leftIndent = {
    marginLeft: '1em'
}

const Main = () => {
    const [ characters, setCharacters ] = useState([]);

    const toggleHero = () => {
        let heroes = data.filter(character => character.hero === true);
        setCharacters(heroes);
    };
    
    const toggleVillain = () => {
        let villains = data.filter(character => character.hero === false);
        setCharacters(villains);
    };

    return (
        <div>
            <div>
                <div className="btns" style={leftIndent}>
                    <HeroButton toggleHero={ toggleHero } />
                    <VillainButton toggleVillain={ toggleVillain } />
                </div>
            </div>
            { characters.length < 1 ? <p>Click a button to see some characters!</p> : null }
            <div className="data-display">
                {
                    characters.map((character, index) => {
                        return (
                            <div key={index} className="character-display">
                                <h2>{character.name}</h2>
                                <h6>Real Name: {character.realName}</h6>
                                <p>Universe: {character.universe}</p>
                                <p>Powers:{character.power}</p>
                            </div>                
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Main;