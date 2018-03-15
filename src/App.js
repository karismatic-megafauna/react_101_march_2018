import React, { Component } from "react";
import "./App.css";
import { Page, Header, Box } from "@procore/core-react";
import Sidebar from "./components/Sidebar";
import PokeCard from "./components/PokeCard";

class App extends Component {
  render() {
    return (
      <Page>
        <Page.Main>
          <Page.ToolHeader>
            <Header.H1>Choose your Pokemon</Header.H1>
          </Page.ToolHeader>
          <Page.Filters>
            <Box padding="sm">
              Sort by stat, filter by type...
            </Box>
          </Page.Filters>
          <Page.Body>
            <PokeCard />
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
