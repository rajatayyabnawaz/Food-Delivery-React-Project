import React from "react";
import './footer.css'; 
import imgg from './assetss/twitter_icon.png';
import imgg1 from './assetss/linkedin_icon.png';
import imgg2 from './assetss/facebook_icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="about">
                <h1>Tomato.</h1>
                <p>Lorem Get ready to dive into a whole new world of freelancing with Upwork at your back and a globeful of clients in your future. Now that your profile is live and you’re ready to bid on projects, take a look inside our toolkit packed resources to add new fuel to your freelance fire.</p>
                <div className="social-icons">
                    <img src={imgg} alt="Twitter" />
                    <img src={imgg1} alt="LinkedIn" />
                    <img src={imgg2} alt="Facebook" />
                </div>
            </div>
            <div className="links">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="contacts">
                <h3>Get In Touch</h3>
                <ul>
                    <li>+92 3321577920</li>
                    <li>tayyab@gmail.com</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
