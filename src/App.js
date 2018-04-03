import React, { Component } from "react";
import Pokedex from "pokemon-metadata";
import { Input, Page, Header, Flex } from "@procore/core-react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import { turnObjectIntoArray } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      pokemonData: turnObjectIntoArray(Pokedex),
    };
  }

  render() {
    const { pokemonData, searchTerm } = this.state;
    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Header type="h2">Search by Name</Header>
            <Input onChange={(event) => {
              const payload = {
                searchTerm: event.target.value,
              }

              this.setState(payload);
            }}/>
          </Page.Filters>
          <Page.Body>
            <Flex wrap="wrap">
              {pokemonData
                  .filter((poke) => {
                    return poke.name.includes(searchTerm)
                  })
                  .map((poke) => {
                    return <PokeCard key={poke.name} pokemon={poke} />;
                  })
              }
            </Flex>
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
