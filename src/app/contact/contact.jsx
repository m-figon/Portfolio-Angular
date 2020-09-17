import React from 'react'
import './contact.css';
import email from './email.png';
function contact() {
    return (
        <div className="contact">


            <div className="contact-content">
                <h2>If you want to hire me feel free to contact!</h2>
                <div className="one-line">
                    <h1>My email address is </h1>
                    <h1 id="mail">mateusz.figon97@gmail.com</h1>
                </div>
                <h1>I will respond as soon as possible</h1>
                <div className="email-picture">
                    <img alt="" src={email}></img>
                </div>
            </div>
        </div>
    )
}

export default contact
