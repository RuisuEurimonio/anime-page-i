import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";

gsap.registerPlugin(ScrollTrigger);

const frames = 69;
const getFramesSource = (index) => {
    return `/frames/zerotwo/zerotwo_${index.toString()}.jpg`
}

const ZeroTwo = () => {

    const imgStatic = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleClickVideo = () =>{
        if (images.length === 0 || !imgRef.current) return;

    const obj = { frame: 0 };

    gsap.timeline().set("#refreshVideoRef_zerotwo",{
        display: "none"
    }).set("#pointVideoRef_zerotwo",{
        display: "block"
    }).to(obj, {
            frame: frames - 1,
            duration: 3.5,
            ease: "power1.inOut",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                imgRef.current.src = images[index].src;
            }
        }).fromTo("#pointVideoRef_zerotwo", {
            y: "100%",
        }, {
            y: "0%",
            duration: 3.5,
            ease: "power1.inOut"
        }, "<").fromTo("#pointVideoContainerRef_zerotwo",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef_zerotwo",{
            display: "none",
        }).fromTo("#pointVideoRef_zerotwo",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef_zerotwo",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef_zerotwo",{
            opacity: 0
        },{
            opacity: 1,
            duration: 0.02
        },"<")
    }

    useEffect(() => {
        gsap.to(containerRef.current, {
            backgroundColor: "rgba(7,23,51,1)",
            duration: 2.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
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
        ["#video-container_zerotwo", "#firstImages-container_zerotwo"].forEach((item, i) => {
            gsap.fromTo(item, {
                opacity: i === 0 ? "" : 1,
                filter: i === 0 ? "grayscale(100%)" : "",
            }, {
                opacity: i === 0 ? "" : 0,
                filter: i === 0 ? "grayscale(0%)" : "",
                duration: 1,
                scrollTrigger: {
                    trigger: "#firstImages-container_zerotwo",
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                }
            })

        })
    }, [])

    useEffect(()=>{
        ["#secondImages-container_zerotwo", "#video-container_zerotwo"].forEach((item, i)=>{
            gsap.fromTo(item,{
                opacity: i === 0 ? 0 : "",
                filter: i === 0 ? "" : "grayscale(0%)"
            },{
                opacity: i === 0 ? 1 : "",
                filter: i === 0 ? "" : "grayscale(100%)",
                duration: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: "#secondImages-container_zerotwo",
                    start: "top bottom",
                    end: "center bottom",
                    scrub: true,
                    markers: true
                }
            })

        })
    },[])

    useEffect(() => {
        if (!imgRef || images.length === 0) return;
        const obj = { frame: 0 }

        const tl = gsap.timeline({
            
            scrollTrigger: {
                trigger: "#image-container_zerotwo",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.set("#refreshVideoRef_zerotwo",{
        display: "none"
    }).set("#pointVideoRef_zerotwo",{
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
        }).fromTo("#pointVideoRef_zerotwo", {
            y: "100%",
            duration: 0.7
        }, {
            y: "0%",
            duration: 0.7
        }, "<")
        
        tl.fromTo("#pointVideoContainerRef_zerotwo",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef_zerotwo",{
            display: "none",
        }).fromTo("#pointVideoRef_zerotwo",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef_zerotwo",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef_zerotwo",{
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
        if(window.innerWidth < 768) return;
        const tl = gsap.timeline({
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#image-parallax_zerotwo",
                start: "top center",
                end: "bottom top",
                scrub: true,
            }
        })

        tl.to(imgStatic.current, {
            y: "-20vh",
            duration: 0.8
        }).to(imgStatic.current, {
            opacity: 0,
            duration: 0.2
        })

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [])

    return (
        <div ref={containerRef} className="bg-[rgba(7,23,51,1)]">
            <div id="image-parallax_zerotwo" className="w-full h-[140vh] overflow-y-hidden relative"
                style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <div className="h-[160vh] w-full"
                    ref={imgStatic}
                    style={{
                        backgroundImage: "url('/characters/zerotwo/zerotwo1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="w-11/12 top-1/2 absolute z-10 font-bold
                        sm:right-20 sm:w-4/12
                    ">
                        <h2 className="text-5xl text-fuchsia-400 uppercase text-right
                            md:text-7xl
                        "> Zero Two </h2>
                        <h3 className="text-2xl my-3 text-fuchsia-700 text-right
                            md:text-4xl
                        "> Si vas a matarme, hazlo después de besarme. </h3>
                        <p className="text-xl text-pink-500 text-right
                            md:text-3xl
                        ">  Arma creada para destruir, que desafió su destino por amor y descubrió su humanidad junto a su darling.</p>
                    </div>
                </div>
            </div>
            <div id="firstImages-container_zerotwo" className="flex w-11/12 mx-auto my-5 flex-col gap-5 justify-center items-center
                sm:flex-row sm:h-[90vh] md:mt-24 md:gap-16 sm:ml-auto
            ">
                <ImgZoom imgSrc="/characters/zerotwo/zerotwo2.jpg" otherClass="h-8/12" alt="zerotwo's second image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/zerotwo/zerotwo3.jpg" otherClass="h-full" alt="zerotwo's third image" ></ImgZoom>
            </div>
            <div id="image-container_zerotwo" className="h-[350vh] relative">
                <div id="video-container_zerotwo" className="sticky top-0 h-[70vh] w-full grayscale
                    sm:w-6/12 
                    md:h-[80vh] md:top-[10vh]
                ">
                    <img ref={imgRef} src={getFramesSource(1)} className="w-full h-full object-cover cursor-pointer" onClick={handleClickVideo} />

                    <span id="pointVideoContainerRef_zerotwo" className="w-5 h-32 rounded-full absolute bottom-5 right-0 mr-5 bg-gray-700 border-4 border-gray-700 flex justify-center overflow-hidden">
                        <span id="pointVideoRef_zerotwo" className="w-2.5 block h-full translate-y-[95%] bg-white rounded-full"></span>
                        <div className="hidden opacity-0 size-10 p-1.5 justify-center items-center" id="refreshVideoRef_zerotwo">
                            <img  src="/refresh.svg" className="w-full h-full" />
                        </div>
                    </span>

                    
                    
                </div>
                <p id="textVideo_zerotwo" className="sticky top-[70vh] translate-y-1/2  font-bold text-fuchsia-400 text-4xl ml-auto
                    sm:mb-[35vh] sm:right-6 sm:mr-20 sm:w-1/3
                    md:text-7xl
                "> "Quería convertirme en humana... para poder estar contigo." </p>
            </div>
            <div id="secondImages-container_zerotwo" className="flex  flex-col w-10/12 mx-auto mt-24 gap-16 justify-center items-center h-[90vh] pb-5
                md:flex-row sm:pb-0
            ">
                <ImgZoom imgSrc="/characters/zerotwo/zerotwo4.jpg" otherClass="h-11/12" alt="zerotwo's fourth image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/zerotwo/zerotwo5.jpg" otherClass="h-8/12" alt="zerotwo's fifth image" ></ImgZoom>
            </div>
            <div className="w-10/12 mx-auto font-bold pb-10
                md:-translate-y-[30%] md:w-4/12 md:ml-auto md:mr-[10vw] 
            ">
                <h2 className="text-2xl text-fuchsia-400
                    md:text-4xl
                ">Hielo que aprendió a sentir</h2>
                <p className="text-xl text-fuchsia-200
                    md:text-2xl
                ">Guerrera creada para destruir que se eleva al cosmos, se sacrifica por amor y renace junto a Hiro, demostrando que su vínculo trasciende la muerte, el tiempo y el universo.</p>
            </div>
        </div>
    )
}

export default ZeroTwo;