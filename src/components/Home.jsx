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
    const svgRef = useRef(null);
    const whiteSvgRef = useRef(null);
    const imageIcon = useRef(null);
    const textInfoRef = useRef(null);
    const referencesRef = useRef(null);

    useEffect(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#wrapper-container",
                start: "top top",
                end: "+=1200",
                scrub: 0.3,
                pin: true,
                markers: true
            }
        })

        const firstPartTime = 0.15
        const secondPartTime = 0.70
        const thirdPartTime = 0.15;
        
        tl.to(textRef.current, {
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: firstPartTime
        }).to(iconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: firstPartTime
        }, "<").to(downIconRef.current,{
            scale: 0.8,
            opacity: 0,
            ease: "Power1.out",
            duration: firstPartTime
        }, "<").to(backgroundRef.current,{
            scale: 1,
            duration: firstPartTime
        }, "<").to(characterRef.current,{
            scale: 1,
            duration: firstPartTime
        },"<")
        
        tl.set(textChildRef.current,{
            fontSize: 10000,
            attr: {
                y: "175%",
            }
        }).set(whiteSvgRef.current,{
            fontSize: 10000,
            attr: {
                y: "175%",
            }
        })
        .to(maskContainerRef.current,{
            pointerEvents: "auto",
            display: "block",
        }, "<")

        tl.to(textChildRef.current, {
            fontSize: window.innerWidth > 768 ? "60" : "48",
            attr: {
                y: window.innerWidth > 768 ? "25%" : "28%",
                },
            ease: "expo.out",
            duration: secondPartTime
        }).to(whiteSvgRef.current, {
            fontSize: window.innerWidth > 768 ? "60" : "48",
            attr: {
                y: window.innerWidth > 768 ? "25%" : "28%",
                },
            ease: "expo.out",
            duration: secondPartTime
        },"<").to(svgRef.current,{
            opacity: 0,
            duration: secondPartTime + 0.05,
            ease: "power1.inOut"
        },"<").to(imageIcon.current, {
            opacity: 1,
            delay: 0.5,
            duration: 0.5
        },"<").to(textInfoRef.current,{
            opacity: 1,

        }).to(referencesRef.current,{
            opacity: 1
        })

        const scaleValue = 0.9

        tl.to(whiteSvgRef.current,{
            scale: scaleValue
        }).to(imageIcon.current,{
            scale: scaleValue
        },"<").to(textInfoRef.current,{
            scale: scaleValue
        },"<").to(referencesRef.current,{
            scale: scaleValue
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
                <TextMask client:load textRef={textChildRef} svgRef={svgRef} whiteSvgRef={whiteSvgRef} />
                <div className="absolute w-full h-screen top-0">
                    <img src="/iconAnime.png" ref={imageIcon} className="size-72 absolute z-5 top-0 left-0 right-0 m-auto translate-y-[12vh] opacity-0" />
                </div>
                <div className="absolute top-0 text-center z-5 mx-auto right-0 left-0 translate-y-[50vh]">
                    <h2 ref={textInfoRef} className="text-8xl font-bold uppercase bg-[radial-gradient(circle,rgba(185,0,209,1)_0%,rgba(122,0,122,1)_57%,rgba(51,0,51,1)_99%)] bg-clip-text text-transparent opacity-0"> Disponible <br/> en todos los idiomas <br/> y generos. </h2>
                    <ul ref={referencesRef} className="text-gray-100 font-bold flex gap-5 justify-center text-4xl mt-7 uppercase opacity-0">
                        <li> Online </li>
                        <li> Dvd </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;