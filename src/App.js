import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box, Flex, Input } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import Pokedex from "pokemon-metadata";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  buildPokeCards = pokemonNames => {
    return pokemonNames.map(pokemonName => {
      const pokemon = Pokedex[pokemonName];
      return <PokeCard key={pokemon.name} pokemon={pokemon} />;
    });
  };

  getPokemonNames = () => {
    const pokemonName = Object.keys(Pokedex);
    return pokemonName;
  };

  sortAndFilterPokemon = () => {
    const pokemonName = this.getPokemonNames();
    const result = pokemonName.filter( item => item.includes(this.state.value) );
    return result;
  };

  // TODO: Create the Sort/Filter controls
  render() {
    const pokemonNames = this.sortAndFilterPokemon();
    const pokeCards = this.buildPokeCards(pokemonNames);

    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm"><Input value={this.state.value} onChange={this.handleChange}></Input></Box>
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
