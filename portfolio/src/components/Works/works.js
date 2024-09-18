import React, { useRef } from "react";
import "./works.css";
import Portfolio1 from '../../assets/home-with-login.PNG';
import Portfolio2 from '../../assets/home-page.png';
import nextBtn from '../../assets/next.png';
import backBtn from '../../assets/back.png';

const Works = () => {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.scrollBehavior = "smooth";
            const scrollAmount = direction === "next" ? 900 : -900;
            scrollContainerRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <section id="works">
            <h2 className="workstitle">My portfolio</h2>
            <span className="worksDesc">This is a demo text. You can write your own content here.</span>
            <div className="images-wrap">
                <img src={backBtn} alt="back" id="backBtn" onClick={() => handleScroll("back")} />
                <div className="worksImgs" ref={scrollContainerRef}>
                    <div>
                        <a href="https://github.com/AyoubBelhaj/Blog/tree/master"><img src={Portfolio1} className="worksImg" alt="work" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/AyoubBelhaj/-web_avance_sujet_A/tree/master">
                        <img src={Portfolio2} className="worksImg" alt="work" />
                        </a>
                    </div>
                </div>
                <img src={nextBtn} alt="next" id="nextBtn" onClick={() => handleScroll("next")} />
            </div>
        </section>
    );
}

export default Works;
