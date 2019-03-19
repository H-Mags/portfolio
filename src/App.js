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
      <script type="text/javascript">
(function(d, src, c) { var t=d.scripts[d.scripts.length - 1],s=d.createElement('script');s.id='la_x2s6df8d';s.async=true;s.src=src;s.onload=s.onreadystatechange=function(){var rs=this.readyState;if(rs&&(rs!='complete')&&(rs!='loaded')){return;}c(this);};t.parentElement.insertBefore(s,t.nextSibling);})(document,
'https://maggiela.ladesk.com/scripts/track.js',
function(e){ LiveAgent.createButton('699a6813', e); });
</script>
    

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
