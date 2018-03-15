import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import PokeDex from "pokemon-metadata";

class App extends Component {
  render() {
    // TODO: Get this data into `PokeCard` via props!
    const pokemen = PokeDex; // LOL
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

            {Object.keys(pokemen).map(function (key) {
              var pokemon = pokemen[key];
              return (
                <PokeCard
                  name={pokemon.name}
                  id={pokemon.id}
                  imageUrl={pokemon.sprites.front_default}
                  stats={pokemon.stats}
                />
              );
            })}
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
