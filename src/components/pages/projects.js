import React, { Component } from 'react';
import Weather from './projects/weather';



class Projects extends Component {

  render() {
    return (
        <div className = "container-fluid">
          <Weather />
          <div>
          <hr></hr>
            More coming soon.
          </div>
        </div>
    );
  }
}

export default Projects;
