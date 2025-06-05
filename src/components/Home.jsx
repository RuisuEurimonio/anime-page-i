import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const Home =  () => {

    const textRef = useRef(null);
    const iconRef = useRef(null);
    const downIconRef = useRef(null);
    const backgroundRef = useRef(null);
    const characterRef = useRef(null);

    useEffect(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#main-container",
                start: "center center",
                end: "+=200",
                scrub: true,
                 pin: true,                      
                markers: true    
            }
        })

        tl.to(textRef.current, {
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out"
        }).to(iconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out"
        }, "<").to(downIconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out"
        }, "<").to(backgroundRef.current,{
            scale: 1
        }, "<").to(characterRef.current,{
            scale: 1
        },"<")

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    },[])

    return (
        <div id="main-container" className="w-full h-screen relative overflow-hidden">
            <img ref={backgroundRef} src="/background.jpg" alt="background image" className="object-cover w-full h-full z-[5] scale-125" />
            <h2 ref={textRef} className="z-10 absolute top-10 left-0 right-0 mx-auto text-center uppercase font-extrabold text-white text-9xl"> Anime <br /> Page </h2>
            <img ref={characterRef} src="/character.png" alt="background image" className="absolute left-0 top-0 w-full h-full object-cover z-[15] scale-125" />
            <img ref={iconRef} src="/play.svg" className="z-[15] absolute top-0 right-0 left-0 bottom-0 m-auto size-32 bg-white p-8 rounded-full duration-200 cursor-pointer hover:scale-105" />
            <img ref={downIconRef} src="down.svg" className="z-[15] absolute rotate-90 bottom-4 w-16 left-0 right-0 m-auto icon_secondary" />
        </div>
    )
}

export default Home;