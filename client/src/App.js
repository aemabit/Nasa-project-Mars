import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import MastOne from './pages/Mast/mast1'
import CuriosityHome from './pages/Curiosity/curiosityHome';
import NavOne from './pages/Nav/nav1';
import Navbar from './components/navBarSite'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/curiosity" component={CuriosityHome} />
      <Route exact path="/mast" component={MastOne} />
      <Route exact path="/nav" component={NavOne} />
    </Switch>
  </BrowserRouter>
)

export default App;
