import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";

gsap.registerPlugin(ScrollTrigger);

const frames = 41;
const getFramesSource = (index) => {
    return `/frames/hinata/hinata_${index.toString()}.jpg`
}

const Hinata = () => {

    const imgStatic = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleClickVideo = () =>{
        if (images.length === 0 || !imgRef.current) return;

    const obj = { frame: 0 };

    gsap.timeline().set("#refreshVideoRef",{
        display: "none"
    }).set("#pointVideoRef",{
        display: "block"
    }).to(obj, {
            frame: frames - 1,
            duration: 3.5,
            ease: "power1.inOut",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                imgRef.current.src = images[index].src;
            }
        }).fromTo("#pointVideoRef", {
            y: "100%",
        }, {
            y: "0%",
            duration: 3.5,
            ease: "power1.inOut"
        }, "<").fromTo("#pointVideoContainerRef",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef",{
            display: "none",
        }).fromTo("#pointVideoRef",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef",{
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
        ["#video-container_hinata", "#firstImages-container_hinata"].forEach((item, i) => {
            gsap.fromTo(item, {
                opacity: i === 0 ? "" : 1,
                filter: i === 0 ? "grayscale(100%)" : "",
            }, {
                opacity: i === 0 ? "" : 0,
                filter: i === 0 ? "grayscale(0%)" : "",
                duration: 1,
                scrollTrigger: {
                    trigger: "#firstImages-container_hinata",
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                }
            })

        })
    }, [])

    useEffect(()=>{
        ["#secondImages-container_hinata", "#video-container_hinata"].forEach((item, i)=>{
            gsap.fromTo(item,{
                opacity: i === 0 ? 0 : "",
                filter: i === 0 ? "" : "grayscale(0%)"
            },{
                opacity: i === 0 ? 1 : "",
                filter: i === 0 ? "" : "grayscale(100%)",
                duration: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: "#secondImages-container_hinata",
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
                trigger: "#image-container_hinata",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.set("#refreshVideoRef",{
        display: "none"
    }).set("#pointVideoRef",{
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
        }).fromTo("#pointVideoRef", {
            y: "100%",
            duration: 0.7
        }, {
            y: "0%",
            duration: 0.7
        }, "<")
        
        tl.fromTo("#pointVideoContainerRef",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef",{
            display: "none",
        }).fromTo("#pointVideoRef",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef",{
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
        const tl = gsap.timeline({
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#image-parallax_hinata",
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
        <div ref={containerRef} className="bg-[rgba(18,3,20,0)]">
            <div id="image-parallax_hinata" className="w-full h-[140vh] overflow-y-hidden relative"
                style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <div className="h-[160vh] w-full"
                    ref={imgStatic}
                    style={{
                        backgroundImage: "url('/characters/hinata/hinata1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="w-4/12 right-20 top-1/2 absolute z-10 font-bold">
                        <h2 className="text-7xl text-fuchsia-400 uppercase text-right"> Hinata Hyuga </h2>
                        <h3 className="text-4xl my-3 text-fuchsia-700 text-right"> Quiero ser más fuerte... como tú, Naruto. </h3>
                        <p className="text-3xl text-pink-500 text-right"> Tímida heredera Hyuga, encuentra inspiración en Naruto. Su amor y determinación la transforman en una valiente y poderosa ninja. </p>
                    </div>
                </div>
            </div>
            <div id="firstImages-container_hinata" className="flex w-11/12 ml-auto flex-row mt-24 gap-16 justify-center items-center h-[90vh]">
                <ImgZoom imgSrc="/characters/hinata/hinata2.jpeg" otherClass="h-8/12" alt="Hinata's second image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/hinata/hinata3.jpg" otherClass="h-full" alt="Hinata's second image" ></ImgZoom>
            </div>
            <div id="image-container_hinata" className="h-[300vh] relative">
                <div id="video-container_hinata" className="sticky top-[10vh] h-[80vh] w-6/12 grayscale">
                    <img ref={imgRef} src={getFramesSource(1)} className="w-full h-full object-cover cursor-pointer" onClick={handleClickVideo} />

                    <span id="pointVideoContainerRef" className="w-5 h-32 rounded-full absolute bottom-5 right-0 mr-5 bg-gray-700 border-4 border-gray-700 flex justify-center overflow-hidden">
                        <span id="pointVideoRef" className="w-2.5 block h-full translate-y-[95%] bg-white rounded-full"></span>
                        <div className="hidden opacity-0 size-10 p-1.5 justify-center items-center" id="refreshVideoRef">
                            <img  src="/refresh.svg" className="w-full h-full" />
                        </div>
                    </span>

                    
                    
                </div>
                <p id="textVideo_hinata" className="sticky top-0 translate-y-1/2  right-6 font-bold text-fuchsia-400 text-7xl mr-20 w-1/3 ml-auto"> "No me rendiré... ¡Ese es mi camino ninja!" </p>
            </div>
            <div id="secondImages-container_hinata" className="flex w-10/12 mx-auto flex-row mt-24 gap-16 justify-center items-center h-[90vh]">
                <ImgZoom imgSrc="/characters/hinata/hinata4.jpg" otherClass="h-11/12" alt="Hinata's second image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/hinata/hinata5.jpg" otherClass="h-8/12" alt="Hinata's second image" ></ImgZoom>
            </div>
        </div>
    )
}

export default Hinata;