import React from "react";
import { Flex, Page, Button } from "@procore/core-react";
import PokeObject from "pokemon-metadata";
import PokeCard from "../components/PokeCard";

const Team = ({ pokemonNames }) => (
  <Page>
    <Flex wrap="wrap">
      {pokemonNames.map(pokeName => {
        return <PokeCard key={pokeName} pokemon={PokeObject[pokeName]} />;
      })}
    </Flex>
  </Page>
);

export default Team;
