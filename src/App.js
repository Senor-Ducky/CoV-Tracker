import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/Home'

class App extends Component {

  render() {
    return(
      <Navbar>
        <Home>
          
        </Home>
      </Navbar>
      
    );
  }

}



export default App;
