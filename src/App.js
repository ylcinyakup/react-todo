import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import FilmsPage from './component/pages/FilmsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/" >Ana Sayfa</Link>
        <Link to="/films" >Films</Link>

        <Route path="/" exact ></Route>
        <Route path="/films" component={FilmsPage}></Route>
      </div>
    );
  }
}

export default App;
