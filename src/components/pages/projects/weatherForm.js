import React, { Component } from 'react';



class WeatherForm extends Component {
    render() {
      return (
        <div className="weather">
           <h1>Weather App</h1>
           <p>Enter your city to find out how's weather today.</p>
           <div>
                <form on onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City" className="formInput"/> 
                    <button className="formButton">Get weather</button>
                </form>
            </div>
            <div>
            {this.props.error && <p className="redtext">{this.props.error}</p>}
              <table className="table">
              <tr>
                <td>{this.props.city && <p>Location: {this.props.city}</p>}</td>
                <td>{this.props.temperature && <p>Temperature: {this.props.temperature} °C</p>}</td>
                <td>{this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}</td>
              </tr>
              <tr>
                <td>{this.props.country && <p>Country: {this.props.country}</p>}</td>
                <td>{this.props.description && <p>Conditions: {this.props.description}</p>}</td>
                <td>{this.props.wind && <p>Wind speed: {this.props.wind} m/s</p>}</td>
              </tr>
              



              
            </table>
                {/* {this.props.city && <p>Location: {this.props.city}</p>}
                {this.props.country && <p>Country: {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature} °C</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}%</p>}
                {this.props.wind && <p>Wind speed: {this.props.wind} m/s</p>}
                {this.props.error && <p>{this.props.error}</p>} */}

            </div>        
        </div>
        
      );
    }
}

export default WeatherForm;
