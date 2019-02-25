import React, { Component } from 'react';

class homePage extends Component {
  render() {
    return (
      <div className="container-fluid home">
        <p>Welcome to my portfolio website.</p>
        <p>My name is Magdalena Hlohovska and I built this website with</p>
        <ul className="homeList">
          <li>React.js</li>
          <li>SASS</li>
          <li>Node.js</li>
          <li>Git</li>
        </ul>
      </div>
    );
  }
}

export default homePage;
