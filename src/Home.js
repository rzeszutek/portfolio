import React from 'react';
import './Home.css';
import logo from "./images/logo.png";

function Home() {
    return (
        <div className="home">
            <div className="home-bg">
                <div className="header">
                    <div>
                        <img className="logo" src={logo} alt="" ></img>
                    </div>
                    <div className="navigation">
                        <ul className="navbar">
                            <li href="#Home"><a className="nav-item">Home</a></li>
                            <li href="#About"><a className="nav-item">About</a></li>
                            <li href="#Services"><a className="nav-item">Services</a></li>
                            <li href="#Blog"><a className="nav-item">Blog</a></li>
                            <li href="#Contact"><a className="nav-item">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* Home Content */}
                <div className="container">
                    <div className="home-content">
                        <h1 className="home-header">Welcome</h1>
                        <h2 className="home-text">I'm Rafał Rzeszutek</h2>
                        <h3 className="home-text-bottom">Aspiring Frontend Developer</h3>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Home;
