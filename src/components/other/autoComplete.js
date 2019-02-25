import React, { Component } from 'react';

const API_KEY = 'be2016239f3b56c2e9af46acba41d4ed';

class autoComplete extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      results: data.city
    })

  }
 

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } 
    })
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default autoComplete