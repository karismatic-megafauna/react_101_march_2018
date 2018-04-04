import React, { Component } from "react";
import { Toast } from "@procore/core-react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Team from "./views/Team";
import Main from "./views/Main";
import Toaster from "@procore/labs-toast-alert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyArray: []
    };
  }

  addToParty = name => {
    return () => {
      if (this.state.partyArray.length === 6) {
        <Toast variant="success">
          Success, You have so many already dude!
        </Toast>;
        return;
      }

      const newPartyArray = this.state.partyArray.concat(name);
      this.setState({ partyArray: newPartyArray });
    };
  };

  removeFromParty = name => {
    return () => {
      const index = this.state.partyArray.indexOf(name);
      this.state.partyArray.splice(index, 1);
      this.setState({ partyArray: this.state.partyArray });
    };
  };

  render() {
    const props = {
      partyArray: this.state.partyArray,
      addToParty: this.addToParty,
      removeFromParty: this.removeFromParty
    };

    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Main {...props} />} />
          <Route
            exact
            path="/team"
            render={() => <Team pokemonNames={this.state.partyArray} />}
          />
          <Toaster toasts={[{ message: "I am a toast" }]} />
        </div>
      </Router>
    );
  }
}

export default App;
