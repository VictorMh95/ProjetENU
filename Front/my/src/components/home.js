import React from 'react';

import  './components_css/home.css'
import Navbar from './navbar.js'
import Profile from './profile.js'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    
    render() {
        return(
        <div>
            <header>
                <p>image</p>
            </header>
            <nav>
            <Navbar/>
            </nav>
            <div className="body">
                <div className="profile-box">
                    <Profile/>
                </div>
            </div>
        </div>
            
  );
    }
}

export default HomePage;




