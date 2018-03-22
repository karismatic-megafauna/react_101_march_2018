import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box, Flex } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import Pokedex from "pokemon-metadata";

class App extends Component {
  render() {
    const pokemonNames = Object.keys(Pokedex);
    const pokeCards = pokemonNames.map(pokemonName => {
      const pokemon = Pokedex[pokemonName];
      return <PokeCard pokemon={pokemon} />;
    });

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
