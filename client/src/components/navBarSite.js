import React from 'react'
import { NavLink } from 'react-router-dom'
import './navBarSite.css'

class Navbar extends React.Component {

    openNavBar = () => {
        document.querySelector(".nav-container-links").classList.toggle('hidden')
    }

    render(){
        return(
            <div className="container-navbar-site">
                <div className="nav-hamburger" onClick={this.openNavBar}>
                    <div className="meat-line"></div>
                    <div className="meat-line"></div>
                    <div className="meat-line"></div>
                </div>
                <div className="nav-container-links hidden">
                    <NavLink exact to="/">
                        <div className="site-link" onClick={this.openNavBar}>HOME</div>
                    </NavLink>
                    <NavLink exact to="/curiosity">
                        <div className="site-link" onClick={this.openNavBar}>CURIOSITY</div>
                    </NavLink>
                    <NavLink exact to="/nav">
                        <div className="site-link" onClick={this.openNavBar}>NAV GALLERY</div>
                    </NavLink>
                    <NavLink exact to="/mast">
                        <div className="site-link" onClick={this.openNavBar}>MAST GALLERY</div>
                    </NavLink>
                </div>
            </div>
        )
    }

}

export default Navbar