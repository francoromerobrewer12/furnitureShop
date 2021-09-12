import React,{useEffect} from 'react'
import './Section2.css'
import background from '../assets/ocean.jpg'
import surf from '../assets/surf.jpg'
import { BsArrowRight } from 'react-icons/bs';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'



function Section2() {

    
    const tl2 = gsap.timeline();
    const tl3 = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
            animation: tl2,
            trigger: ".image-section-img",
            start: "25% 30%",
            markers: false,
            id: "texto y foto"
    });

    ScrollTrigger.create({
        animation: tl3,
        trigger: ".image-section-text-wrapp",
        start: "50% 60%",
        markers: false,
        id: "surf"
});

    useEffect(() => {
        tl2.from(".section2-text-wrap", 1.5, {opacity:0, y:40})
            .from(".image-section", 1, {opacity:0, y:40}, "-=1") 

        tl3.to(".image-section", 1, { width: "100%", height: "100vh", left:0})
            .from(".image-section-text-wrapp", .5, {scaleY:0, transformOrigin: "bottom", opacity:0})
            .from(".sub-img", 1, {translateY: "70vh"}, "-=.2")
            .from("#text", .3, {opacity: 0, y:20, stagger:{ amount: .3}},"-=.2")
            .to(".btn-black", .2, {scaleX:0, transformOrigin: "right"})

    },[])

    return (
        <div className="section2-container">
            <div className="section2-text-wrap">
                <h3 className="section2-text">"Lorem ipsum do. Debitis, animi temporibus culpa laudantium iusto consequuntur nam qui? Quis, quo reiciendis laborum ex fugit expedita."</h3>
                <p className="section2-btn">SEE MORE</p>
            </div>

            <div className="image-section">
                <img src={background} alt="" className="image-section-img"/>
                <div className="image-section-text-wrapp">
                    <p id="text"className="img-section-subtittle">AMAZING LIFE</p>
                    <h2 id="text" className="img-section-tittle">Adventure Holidays</h2>
                    <p id="text" className="img-section-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, magnam. Soluta modi rerum accusamus saepe.</p>
                    <div id="text" className="img-section-btn">
                        <div className="btn-black"></div>
                        <p className="btn-text">GIVE IT A TRY!</p>
                        <BsArrowRight className="icon"/>
                    </div>
                </div>
                <div className="sub-image-wrap">
                    <div className="img-mask"></div>
                    <img src={surf} alt="" className="sub-img"/>
                </div>
            </div>

        </div>
    )
}

export default Section2
