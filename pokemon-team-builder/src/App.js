import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Page, Box } from "@procore/core-react";

class App extends Component {
  render() {
    return (
      <div style={{ height: "800px", border: "1px solid #d9d9d9" }}>
        <Page>
          <Page.Main>
            <Page.ToolHeader>
              <Box
                style={{ backgroundColor: "crimson", color: "white" }}
                padding="md md"
              >
                Choose Your Pokemon
              </Box>
            </Page.ToolHeader>

            <Page.Filters>
              <Box
                style={{
                  backgroundColor: "rebeccapurple",
                  color: "white",
                  height: "38px"
                }}
              >
                Sort & Filters
              </Box>
            </Page.Filters>

            <Page.Body>
              <Box
                padding="md"
                style={{ backgroundColor: "aliceblue", color: "gray", flex: 1 }}
              >
                Body
              </Box>
            </Page.Body>
          </Page.Main>

          <Page.Sidebar>Sidebar</Page.Sidebar>
        </Page>
      </div>
    );
  }
}

export default App;
