import React, { Component } from 'react';
import './App.css';
import { Page, Header, Card, Box, Icon, Grid, Flex } from '@procore/core-react';
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm">Sort by stat, filter by type...</Box>
          </Page.Filters>
          <Page.Body className="Body">
            <Card style={{ width: '270px', padding: '15px' }}>
              <Grid>
                <Grid.Row>
                  <Grid.Col span={11} style={{ padding: '0px' }}>
                    <span className="grid-example">
                      <Header.H3>#146 Pokemon</Header.H3>
                    </span>
                  </Grid.Col>
                  <Grid.Col span={1}>
                    <span className="grid-example">
                      <a>+</a>
                    </span>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col span={12} style={{ textAlign: 'center' }}>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" />
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    speed
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    special-defense
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    special-attack
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    defense
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    attack
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
                <Grid.Row className="stat-row">
                  <Grid.Col span={11} className="stat-name">
                    hp
                  </Grid.Col>
                  <Grid.Col span={1}>50</Grid.Col>
                </Grid.Row>
              </Grid>
            </Card>
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
