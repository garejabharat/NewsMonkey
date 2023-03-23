// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Comp from './component/Comp';

export default class App extends Component {
  render() {
    return (
      <>
      
      <Navbar/>
      <Comp />
      </>
    )
  }
}


