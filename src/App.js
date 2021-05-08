import React, { Component } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import Body from './components/body/body'
import {fetchData} from './api/index'

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const data = await fetchData()
    this.setState({data: data})
  }

  render() {
    return(
      <div>
        <Navbar/>
        <div>
          <Body data={this.state.data}/>
        </div>
      </div>
        
      
      
    );
  }

}



export default App;
