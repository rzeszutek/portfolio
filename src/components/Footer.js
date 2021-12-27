import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-content-wrapper">
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3>Portfolio</h3>
                        <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry.
                        Donec venenatis.
                        </p>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3>Kontakt</h3>
                        <p>rk.rzeszutek@gmail.com</p>
                        <p>692 721 022</p>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3>Repozytorium</h3>
                        <a href="https://github.com/rzeszutek/portfolio">https://github.com/rzeszutek/portfolio</a>
                        <br></br><br></br>
                    </div>
                    <div className="footer-col large-25 small-50 tiny-100 ta-l flt">
                        <h3>Języki</h3>
                        <p>English</p>
                        <p>Español</p>
                        <p>日本語版</p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </footer>
            <div className="copyrights">© 2021 Copyright Rafał Rzeszutek</div>
        </div>
    )
}

export default Footer;
