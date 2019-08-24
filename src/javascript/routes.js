import React, { Component } from 'react';
import '../css/App.css';
import ResultListing from './result-listing';
import Result from './result';
import Home from './home';
import {HashRouter, Switch} from 'react-router-dom';
//import resultData from   '../static/results';

class Root extends Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Switch>
            <ResultListing exact={true} path = '/' />
            <Result exact={true} path = '/result'/>
          </Switch>
        </Home>
      </HashRouter>
    );
  }
}

export default Root;
