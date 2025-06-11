import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"
import { useEffect, useRef } from "react";
import TextMask from "./TextMask.jsx";

gsap.registerPlugin(ScrollTrigger)

const Home =  () => {

    const textRef = useRef(null);
    const iconRef = useRef(null);
    const downIconRef = useRef(null);
    const backgroundRef = useRef(null);
    const characterRef = useRef(null);
    const maskContainerRef = useRef(null);
    const textChildRef = useRef(null);

    useEffect(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#wrapper-container",
                start: "top top",
                end: "+=500",
                scrub: 0.3,
                pin: true,
                markers: true
            }
        })

        
        tl.to(textRef.current, {
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: 0.10
        }).to(iconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: 0.10
        }, "<").to(downIconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: 0.10
        }, "<").to(backgroundRef.current,{
            scale: 1,
            duration: 0.10
        }, "<").to(characterRef.current,{
            scale: 1,
            duration: 0.10
        },"<")
        
        tl.set(textChildRef.current,{
            fontSize: 10000,
            attr: {
                y: "175%",
            }
        }).to(maskContainerRef.current,{
            pointerEvents: "auto",
            display: "block",
        }, "<")
        
        tl.to(textChildRef.current, {
            fontSize: window.innerWidth > 768 ? "100" : "48",
            attr: {
                y: window.innerWidth > 768 ? "15%" : "28%",
                },
            ease: "expo.out",
            duration: 0.90
        })

        ScrollTrigger.refresh();
    },[])

    return (
        <div id="wrapper-container" className="w-full h-screen relative overflow-hidden">
            <div id="main-container" className="w-full h-screen relative overflow-hidden">
                <img ref={backgroundRef} src="/background.jpg" alt="background image" className="object-cover w-full h-full z-[5] scale-125" />
                <h2 ref={textRef} className="z-10 absolute top-10 left-0 right-0 mx-auto text-center uppercase font-extrabold text-white translate-y-36 text-5xl
                    lg:text-9xl lg:translate-y-0
                "> Anime <br /> Page </h2>
                <img ref={characterRef} src="/character.png" alt="background image" className="absolute left-0 top-0 w-full h-full object-cover z-[15] scale-125" />
                <img ref={iconRef} src="/play.svg" className="z-[15] absolute top-0 right-0 left-0 bottom-0 m-auto size-16 bg-white p-3 rounded-full duration-200 cursor-pointer hover:scale-105
                    md:p-8 md:size-32
                " />
                <img ref={downIconRef} src="down.svg" className="z-[15] absolute rotate-90 bottom-4 w-16 left-0 right-0 m-auto icon_secondary" />
            </div>
            <div id="mask-container" ref={maskContainerRef} className="absolute top-0 left-0 w-full h-screen z-30 hidden pointer-events-none">
                <TextMask client:load textRef={textChildRef} />
            </div>
        </div>
    )
}

export default Home;