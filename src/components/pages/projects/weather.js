import React, { Component } from 'react';
import WeatherForm from './weatherForm';

const API_KEY = 'be2016239f3b56c2e9af46acba41d4ed';


class Weather extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    error: undefined  
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (data.cod === '404') {
      this.setState({
        error: 'City not found.'
      });
    } else if (city) {     
    console.log(data);
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      error: ""
    });
   } else {
    this.setState({
      city: undefined,
      country: undefined,
      temperature: undefined,
      error: "Enter a city."

    });
   } 
  }

    render() {
      return (
        <div className = "container-fluid">
           <WeatherForm getWeather={this.getWeather}
            city={this.state.city}
            country={this.state.country}
           temperature={this.state.temperature}
           error={this.state.error}
           />
           
        </div>
        
      );
    }
}

export default Weather;
