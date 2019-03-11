import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Header} from './components/header';
// import {Node} from './components/node';
// import {Homepage} from './pages/homepage';
// import {Slider} from './components/slider';
// import {Nodepage} from './pages/nodepage';
// import {Login} from './pages/loginpage';
// import {Stats} from './pages/statisticpage';
// import {Report} from './pages/reportpage';
import { Routers } from './route';

class App extends Component {
  render() {
    return <Routers />;
  }
}

export default App;
