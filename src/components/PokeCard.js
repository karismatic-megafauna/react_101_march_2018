import React from 'react';
import { Box, Card, Header, Flex, Icon } from '@procore/core-react';
import '../App.css';

//------ Stat --------
// Private Component
// Stateless Component with implicit return
// Destrucruting props
const Stat = ({ name, value }) => (
  <Flex
    style={{ borderBottom: '1px solid black', width: '100%', padding: '6px 0'}}
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
// TODO: find the rest of the props in the component
const PokeCard = (props) => {
  const name = props.name || 'squirtle';
  return (
    <Box margin="md">
      <Card variant="hoverable" style={{ width: '270px' }}>
        <Box padding="md">
          <Flex direction="column">
            <Flex justifyContent="space-between" style={{ width: '100%' }}>
              <div>
                <Header.H3>#7 {name}</Header.H3>
              </div>
              <div>
                <Icon clickable={true} size="sm" icon="star" />
              </div>
            </Flex>

            <Flex justifyContent="center" style={{ width: '100%' }}>
              <img alt={name} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" />
            </Flex>

            <Flex wrap="wrap" style={{ width: '100%'}}>
              <Stat name="speed" value={50} />
              <Stat name="special-defense" value={50} />
              <Stat name="special-attack" value={50} />
              <Stat name="defense" value={50} />
              <Stat name="attack" value={50} />
              <Stat name="hp" value={50} />
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Box>
  )
}

export default PokeCard;
