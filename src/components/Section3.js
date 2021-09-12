import React,{useEffect} from 'react'
import './Section3.css'
import man from '../assets/man.jpg'
import beach from '../assets/beach5.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


function Section3() {

    const tl4 = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
            animation: tl4,
            trigger: ".section3-container",
            start: "75% 30%",
            markers: false,
            id: "MRG"
    });

    useEffect(() => {
        tl4.to(".banda-negra", .6, {y: "-100%"})
           .to(".banda-beige", 1, {y: "-100%"}, "-=.2")
           //.from(".sec3-img", 1, {opacity: 0, y: "100vh"},"-=.2")
           .from([".sec3-paragraph", ".sec3-btn"], 1, {color: "grey", opacity: 0, y: 40}, "<")
           .from(".bloques-negros", 1, {scaleY: 0, transformOrigin: "bottom"}, "<")
           .from(".sec3-img-text", 1, {y: "-100%"}, "+=.1")
           .from(".sec3-tittle h1", 1.2, {opacity: 0, y:40, stagger: .3}, "<")

    }, [])


    return (
        <div className="section3-container">
            <div className="banda-negra"></div>
            <div className="banda-beige"></div>
            <div className="sec3-izq">
                <div className="sec3-info-wrap">
                    <div className="sec3-tittle">
                        <h1>M</h1>
                        <h1>R</h1>
                        <h1>G</h1>
                        <h1>.</h1>
                    </div>
                    <p className="sec3-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem non vitae alias adipisci eaque. Repudiandae iusto molestiae eligendi qui?</p>
                    <div className="sec3-btn">WATCH NOW!</div>                        
                </div>
                <div className="bloques-negros">
                    <div className="bloque-negro1"></div>
                    <div className="bloque-negro2"></div>
                    <div className="bloque-negro3"></div>
                </div>
            </div>
            <div className="sec3-der">
                <img src={beach} alt="" className="sec3-img"/>
                <div className="sec3-img-text">
                    <p>Fashion</p>
                    <p>Style</p>
                    <p>Trends</p>
                </div>
            </div>
        </div>
    )
}

export default Section3
