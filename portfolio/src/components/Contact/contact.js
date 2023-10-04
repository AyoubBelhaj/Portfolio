import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import insagramIcon from "../../assets/instagram.png";

const Contact = () => {
    return(
       <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientsDesc">this a demo text this a demo textthis a demo textthis a demo textthis a demo textthis a demo textthis a demo text </p>
                <div className="clientImgs">
                    <img src={walmart} alt="clientimg" className="clientImg"/>
                    <img src={adobe} alt="clientimg" className="clientImg"/>
                    <img src={microsoft} alt="clientimg" className="clientImg"/>
                    <img src={facebook} alt="clientimg" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name"
                    placeholder="Your Name"/>
                    <input type="email" className="email"
                    placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="link" className="link"/>
                        <img src={twitterIcon} alt="link" className="link"/>
                        <img src={youtubeIcon} alt="link" className="link"/>
                        <img src={insagramIcon} alt="link" className="link"/>
                    </div>
                </form>
            </div>
       </section>
    );
}

export default Contact;