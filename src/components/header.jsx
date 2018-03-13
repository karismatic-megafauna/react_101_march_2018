import React, { Component } from "react";
import { Page, Header, Box } from "@procore/core-react";

class PokemonHeader extends Component {
  render() {
    return (
      <div>
        <Page.Title>
          <Header.H1>Choose your Pokemon</Header.H1>
        </Page.Title>
        <Page.Filters>
          <Box style={{ borderTop: "solid 1px #ccc" }} padding="sm">
            Sort by stat, filter by type...
          </Box>
        </Page.Filters>
      </div>
    );
  }
}

export default PokemonHeader;
