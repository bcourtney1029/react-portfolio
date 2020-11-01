import React from 'react'
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contacts">
            <h1>My Contact Information:</h1>
            <p>
                My Email: 
                <a href="mailto:bcourtney1029@gmail.com">bcourtney1029@gmail.com</a>
            </p>
            <p className="bottom">
                My Phone:
                <a href="tel:+9132408292">Phone: 913 240 8292</a>
            </p>
        </div>
    )
}

export default ContactPage
