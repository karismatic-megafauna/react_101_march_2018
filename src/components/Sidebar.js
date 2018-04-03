import React from "react";
import { Flex, Page } from "@procore/core-react";
import PokeCard from "./PokeCard";
import PokeObject from "pokemon-metadata";

const Sidebar = ({ pokemonNames, removeFromParty }) => (
  <Page.Sidebar>
    <Flex wrap="wrap">
      {pokemonNames.map(pokeName => {
        return (
          <PokeCard
            key={pokeName}
            pokemon={PokeObject[pokeName]}
            iconClick={removeFromParty}
          />
        );
      })}
    </Flex>
  </Page.Sidebar>
);

export default Sidebar;
