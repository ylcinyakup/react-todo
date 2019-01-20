import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import FilmsPage from './component/pages/FilmsPage';
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/" >Ana Sayfa</Link>
        <Link to="/films" >Filmler</Link>
        <Link to="/login" >Giriş</Link>

        <Route path="/" exact component={HomePage}></Route>
        <Route path="/films" component={FilmsPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
      </div>
    );
  }
}

export default App;
