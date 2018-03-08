import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Page, Header, Grid, Box } from "@procore/core-react";

class App extends Component {
  render() {
    return (
      <div style={{ height: "600px", border: "1px solid #d9d9d9" }}>
        <Page>
          <Page.Main>
            <Page.Title>
              <Header.H1>Choose your Pokemon</Header.H1>
            </Page.Title>
            <Page.Filters>
              <Box
                style={{
                  backgroundColor: "rebeccapurple",
                  color: "white",
                  height: "38px"
                }}
              >
                Search & Filters
              </Box>
            </Page.Filters>
            <Page.Body>
              <Grid>
                <Grid.Row>
                  <Grid.Col span={4}>
                    <span className="grid-example">1</span>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <span className="grid-example">11</span>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <span className="grid-example">11</span>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col span={4}>
                    <span className="grid-example">1</span>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <span className="grid-example">11</span>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <span className="grid-example">11</span>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </Page.Body>
          </Page.Main>
          <Page.Sidebar>Sidebar</Page.Sidebar>
        </Page>
      </div>
    );
  }
}

export default App;
