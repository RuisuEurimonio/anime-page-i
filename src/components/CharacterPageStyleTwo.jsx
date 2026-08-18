import { useEffect, useRef, useState } from "react";

import { gsap, ScrollTrigger } from "../scripts/gsapConfig";
import ImgZoom from "./ImgZoom";

gsap.registerPlugin(ScrollTrigger);

const CharacterPageStyleTwo = ({keyNameCharacter, framesVideo, fullName ,mainQuote, videoQuote, EndQuote, historyStart, historyEnd, bgColorPage = "rgba(0,0,0,0 )", toColorPage = "rgba(7,23,51,1)", activeSecondStyle = false}) => {

    const imgStatic = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [images, setImages] = useState([]);
    const frames = framesVideo
    
    const getFramesSource = (index) => {
        return `${import.meta.env.BASE_URL}/frames/${keyNameCharacter}/${keyNameCharacter}_${index.toString()}.jpg`
    }

    const handleClickVideo = () =>{
        if (images.length === 0 || !imgRef.current) return;

    const obj = { frame: 0 };

    gsap.timeline().set(`#refreshVideoRef_${keyNameCharacter}`,{
        display: "none"
    }).set(`#pointVideoRef_${keyNameCharacter}`,{
        display: "block"
    }).to(obj, {
            frame: frames - 1,
            duration: 3.5,
            ease: "power1.inOut",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                imgRef.current.src = images[index].src;
            }
        }).fromTo(`#pointVideoRef_${keyNameCharacter}`, {
            y: "100%",
        }, {
            y: "0%",
            duration: 3.5,
            ease: "power1.inOut"
        }, "<").fromTo(`#pointVideoContainerRef_${keyNameCharacter}`,{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set(`#pointVideoRef_${keyNameCharacter}`,{
            display: "none",
        }).fromTo(`#pointVideoRef_${keyNameCharacter}`,{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set(`#refreshVideoRef_${keyNameCharacter}`,{
            display: "flex",
        })
        .fromTo(`#refreshVideoRef_${keyNameCharacter}`,{
            opacity: 0
        },{
            opacity: 1,
            duration: 0.02
        },"<")
    }

    useEffect(() => {
        gsap.to(containerRef.current, {
            backgroundColor: toColorPage,
            duration: 2.5,
            ease: "expo.in",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=1000",
                scrub: true
            }
        })
    }, [])

    useEffect(() => {
        let imgs = []
        for (let i = 1; i <= frames; i++) {
            let imgSrc = getFramesSource(i);
            let newImg = new Image();
            newImg.src = imgSrc
            imgs.push(newImg);
        }

        setImages(imgs);
    }, [])

    useEffect(() => {
        [`#video-container_${keyNameCharacter}`, `#firstImages-container_${keyNameCharacter}`].forEach((item, i) => {
            gsap.fromTo(item, {
                opacity: i === 0 ? "" : 1,
                filter: i === 0 ? "grayscale(100%)" : "",
            }, {
                opacity: i === 0 ? "" : 0,
                filter: i === 0 ? "grayscale(0%)" : "",
                duration: 1,
                scrollTrigger: {
                    trigger: `#firstImages-container_${keyNameCharacter}`,
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                }
            })

        })
    }, [])

    useEffect(()=>{
        if(window.localStorage.getItem("reduceAnimation") === "false") return;

        [`#secondImages-container_${keyNameCharacter}`, `#video-container_${keyNameCharacter}`].forEach((item, i)=>{
            gsap.fromTo(item,{
                opacity: i === 0 ? 0 : "",
                filter: i === 0 ? "" : "grayscale(0%)"
            },{
                opacity: i === 0 ? 1 : "",
                filter: i === 0 ? "" : "grayscale(100%)",
                duration: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: `#secondImages-container_${keyNameCharacter}`,
                    start: "top bottom",
                    end: "center bottom",
                    scrub: true
                }
            })

        })
    },[])

    useEffect(() => {
        if (!imgRef || images.length === 0) return;
        const obj = { frame: 0 }

        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger: `#image-container_${keyNameCharacter}`,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.set(`#refreshVideoRef_${keyNameCharacter}`,{
        display: "none"
    }).set(`#pointVideoRef_${keyNameCharacter}`,{
        display: "block"
    })

        tl.to(obj, {
            frame: frames - 1,
            duration: 0.7,
            ease: "none",
            onUpdate: () => {
                const index = Math.floor(obj.frame)
                if (imgRef.current) {
                    imgRef.current.src = images[index].src;
                }
            }
        }).fromTo(`#pointVideoRef_${keyNameCharacter}`, {
            y: "100%",
            duration: 0.7
        }, {
            y: "0%",
            duration: 0.7
        }, "<")
        
        tl.fromTo(`#pointVideoContainerRef_${keyNameCharacter}`,{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set(`#pointVideoRef_${keyNameCharacter}`,{
            display: "none",
        }).fromTo(`#pointVideoRef_${keyNameCharacter}`,{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set(`#refreshVideoRef_${keyNameCharacter}`,{
            display: "flex",
        })
        .fromTo(`#refreshVideoRef_${keyNameCharacter}`,{
            opacity: 0
        },{
            opacity: 1,
            duration: 0.02
        },"<")

        return () => {
            tl.scrollTrigger.kill();
            tl.kill();
        }
    }, [images])

    useEffect(() => {
        if( window.localStorage.getItem("reduceAnimation") === "true" ) return;
        if(window.innerWidth < 768) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `#image-parallax_${keyNameCharacter}`,
                start: "top bottom",
                end: "bottom top",
                scrub: true,    
            }
        })

        tl.to(imgStatic.current, {
            y: "-20vh",
            ease: "none",
            duration: 0.9
        }).to(imgStatic.current, {
            opacity: 0,
            duration: 0.1
        },">    ")

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [])

    return (
        <div ref={containerRef} style={{ backgroundColor: bgColorPage}} id={keyNameCharacter+"_container"}>
            <div id={`image-parallax_${keyNameCharacter}`} className="w-full h-[140vh] overflow-y-hidden relative"
                style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <div className="h-[160vh] w-full"
                    ref={imgStatic}
                    style={{
                        backgroundImage: `url('${import.meta.env.BASE_URL}characters/${keyNameCharacter}/${keyNameCharacter}1.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className={`w-11/12 top-1/3 absolute z-10 font-bold right-0 left-0
                        ${activeSecondStyle ? "sm:left-10 sm:right-auto" : "sm:right-10 sm:left-auto"} sm:w-5/12
                    `}>
                        <h2 className={`text-5xl ${activeSecondStyle ? "text-left text-fuchsia-800" : "text-right text-fuchsia-400"} uppercase  drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                            md:text-7xl
                        `}> {fullName} </h2>
                        <h3 className={`text-2xl my-3 ${activeSecondStyle ? "text-left text-pink-600" : "text-right text-fuchsia-700"}  drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                            md:text-4xl
                        `}> «{mainQuote}» </h3>
                        <p className={`text-xl ${activeSecondStyle ? "text-left text-rose-700" : "text-right text-pink-500"} drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                            md:text-3xl
                        `}> {historyStart} </p>
                    </div>
                </div>
            </div>
            <div id={`firstImages-container_${keyNameCharacter}`} className="flex w-11/12 mx-auto my-5 flex-col gap-5 justify-center items-center
                sm:flex-row sm:h-[90vh] md:mt-24 md:gap-16 sm:ml-auto
            ">
                <ImgZoom imgSrc={`/characters/${keyNameCharacter}/${keyNameCharacter}2.jpg`} otherClass="h-8/12" alt={`${keyNameCharacter}'s second image`} ></ImgZoom>
                <ImgZoom imgSrc={`/characters/${keyNameCharacter}/${keyNameCharacter}3.jpg`}  alt={`${keyNameCharacter}'s third image`} ></ImgZoom>
            </div>
            <div id={`image-container_${keyNameCharacter}`} className="h-[350vh] relative">
                <div id={`video-container_${keyNameCharacter}`} className="sticky top-0 h-[70vh] w-full grayscale
                    sm:w-6/12 
                    md:h-screen md:mt-20
                ">
                    <img ref={imgRef} src={getFramesSource(1)} alt={"Sequence of images from the anime " +keyNameCharacter} loading="lazy"  className="w-full h-full object-cover cursor-pointer" onClick={handleClickVideo} />

                    <span id={`pointVideoContainerRef_${keyNameCharacter}`} className="w-5 h-32 rounded-full absolute bottom-5 right-0 mr-5 bg-gray-700 border-4 border-gray-700 flex justify-center overflow-hidden">
                        <span id={`pointVideoRef_${keyNameCharacter}`} className="w-2.5 block h-full translate-y-[95%] bg-white rounded-full"></span>
                        <div className="hidden opacity-0 size-10 p-1.5 justify-center items-center" id={`refreshVideoRef_${keyNameCharacter}`}>
                            <img src={`${import.meta.env.BASE_URL}/refresh.svg`} className="w-full h-full" loading="lazy" decoding="async" alt="Refresh video icon" />
                        </div>
                    </span>

                    
                    
                </div>
                <p id={`textVideo_${keyNameCharacter}`} className="sticky top-[80vh] w-11/12 font-bold text-fuchsia-400 text-xl ml-auto
                    sm:mb-[35vh] sm:right-6 sm:mr-20 sm:text-3xl sm:w-4/12
                    md:text-5xl md:top-[50vh]
                    xl:text-6xl
                "> «{videoQuote}» </p>
            </div>
            <div id={`secondImages-container_${keyNameCharacter}`} className="flex  flex-col w-10/12 mx-auto mt-24 gap-16 justify-center items-center h-[90vh] pb-5
                md:flex-row sm:pb-0
            ">
                <ImgZoom imgSrc={`/characters/${keyNameCharacter}/${keyNameCharacter}4.jpg`} otherClass="h-11/12" alt={`${keyNameCharacter}'s fourth image`} ></ImgZoom>
                <ImgZoom imgSrc={`/characters/${keyNameCharacter}/${keyNameCharacter}5.jpg`} otherClass="h-8/12" alt={`${keyNameCharacter}'s fifth image`} ></ImgZoom>
            </div>
            <div className="w-10/12 mx-auto font-bold pb-10
                md:-translate-y-[30%] md:w-4/12 md:ml-auto md:mr-[10vw] md:mt-10
            ">
                <h2 className="text-2xl text-fuchsia-400 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                    md:text-4xl
                "> «{EndQuote}» </h2>
                <p className="text-xl text-fuchsia-200 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                    md:text-2xl
                "> {historyEnd} </p>
            </div>
        </div>
    )
}

export default CharacterPageStyleTwo;
