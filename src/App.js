import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box, Flex } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import Pokedex from "pokemon-metadata";

class App extends Component {
  // ------ this.buildPokeCards -------
  // Instance Method
  // Receives an array of pokemon names,
  // Returns an array of PokeCards, one for each pokemon name supplied
  buildPokeCards = pokemonNames => {
    return pokemonNames.map(pokemonName => {
      const pokemon = Pokedex[pokemonName];
      return <PokeCard key={pokemon.name} pokemon={pokemon} />;
    });
  };

  // ------ this.sortedAndFilteredPokemon -------
  // Instance Method
  // Receives no arguments
  // Returns an array of pokemon, sorted and filtered using component's state
  sortAndFilterPokemon = () => {
    // TODO: sort/filter the Pokedex based on user input
    return Pokedex;
  };

  // TODO: Create the Sort/Filter controls
  render() {
    const pokemon = this.sortAndFilterPokemon();
    const pokemonNames = Object.keys(pokemon);
    const pokeCards = this.buildPokeCards(pokemonNames);

    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm">Sort by stat, filter by type...</Box>
          </Page.Filters>
          <Page.Body>
            <Flex wrap="wrap">{pokeCards}</Flex>
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
