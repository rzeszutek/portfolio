import React from 'react';
import './Project.css';
import photo1 from './images/ecommerce1.jpg';
import photo2 from './images/ecommerce2.jpg';
import photo3 from './images/ecommerce3.png';

function Project() {
    return (
        <div className="project">
            <div className="heading">
                <h1></h1>
                <p></p>
                <p></p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="column-33">
                        <div className="project-box-pointer">
                            <div className="project-box-image">
                                <div className="project-image-box">
                                    <img src={photo1} className="project-image" alt=""></img>
                                </div>
                                <div className="mask-effect">
                                </div>
                                <div className="project-meta">
                                    <h5 className="project-text">E-Commerce</h5>
                                    <h4 className="project-text">Under development.</h4>
                                    <a href="#" className="project-button">View Details</a>
                                </div>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project;
