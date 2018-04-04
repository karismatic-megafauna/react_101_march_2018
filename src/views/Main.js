import React, { Component } from "react";
import PokeObject from "pokemon-metadata";
import { Input, Page, Header, Flex } from "@procore/core-react";

import Sidebar from "../components/Sidebar";
import PokeCard from "../components/PokeCard";
import { turnObjectIntoArray } from "../utils";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonArray: turnObjectIntoArray(PokeObject),
      searchTerm: ""
    };
  }
  render() {
    const { partyArray, addToParty, removeFromParty } = this.props;
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
                      iconClick={addToParty}
                    />
                  );
                })}
            </Flex>
          </Page.Body>
        </Page.Main>
        <Sidebar pokemonNames={partyArray} removeFromParty={removeFromParty} />
      </Page>
    );
  }
}
export default Main;
