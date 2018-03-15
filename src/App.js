import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import pokemonData from 'pokemon-metadata';

class App extends Component {
  render() {
    const pokemonDummyData = pokemonData.bulbasaur;
    
    // TODO: Get this data into `PokeCard` via props!
    // hint: uncomment the line below to see how to turn an object to an array 
    //console.log(Object.keys(pokemonData))
    const pokemon = {
      name: pokemonDummyData.name,
      id: pokemonDummyData.id,
      image: pokemonDummyData.sprites.front_default,
      stats: pokemonDummyData.stats,
    };

    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm">
              Sort by stat, filter by type...
            </Box>
          </Page.Filters>
          <Page.Body>
            {/* TODO: Spawn many PokeCards! */}
            <PokeCard
              name={pokemon.name}
              id={pokemon.id} 
              image={pokemon.image}
              stats={pokemon.stats}
            />
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
