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
    const lastMaskRef = useRef(null)

    useEffect(()=>{

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#wrapper-container",
                start: "top top",
                end: "+=2000",
                scrub: 0.3,
                pin: true,
                markers: true
            }
        })

        const firstPartTime = 0.15
        const secondPartTime = 0.70
        
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
        }).set(lastMaskRef.current,{
            opacity: 1
        })
        .set(maskContainerRef.current,{
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
        },"<")


        const scaleValue = 0.9

        tl.to(whiteSvgRef.current,{
            fontSize: window.innerWidth > 768 ? "50" : "38"
        }).to(imageIcon.current,{
            scale: scaleValue
        },"<").to(textInfoRef.current,{
            scale: scaleValue
        },"<").to(referencesRef.current,{
            scale: scaleValue
        },"<")

        tl.to(lastMaskRef.current,{
            y: "-240vh",
        }, tl.totalDuration() * 0.55)
        .set(lastMaskRef.current,{
            zIndex: 45
        })
        .to(lastMaskRef.current,{
            y: "-400vh"
        },">+1")

        ScrollTrigger.refresh();
    },[])

    return (
        <div id="wrapper-container" className="w-full h-screen relative overflow-hidden">
            <div id="main-container" className="w-full h-screen relative overflow-hidden">
                <img ref={backgroundRef} src="/background.jpg" alt="background image" className="object-cover w-full h-full z-0 scale-125" />
                <h2 ref={textRef} className="z-0 absolute top-10 left-0 right-0 mx-auto text-center uppercase font-extrabold text-white translate-y-36 text-5xl
                    lg:text-9xl lg:translate-y-0
                "> Anime <br /> Page </h2>
                <img ref={characterRef} src="/character.png" alt="background image" className="absolute left-0 top-0 w-full h-full object-cover z-5 scale-125" />
                <img ref={iconRef} src="/play.svg" className="z-0 absolute top-0 right-0 left-0 bottom-0 m-auto size-16 bg-white p-3 rounded-full duration-200 cursor-pointer hover:scale-105
                    md:p-8 md:size-32
                " />
                <img ref={downIconRef} src="down.svg" className="z-5 absolute rotate-90 bottom-4 w-16 left-0 right-0 m-auto icon_secondary" />
            </div>
            <div id="mask-container" ref={maskContainerRef} className="z-10 absolute top-0 left-0 w-full h-screen hidden pointer-events-none bg-[rgb(18,3,20)]">
                <TextMask client:load textRef={textChildRef} svgRef={svgRef} whiteSvgRef={whiteSvgRef} />
                <div className="absolute w-full h-screen top-0 z-10">
                    <img src="/iconAnime.png" ref={imageIcon} className="size-72 absolute z-20 top-0 left-0 right-0 m-auto translate-y-[12vh]" />
                </div>
                <div className="z-20 absolute top-0 text-center mx-auto right-0 left-0 translate-y-[50vh]">
                    <h2 ref={textInfoRef} className="text-8xl font-bold uppercase bg-[radial-gradient(circle,rgba(185,0,209,1)_0%,rgba(122,0,122,1)_57%,rgba(51,0,51,1)_99%)] bg-clip-text text-transparent"> Disponible <br/> en todos los idiomas <br/> y generos. </h2>
                    <ul ref={referencesRef} className="text-gray-100 font-bold flex gap-5 justify-center text-4xl mt-7 uppercase">
                        <li> Online </li>
                        <li> Dvd </li>
                    </ul>
                </div>
                <div ref={lastMaskRef} className="opacity-0 z-25 h-[500vh] top-0 w-full absolute bg-[radial-gradient(circle,rgba(185,0,209,0)_0%,rgba(13,3,20,1)_50%,rgba(18,3,20,1)_100%)]">
                </div>
            </div>
        </div>
    )
}

export default Home;