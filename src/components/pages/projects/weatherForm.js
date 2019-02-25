import React, { Component } from 'react';



class WeatherForm extends Component {
    render() {
      return (
        <div className="weather">
           <h1>Weather App</h1>
           <p>Enter your city to find out how's weather today.</p>
           <div>
                <form on onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City" /> 
                    <button>Get Weather</button>
                </form>
            </div>
            <div>
                {this.props.city && <p>Location: {this.props.city}</p>}
                {this.props.country && <p>Country: {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.error && <p>{this.props.error}</p>}

            </div>        
        </div>
        
      );
    }
}

export default WeatherForm;
