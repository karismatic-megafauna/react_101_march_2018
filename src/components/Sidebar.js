import React from "react";
import { Flex, Page, Button } from "@procore/core-react";
import PokeCard from "./PokeCard";
import PokeObject from "pokemon-metadata";
import { Link } from "react-router-dom";

const Sidebar = ({ pokemonNames, removeFromParty }) => (
  <Page.Sidebar>
    <Link to="/team">
      <Button size="lg" style={{ width: "100%" }}>
        View Team
      </Button>
    </Link>
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
