import React, { Component } from 'react';
import WeatherForm from './weatherForm';

const API_KEY = 'be2016239f3b56c2e9af46acba41d4ed';


class Weather extends Component {

  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    humidity: undefined,
    wind: undefined,
    error: undefined  
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    if (data.cod === '404') {
      this.setState({
        error: 'City not found.'
      });
    } else if (city) {     
    //console.log(data);
    this.setState({
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      error: ""
    });
   } else {
    this.setState({
      city: undefined,
      country: undefined,
      temperature: undefined,
      description: undefined,
      humidity: undefined,
      wind: undefined,
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
            description={this.state.description}
            humidity={this.state.humidity}
            wind={this.state.wind}
            error={this.state.error}
           />
           
        </div>
        
      );
    }
}

export default Weather;
