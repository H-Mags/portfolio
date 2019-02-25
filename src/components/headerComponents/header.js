import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from './logo-settings.png';




class Header extends Component {

  constructor(){
    super();
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };
   
   showDropdownMenu(e) {
       e.preventDefault();
       this.setState({ displayMenu: true }, () => {
       document.addEventListener('click', this.hideDropdownMenu);
       });
     }
   
     hideDropdownMenu() {
       this.setState({ displayMenu: false }, () => {
         document.removeEventListener('click', this.hideDropdownMenu);
       });
   
     }
   

  render() {
    return (
      <header>

        <nav>
          <ul>
              <li className="first">
                <Link to="/">About</Link>
              </li>
              <li>
              <Link to="/projects">Projects</Link>
              </li>
              <li className="last">
              <Link to="/contact">Contact</Link>
              </li>
          </ul>  
        </nav>
        <div className="dropdown" style = {{background:""}} >
        <div className = "button" onClick={this.showDropdownMenu}>
          <img src={logo} alt="Settings" className="logo" style = {{float:"right"}}/>
          { this.state.displayMenu ? (
             <ul className="drop">
             <li><button>Dark/Light mode (soon)</button></li>
             <li><button>Delete cache (soon)</button></li>
              </ul>
            ):
            (
             null
            )
            }
        </div>
        </div>

        
      
        

      </header>
    );
  }
}

export default Header;
