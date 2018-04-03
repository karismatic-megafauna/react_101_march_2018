import React, { Component } from "react";
import PokeObject from "pokemon-metadata";
import { Input, Page, Header, Flex } from "@procore/core-react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";
import { turnObjectIntoArray } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      pokemonArray: turnObjectIntoArray(PokeObject),
      partyArray: []
    };
  }

  addToParty = name => {
    return () => {
      const newPartyArray = this.state.partyArray.concat(name);
      this.setState({ partyArray: newPartyArray });
    };
  };

  removeFromParty = name => {
    return () => {
      const index = this.state.partyArray.indexOf(name);
      this.state.partyArray.splice(index, 1);
      this.setState({ partyArray: this.state.partyArray });
    };
  };

  render() {
    const { pokemonArray, searchTerm, partyArray } = this.state;

    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Header type="h2">Search by Name</Header>
            <Input
              onChange={event => {
                const payload = {
                  searchTerm: event.target.value
                };

                this.setState(payload);
              }}
            />
          </Page.Filters>
          <Page.Body>
            <Flex wrap="wrap">
              {pokemonArray
                .filter(poke => {
                  return (
                    poke.name.includes(searchTerm) &&
                    !partyArray.includes(poke.name)
                  );
                })
                .map(poke => {
                  return (
                    <PokeCard
                      key={poke.name}
                      pokemon={poke}
                      iconClick={this.addToParty}
                    />
                  );
                })}
            </Flex>
          </Page.Body>
        </Page.Main>
        <Sidebar
          pokemonNames={partyArray}
          removeFromParty={this.removeFromParty}
        />
      </Page>
    );
  }
}

export default App;
