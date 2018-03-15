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
  const name = props.name || '';
  const id = props.id || '';
  const image = props.image || '';
  const stats = props.stats || [];
  
  return (
    <Box margin="md">
      <Card variant="hoverable" style={{ width: '270px' }}>
        <Box padding="md">
          <Flex direction="column">
            <Flex justifyContent="space-between" style={{ width: '100%' }}>
              <div>
                <Header.H3>#{id} {name}</Header.H3>
              </div>
              <div>
                <Icon clickable={true} size="sm" icon="star" />
              </div>
            </Flex>

            <Flex justifyContent="center" style={{ width: '100%' }}>
              <img alt={name} src={image} />
            </Flex>

            <Flex wrap="wrap" style={{ width: '100%'}}>
              {stats.map(pokestat => 
                <Stat 
                  name={pokestat.stat.name} 
                  value={pokestat.base_stat} 
                />
              )}
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Box>
  )
}

export default PokeCard;
