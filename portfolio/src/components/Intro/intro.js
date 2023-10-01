import React from "react";
import "./intro.css";
import {Link} from 'react-scroll';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return(
       <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ayoub</span><br/> Software Engineer</span>
                <p className="introPara">Computer science engineering student who is driven <br/> to learn, collect and seek more knowledge and skills <br/> to refine his engineering journey</p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
       </section>
    )
}

export default Intro;