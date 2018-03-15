import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";

class App extends Component {
  render() {
    // TODO: Get this data into `PokeCard` via props!
    const pokemon = {
      name: 'super squirtle',
      id: 7,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      stats: {
        hp: 100,
        specialAttack: 100,
        specialDefense: 100,
        defense: 100,
        speed: 100,
        attack: 100,
      }
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
            <PokeCard />
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
