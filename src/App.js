import React, { Component } from 'react';
import './app.css'
import miniData from './miniData';
import ConjugatorContainer from './components/conjugatorPage/ConjugatorContainer';
import { Route } from 'react-router-dom';
import OptionsContainer from './components/optionsPage/OptionsContainer';
import Home from './components/home/Home';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: miniData,
      verbTenses: []
    };
  }

  filterData = event => {
    event.preventDefault();
    const test = Object.values(miniData).filter(
      verb => verb.infinitive === 'hablar'
    );
    this.setState({
      data: test
    });
  };

  setTenses = event => {
    this.setState({
      verbTenses: event.target.value
    });
    console.log('Clicked!');
  };

  render() {
    return (
      <div style={{width: '420px', margin: '0 auto'}}>
          <Route path="/" component={Header} />
          <Route
            exact path="/random"
            render={props => (
              <ConjugatorContainer
                {...props}
                setTenses={this.setTenses}
                data={this.state.data}
              />
            )}
          />
        <Route exact path="/" component={Home} />
        <div>
          <Route
            path="/options"
            render={props => (
              <OptionsContainer {...props} filterData={this.filterData} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
