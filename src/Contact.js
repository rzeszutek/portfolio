import React from 'react'
import './Contact.css';
import contact from './images/contact.png';

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="row">
                <div className="column-50">
                    <div className="contact-box">
                        <div className="contact-meta">
                            <h1 className="contact-header">Hire me</h1>
                            <p className="contact-text">I am available for freelance work. Contact me via phone:</p>
                            <p className="contact-text"><strong>692 721 022</strong> or email <strong>rk.rzeszutek@gmail.com</strong></p>
                        </div>
                        <div className="input-box">
                            <input type="text" className="contact-input" placeholder="Your name"></input>
                            <input type="text" className="contact-input" placeholder="Your email"></input>
                            <input type="text" className="contact-input" placeholder="Write a subject"></input>
                            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                            <button className="contact-button" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="column-50">
                    <img src={contact} alt="" className="contact-image"></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;
