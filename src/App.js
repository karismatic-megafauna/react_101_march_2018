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
      team: []
    };
  }

  render() {
    const { pokemonArray, searchTerm } = this.state;
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
                  return poke.name.includes(searchTerm);
                })
                .map(poke => {
                  return (
                    <PokeCard
                      addToTeam={nameToAdd => {
                        const payload = {
                          team: this.state.team.concat(nameToAdd)
                        };
                        this.setState(payload);
                      }}
                      key={poke.name}
                      pokemon={poke}
                    />
                  );
                })}
            </Flex>
          </Page.Body>
        </Page.Main>
        <Sidebar>
          {this.state.pokemonArray
            .filter(poke => {
              return this.state.team.includes(poke.name);
            })
            .map(poke => {
              return (
                <PokeCard
                  addToTeam={nameToAdd => {
                    const payload = {
                      team: this.state.team.concat(nameToAdd)
                    };
                    this.setState(payload);
                  }}
                  key={poke.name}
                  pokemon={poke}
                />
              );
            })}
        </Sidebar>
      </Page>
    );
  }
}

export default App;
