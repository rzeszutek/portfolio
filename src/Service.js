import React from 'react';
import './Service.css';
import { SiJavascript } from 'react-icons/si';
import { RiStackFill } from 'react-icons/ri';
import { HiOutlineCode } from 'react-icons/hi';
import { MdPeopleAlt } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';

function Service() {
    return (
        <div className="service">
            <div className="heading">
                <h1 className="heading">Services</h1>
                <p className="heading-text">Sed egestas neque sed libero auctor imperdiet. Nullam eget blandit augue, id semper massa.</p>
                <p className="heading-text">Donec luctus tincidunt nibh, sed fermentum nulla pellentesque vitae.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <SiJavascript />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <RiStackFill />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <HiOutlineCode />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <FaReact />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <MdPeopleAlt />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="column-33">
                        <div className="service-box">
                            <div className="icon">
                                <FaAngular />
                            </div>
                            <div className="service-meta">
                                <h2 className="service-heading">Business Strategy</h2>
                                <p className="service-text">Nulla facilisi.</p>
                                <p className="service-text">Suspendisse sit amet mollis lacus,</p>
                                <p className="service-text">ut accumsan purus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;
