import React, { Component } from 'react';
import reaper from '../assets/reaper.png';
import '../assets/css/App.css';
import Typography from "@material-ui/core/Typography";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Typography color="textPrimary">
            The Reaper
          </Typography>
          <img src={reaper} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
