import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Page, Box, Button, Card } from '@procore/core-react';

class App extends Component {
  render() {
    return (
      <div style={{ height: '800px', border: '1px solid #d9d9d9' }}>
        <Page>
          <Page.Main>
            <Page.Banner>
              <Box style={{ color: 'black', height: '72px' }}>
                Choose your Pokemon
              </Box>
            </Page.Banner>

            <Page.Filters>
              <Box style={{ color: 'black', height: '38px' }}>
                Search & Filters
              </Box>
            </Page.Filters>

            <Page.Body>
              <Box padding="md" style={{ color: 'gray', flex: 1 }}>
                <Card>
                  <Card.TipHeader />

                  <p>Pokemon skills</p>
                  <p>Pokemon skills</p>
                  <p>Pokemon skills</p>
                </Card>
              </Box>
            </Page.Body>
          </Page.Main>

          <Page.Sidebar>
            <Button>View Team</Button>
          </Page.Sidebar>
        </Page>
      </div>
    );
  }
}

export default App;
