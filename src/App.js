import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import { Bar } from './components/bar/Bar';
import { Routes } from './components/Routes'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className='App'>
            <div className='primary-container'>
              <Bar />
              <Routes />
            </div>
          </div>
        </MuiThemeProvider>  
      </Router>
    );
  };
};

export default App;
