import './App.css';

import React, { Component } from 'react'
import News from './Components/News';
import NavBar from './Components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <NavBar/>
        <News/>

      </div>
    )
  }
}
