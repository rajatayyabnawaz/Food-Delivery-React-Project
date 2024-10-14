import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Feel Free To Contact Us</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271.821519352723!2d73.1722123146639!3d33.73596991685275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc180bf8c3149%3A0xfce8071e61b2e505!2sBarakahu%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1722671478788!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>
            <form action="https://formspree.io/f/xgvwkpgz" method="post" className="contact-form">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    autoComplete="off"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                <textarea
                    name="text"
                    cols="30"
                    rows="6"
                    placeholder="Your message"
                    autoComplete="off"
                    required
                ></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
