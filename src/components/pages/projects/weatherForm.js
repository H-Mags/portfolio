import React, { Component } from 'react';



class WeatherForm extends Component {
    render() {
      return (
        <div className="weather">
           <h1>Weather App</h1>
           <p>Enter a city to find out how is weather today.</p>
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
                <td>{this.props.city && <div>Location: <p>{this.props.city}</p></div>}</td>
                <td>{this.props.temperature && <div>Temperature:  <p>{this.props.temperature} °C</p></div>}</td>
                <td>{this.props.humidity && <div>Humidity:  <p>{this.props.humidity}%</p></div>}</td>
              </tr>
              <tr>
                <td>{this.props.country && <div>Country:  <p>{this.props.country}</p></div>}</td>
                <td>{this.props.description && <div>Conditions:  <p>{this.props.description}</p></div>}</td>
                <td>{this.props.wind && <div>Wind speed:  <p>{this.props.wind} m/s</p></div>}</td>
              </tr>
              
            </table>

            </div>        
        </div>
        
      );
    }
}

export default WeatherForm;
