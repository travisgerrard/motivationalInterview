import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ForPatient from './ForPatient';

class App extends Component {
  changePage = pageNumber => {
    console.log(pageNumber.target.value);
    this.setState({
      page: pageNumber
    });
  };

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/forPatient" component={ForPatient} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
