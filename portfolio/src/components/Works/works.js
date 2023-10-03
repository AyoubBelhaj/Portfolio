import React from "react";
import "./works.css";
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
    return(
       <section id="works">
            <h2 className="workstitle">My portfolio</h2>
            <span className="worksDesc">this a demo text this a demo text this a demo text this a demo text this a demo text this a demo text this a demo text this a demo text this a demo text this a demo text</span>
            <div className="worksImgs">
                <img src={Portfolio1} className="worksImg" alt=" work"/>
                <img src={Portfolio2} className="worksImg" alt=" work"/>
                <img src={Portfolio3} className="worksImg" alt=" work"/>
                <img src={Portfolio4} className="worksImg" alt=" work"/>
                <img src={Portfolio5} className="worksImg" alt=" work"/>
                <img src={Portfolio6} className="worksImg" alt=" work"/>
            </div>
            <button className="workBtn">See More</button>
       </section>
    );
}

export default Works;