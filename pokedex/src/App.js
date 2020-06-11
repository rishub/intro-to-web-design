import React, { useState } from 'react';
import startingPokemonList from './pokemon'; // ./ means check the current directory for this file
import './App.css';

// every component gets props
// props is an object containing all of the items that are passed into the component
// this is a component
function Pokemon(props) { 
  // this is equivalent to
  // const pokemon = props.pokemon;
  const { pokemon, index, markAsCaught } = props;

  let caughtText = "Not caught";

  // this is true if its 1 and false if its 0
  if (pokemon.caught) {
    caughtText = "Caught";
  }

  return (
    <div className="pokemonRow">
      <div>{pokemon.name}</div>
      <div>{pokemon.type}</div>
      <div>{caughtText}</div>
      {/* don't show the button to catch unless the pokemon has not been caught */}
      {!pokemon.caught && <button onClick={() => markAsCaught(index)}>Catch</button>}
    </div>
  )
}

function App() {
  const [pokemonList, setPokemonList] = useState(startingPokemonList);
  const [searchTerm, setSearchTerm] = useState("");

  // this function marks a pokemon as caught using its index
  const markAsCaught = index => {
    // these two lines clone the object and allow react to update the state
    // JSON.stringify converts the array to a string
    // JSON.parse converts the string to an array
    // together, they create a clone of the array as a new array
    const stringPokemonList = JSON.stringify(pokemonList);
    const clonedPokemonList = JSON.parse(stringPokemonList);

    clonedPokemonList[index].caught = 1; // 1 means the pokemon is caught

    setPokemonList(clonedPokemonList);
  }

  const filterPokemon = e => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);
  }

  const filteredPokemonList = pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm); // checks if the pokemons name is in the search bar
  })

  return (
    <div className="App">
      <h1>Pokedex</h1>
      Search: <input className="searchBar" onChange={filterPokemon} />
      {filteredPokemonList.map((pokemon, index) => {
        return <Pokemon pokemon={pokemon} index={index} markAsCaught={markAsCaught} />
      })}
      {JSON.stringify(filteredPokemonList) === "[]" && <p>Sorry, found no pokemon :(</p>}
    </div>
  );
}

export default App;
