import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/scss/default.css';
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import homePage from './components/pages/homePage';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';



class App extends Component {

  

  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path='/' component={homePage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
      
        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
