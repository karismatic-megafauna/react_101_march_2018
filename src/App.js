import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box, Flex } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import Pokedex from "pokemon-metadata";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeOption: '',
    }
  }
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
  sortAndFilterPokemon = (pokeOption) => {
    // debugger;
    // this.setState({ pokeOption });

    // TODO: sort/filter the Pokedex based on user input
    return Pokedex;
  };

  // TODO: Create the Sort/Filter controls
  render() {
    const pokemon = this.sortAndFilterPokemon();
    const pokemonNames = Object.keys(pokemon);
    const pokeCards = this.buildPokeCards(pokemonNames);
    // const { pokeOption } = this.state;
    // const value = pokeOption && pokeOption.value;

    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm">
            <Select
              name="form-field-name"
              value={value}
              onChange={this.sortAndFilterPokemon}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
            </Box>
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
