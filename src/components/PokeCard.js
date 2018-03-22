import React from "react";
import { Box, Card, Header, Flex, Icon } from "@procore/core-react";
import "../App.css";

//------ Stat --------
// Private Component
// Stateless Component with implicit return
// Destructuring props

const Stat = ({ name, value }) => (
  <Flex
    style={{ borderBottom: "1px solid black", width: "100%", padding: "6px 0" }}
    justifyContent="space-between"
  >
    <Box>{name}</Box>
    <Box>{value}</Box>
  </Flex>
);

// ------ PokeCard --------
// Exported component
// Stateless Component with explicit return
// Assigning keys to variables

const PokeCard = props => {
  const { name, stats, sprites } = props.pokemon;

  const statComponents = stats.map(stat => {
    return (
      <Stat key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
    );
  });

  return (
    <div style={{ width: "270px", padding: "15px" }}>
      <Card variant="hoverable">
        <Box padding="md">
          <Flex justifyContent="space-between" style={{ width: "100%" }}>
            <div>
              <Header.H3>#7 {name}</Header.H3>
            </div>
            <div>
              <Icon clickable={true} size="sm" icon="star" />
            </div>
          </Flex>

          <Flex justifyContent="center" style={{ width: "100%" }}>
            <img alt={name} src={sprites.front_default} />
          </Flex>

          {statComponents}
        </Box>
      </Card>
    </div>
  );
};

export default PokeCard;
