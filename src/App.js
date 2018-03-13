import React, { Component } from "react";
import "./App.css";
import { Page, Header, Card, Box } from "@procore/core-react";
import Sidebar from "./components/sidebar";

class App extends Component {
  render() {
    return (
      <Page>
        <Page.Main>
          <Page.Title>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.Title>
          <Page.Filters>
            <Box style={{ borderTop: "solid 1px #ccc" }} padding="sm">
              Sort by stat, filter by type...
            </Box>
          </Page.Filters>
          <Page.Body>
            <Card>A Pokemon</Card>
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
