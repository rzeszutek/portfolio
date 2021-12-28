import React, { useState } from 'react';
import './About.css';
import computer from '../images/computer.png';

function About() {
    const toggleStickyHeader = () => {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
    };
    
    window.addEventListener('scroll', toggleStickyHeader);

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="column-50">
                        <img className="image" src={computer} alt=""></img>
                    </div>
                    <div className="column-50">
                        <h1 className="about-header">About Me</h1>
                        <div className="about-meta">
                            <p className="about-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Duis et augue ac nulla lacinia condimentum.
                                Nullam elementum odio a ornare varius.
                                Vestibulum rhoncus dictum sapien ut consequat. 
                                Vestibulum malesuada sed urna at laoreet. Duis vitae elit urna. 
                                Proin efficitur leo mi, at fringilla odio luctus ac.
                            </p>
                            <p className="about-text"> 
                                Donec id porttitor ante, ut varius erat. Curabitur maximus ultricies ligula. In at tortor odio. 
                                Pellentesque nec rhoncus sapien. Morbi in lectus nec turpis sagittis convallis in et nulla. 
                                Fusce id dolor nisl. Mauris ullamcorper, quam ut euismod tincidunt, mi tellus scelerisque ligula,
                                in dapibus nisi mi ac nunc. Aenean id dignissim nibh, vitae scelerisque sapien.
                            </p>
                            <div className="about-button">
                                <a href="#"><button className="button">Download CV</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
