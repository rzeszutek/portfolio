import React from 'react';
import './Footer.css';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content-wrapper">
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3 className="footer-header">Portfolio</h3>
                        <p className="footer-text">Lorem Ipsum is simply dummy text<br></br> of theprinting and typesetting industry.<br></br>
                        Donec venenatis.
                        </p>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3 className="footer-header">Kontakt</h3>
                        <p className="footer-text">rk.rzeszutek@gmail.com</p>
                        <p className="footer-text">692 721 022</p>
                        <a className="footer-text" href="https://www.linkedin.com/in/rafał-rzeszutek-298b0b229/"><BsLinkedin className="footer-icon"></BsLinkedin></a>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3 className="footer-header">Projekt</h3>
                        <a className="footer-text" href="https://github.com/rzeszutek/portfolio">Portfolio React.js</a>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3 className="footer-header">Języki</h3>
                        <p className="footer-text">English</p>
                        <p className="footer-text">Español</p>
                        <p className="footer-text">日本語版</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </footer>
            <div className="copyrights">© 2021 Copyright Rafał Rzeszutek</div>
        </div>
    )
}

export default Footer;
