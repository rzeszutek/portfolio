import React from 'react';
import './Home.css';
import logo from './images/logo.png';
import background from './images/background-x3.png';

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
                            <li><a href="#home" className="nav-item">Home</a></li>
                            <li><a href="#about" className="nav-item">About</a></li>
                            <li><a href="#service" className="nav-item">Services</a></li>
                            <li><a href="#project" className="nav-item">Projects</a></li>
                            <li><a href="#contact" className="nav-item">Contact</a></li>
                        </ul>
                    </div>
                </div>
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
