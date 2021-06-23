import React, { Component } from 'react'; //imrc
import "./navBar.css"

class NavBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
            <div className="navbar-page">
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
         );
    }
}
 
export default NavBar;