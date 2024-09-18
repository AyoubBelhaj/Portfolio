import React from "react";
import "./intro.css";
import bg from '../../assets/me2.jpg';
import Skills from "../Skills/skills";

const Intro = () => {


    return (
        <>
            <section id="intro">
                <div className="introContent">

                    <div className="introImage"><img src={bg} alt="porfolio" className="bg" /></div>

                    <div className="introParagraph">
                        <span className="hello">Hello,</span>
                        <br />
                        <span className="introText">I'm <span className="introName">Ayoub</span><br /> Software Engineer</span>
                        <p className="introPara">Computer science engineering student who is driven <br /> to learn, collect and seek more knowledge and skills <br /> to refine his engineering journey</p>
                    </div>
                </div>
            </section>
            <Skills />
        </>
    )
}

export default Intro;