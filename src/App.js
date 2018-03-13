import React, { Component } from "react";
import "./App.css";
import { Page, Header, Card, Box } from "@procore/core-react";
import Sidebar from "./components/Sidebar";

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
          <Page.Body className="Body">
            <Card>A Pokemon</Card>
          </Page.Body>
        </Page.Main>
        <Sidebar />
      </Page>
    );
  }
}

export default App;
