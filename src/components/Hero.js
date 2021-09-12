import React,{useState,useEffect} from 'react'
import './Hero.css'
import video from '../assets/video.mp4'
import img from '../assets/backgroundImg.jpg'
import new1 from '../assets/new1.jpg'
import new2 from '../assets/new2.jpg'
import gsap from 'gsap';


function Hero() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            heroAnimation()
            setLoading(false)
        },3500)
    }, [])

    function heroAnimation () {
        const tl = gsap.timeline();

        tl.to(".svg-container", 2,{opacity: 0})
          .from(".up", .7, {opacity:0, y: 50})
          .from(".low", .7, {opacity:0, y:50}, "-=.5")
          .from(".hero-subtitle", 1, {opacity:0}, "-=.3")
          .from(".nav", .5, {y: -60}, "<" )
          .from(".hero-news", .5, {y:150}, "<")
          .from(".left-new .new-info", 1, {opacity:0, y: -20}, "-=.5")
          .from(".left-new .new-img", 1, {opacity:0, y: 20}, "<")
          .from(".right-new .new-info", 1, {opacity:0, y: -20}, "-=.7")
          .from(".right-new .new-img", 1, {opacity:0, y: 20}, "<")
    }
   

    return (
        <div className="hero-container">
            <div className="video-wrapp">
                <video className="backgroundVideo" src={video} autoPlay loop muted></video>
                <img src={img} alt="backgroundImg" className="backgroundImg"/>
            </div>
            <div className="svg-container">
                <svg width="234" height="234" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="po" d="M65.5083 153.5H67.0083V152V124.276H83.0938C91.7479 124.276 98.6268 122.28 103.505 118.067L103.506 118.066C108.449 113.792 110.844 107.75 110.844 100.167C110.844 92.9189 108.373 86.9761 103.375 82.4915C98.4075 78.004 91.6164 75.8516 83.1963 75.8516H55.6646H54.1646V77.3516V152V153.5H55.6646H65.5083ZM177.002 136.879L177.003 136.876C179.568 131.176 180.827 124.567 180.827 117.085V112.369C180.827 104.921 179.568 98.3293 177.003 92.6303C174.437 86.8918 170.733 82.4631 165.876 79.4167C161.064 76.3431 155.516 74.8262 149.283 74.8262C143.141 74.8262 137.626 76.3656 132.785 79.4722C127.967 82.552 124.266 86.9942 121.667 92.7282C119.068 98.4588 117.79 105.017 117.79 112.369V117.752V117.759L117.79 117.767C117.86 124.981 119.174 131.402 121.775 136.995L121.78 137.006C124.418 142.567 128.135 146.912 132.94 149.983L132.947 149.987C137.755 153.024 143.25 154.525 149.385 154.525C155.649 154.525 161.2 153.027 165.982 149.984C170.767 146.939 174.435 142.547 177.002 136.879ZM163.001 92.8107L163.004 92.8149C166.287 97.1705 168.034 103.585 168.034 112.266V117.794C167.933 126.265 166.173 132.55 162.953 136.845C159.781 141.041 155.325 143.168 149.385 143.168C143.517 143.168 139.001 140.934 135.674 136.448C132.337 131.869 130.583 125.47 130.583 117.085V111.609C130.684 103.394 132.471 97.1871 135.766 92.8149C139.057 88.4593 143.508 86.2856 149.283 86.2856C155.244 86.2856 159.754 88.471 163.001 92.8107ZM83.1963 113.227H67.0083V86.9521H83.7443C88.3527 87.0516 91.7991 88.349 94.2621 90.6918C96.722 93.0317 98 96.1697 98 100.269C98 104.636 96.7063 107.77 94.302 109.912C91.8672 112.048 88.2415 113.227 83.1963 113.227Z" stroke="white" stroke-width="3"/>
                    <path className="circle" d="M117 225.5C176.923 225.5 225.5 176.923 225.5 117C225.5 57.0771 176.923 8.5 117 8.5C57.0771 8.5 8.5 57.0771 8.5 117C8.5 176.923 57.0771 225.5 117 225.5ZM232.5 117C232.5 180.789 180.789 232.5 117 232.5C53.2111 232.5 1.5 180.789 1.5 117C1.5 53.2111 53.2111 1.5 117 1.5C180.789 1.5 232.5 53.2111 232.5 117Z" stroke="white" stroke-width="3"/>
                </svg>
            </div>
            
            <nav className={loading ? "nav" : "nav ready"}>
                <div className="nav-sector-izq">
                    <div className="logo-wrap">
                        <svg className="nav-logo" width="234" height="234" viewBox="0 0 234 234" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path className="po" d="M65.5083 153.5H67.0083V152V124.276H83.0938C91.7479 124.276 98.6268 122.28 103.505 118.067L103.506 118.066C108.449 113.792 110.844 107.75 110.844 100.167C110.844 92.9189 108.373 86.9761 103.375 82.4915C98.4075 78.004 91.6164 75.8516 83.1963 75.8516H55.6646H54.1646V77.3516V152V153.5H55.6646H65.5083ZM177.002 136.879L177.003 136.876C179.568 131.176 180.827 124.567 180.827 117.085V112.369C180.827 104.921 179.568 98.3293 177.003 92.6303C174.437 86.8918 170.733 82.4631 165.876 79.4167C161.064 76.3431 155.516 74.8262 149.283 74.8262C143.141 74.8262 137.626 76.3656 132.785 79.4722C127.967 82.552 124.266 86.9942 121.667 92.7282C119.068 98.4588 117.79 105.017 117.79 112.369V117.752V117.759L117.79 117.767C117.86 124.981 119.174 131.402 121.775 136.995L121.78 137.006C124.418 142.567 128.135 146.912 132.94 149.983L132.947 149.987C137.755 153.024 143.25 154.525 149.385 154.525C155.649 154.525 161.2 153.027 165.982 149.984C170.767 146.939 174.435 142.547 177.002 136.879ZM163.001 92.8107L163.004 92.8149C166.287 97.1705 168.034 103.585 168.034 112.266V117.794C167.933 126.265 166.173 132.55 162.953 136.845C159.781 141.041 155.325 143.168 149.385 143.168C143.517 143.168 139.001 140.934 135.674 136.448C132.337 131.869 130.583 125.47 130.583 117.085V111.609C130.684 103.394 132.471 97.1871 135.766 92.8149C139.057 88.4593 143.508 86.2856 149.283 86.2856C155.244 86.2856 159.754 88.471 163.001 92.8107ZM83.1963 113.227H67.0083V86.9521H83.7443C88.3527 87.0516 91.7991 88.349 94.2621 90.6918C96.722 93.0317 98 96.1697 98 100.269C98 104.636 96.7063 107.77 94.302 109.912C91.8672 112.048 88.2415 113.227 83.1963 113.227Z" stroke="white" stroke-width="3"/>
                            <path className="circle" d="M117 225.5C176.923 225.5 225.5 176.923 225.5 117C225.5 57.0771 176.923 8.5 117 8.5C57.0771 8.5 8.5 57.0771 8.5 117C8.5 176.923 57.0771 225.5 117 225.5ZM232.5 117C232.5 180.789 180.789 232.5 117 232.5C53.2111 232.5 1.5 180.789 1.5 117C1.5 53.2111 53.2111 1.5 117 1.5C180.789 1.5 232.5 53.2111 232.5 117Z" stroke="white" stroke-width="3"/>
                        </svg>
                    </div>
                    <div className="nav-links">
                        <li className="nav-link">Experiences</li>
                        <li className="nav-link">Destinations</li>
                        <li className="nav-link">Our Story</li>
                        <li className="nav-link">Contact Us</li>
                    </div>
                </div>
                <div className="nav-sector-der">
                    <button className="start-btn">Start the journey</button>
                </div>
            </nav>

            <div className={loading ? "hero-text" : "hero-text ready"}>
                <h4 className="hero-subtitle">DISCOVER A WORLD FULL OF</h4>
                <h4 className="hero-title up">Luxury</h4>
                <h4 className="hero-title low">Travel</h4>
            </div>

            <div className={loading ? "hero-news" : "hero-news ready"}>
                <div className="left-new">
                    <div className="new-info">
                        <h3 className="new-tittle">Plan the trip<br></br> of a lifetime</h3>
                        <p className="new-text">START PLANING</p>
                        <div className="new-underline"></div>
                    </div>
                    <img src={new1} alt="" className="new-img"/>
                </div>
                <div className="right-new">
                    <div className="new-info">
                        <h3 className="new-tittle">Inspiring ideas<br></br> for next trip</h3>
                        <p className="new-text">BE INSPIRED</p>
                        
                    </div>
                    <img src={new2} alt="" className="new-img"/>
                </div>
            </div>

        </div>
    )
}

export default Hero
