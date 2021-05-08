import React, { Component } from 'react'
import './App.module.css';
import Navbar from './components/navbar/navbar'
import {Cards, Chart, CountryPicker} from './components'
import {fetchData} from './api/index'
import Body from './components/body/body'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return(
      <div>
        <Navbar/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Body/>
      </div>
        
      
      
    );
  }

}



export default App;
