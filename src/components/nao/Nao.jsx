import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";

gsap.registerPlugin(ScrollTrigger);

const frames = 100;
const getFramesSource = (index) => {
    return `/frames/nao/nao_${index.toString()}.jpg`
}

const Nao = () => {

    const imgStatic = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const handleClickVideo = () =>{
        if (images.length === 0 || !imgRef.current) return;

    const obj = { frame: 0 };

    gsap.timeline().set("#refreshVideoRef_nao",{
        display: "none"
    }).set("#pointVideoRef_nao",{
        display: "block"
    }).to(obj, {
            frame: frames - 1,
            duration: 3.5,
            ease: "power1.inOut",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                imgRef.current.src = images[index].src;
            }
        }).fromTo("#pointVideoRef_nao", {
            y: "100%",
        }, {
            y: "0%",
            duration: 3.5,
            ease: "power1.inOut"
        }, "<").fromTo("#pointVideoContainerRef_nao",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef_nao",{
            display: "none",
        }).fromTo("#pointVideoRef_nao",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef_nao",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef_nao",{
            opacity: 0
        },{
            opacity: 1,
            duration: 0.02
        },"<")
    }

    useEffect(() => {
        gsap.to(containerRef.current, {
            backgroundColor: "rgba(240, 236, 209,1)",
            duration: 2.5,
            ease: "expo.in",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "+=500",
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
        ["#video-container_nao", "#firstImages-container_nao"].forEach((item, i) => {
            gsap.fromTo(item, {
                opacity: i === 0 ? "" : 1,
                filter: i === 0 ? "grayscale(100%)" : "",
            }, {
                opacity: i === 0 ? "" : 0,
                filter: i === 0 ? "grayscale(0%)" : "",
                duration: 1,
                scrollTrigger: {
                    trigger: "#firstImages-container_nao",
                    start: "center center",
                    end: "bottom top",
                    scrub: true,
                }
            })

        })
    }, [])

    useEffect(()=>{
        ["#secondImages-container_nao", "#video-container_nao"].forEach((item, i)=>{
            gsap.fromTo(item,{
                opacity: i === 0 ? 0 : "",
                filter: i === 0 ? "" : "grayscale(0%)"
            },{
                opacity: i === 0 ? 1 : "",
                filter: i === 0 ? "" : "grayscale(100%)",
                duration: 1,
                ease: "power1.in",
                scrollTrigger: {
                    trigger: "#secondImages-container_nao",
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
                trigger: "#image-container_nao",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.set("#refreshVideoRef_nao",{
        display: "none"
    }).set("#pointVideoRef_nao",{
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
        }).fromTo("#pointVideoRef_nao", {
            y: "100%",
            duration: 0.7
        }, {
            y: "0%",
            duration: 0.7
        }, "<")
        
        tl.fromTo("#pointVideoContainerRef_nao",{
            width: "1.25rem",
            height: "8rem"
        },{
            width: "3rem",
            height: "3rem",
            duration: 0.02
        }).set("#pointVideoRef_nao",{
            display: "none",
        }).fromTo("#pointVideoRef_nao",{
            opacity: 1
        },{
            opacity: 0,
            duration: 0.01
        },"<").set("#refreshVideoRef_nao",{
            display: "flex",
        })
        .fromTo("#refreshVideoRef_nao",{
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
                trigger: "#image-parallax_nao",
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
        <div ref={containerRef} className="bg-[rgba(0,0,0,1)]">
            <div id="image-parallax_nao" className="w-full h-[140vh] overflow-y-hidden relative"
                style={{ clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <div className="h-[160vh] w-full"
                    ref={imgStatic}
                    style={{
                        backgroundImage: "url('/characters/nao/nao1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="w-11/12 top-1/2 absolute z-10 font-bold
                        sm:right-20 sm:w-4/12
                    ">
                        <h2 className="text-5xl text-fuchsia-900 uppercase text-right
                            md:text-7xl
                        "> Nao Tomori </h2>
                        <h3 className="text-2xl my-3 text-fuchsia-700 text-right
                            md:text-4xl
                        "> No existen los atajos para la vida. </h3>
                        <p className="text-xl text-pink-500 text-right
                            md:text-3xl
                        "> la chica que grababa verdades, protegía a quienes sufrían... y eligió quedarse, incluso cuando él la olvidó.</p>
                    </div>
                </div>
            </div>
            <div id="firstImages-container_nao" className="flex w-11/12 mx-auto my-5 flex-col gap-5 justify-center items-center
                sm:flex-row sm:h-[90vh] md:mt-24 md:gap-16 sm:ml-auto
            ">
                <ImgZoom imgSrc="/characters/nao/nao2.jpg" otherClass="h-8/12" alt="nao's second image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/nao/nao3.jpg" otherClass="h-full" alt="nao's third image" ></ImgZoom>
            </div>
            <div id="image-container_nao" className="h-[350vh] relative">
                <div id="video-container_nao" className="sticky top-0 h-[70vh] w-full grayscale
                    sm:w-6/12 
                    md:h-[80vh] md:top-[10vh]
                ">
                    <img ref={imgRef} src={getFramesSource(1)} className="w-full h-full object-cover cursor-pointer" onClick={handleClickVideo} />

                    <span id="pointVideoContainerRef_nao" className="w-5 h-32 rounded-full absolute bottom-5 right-0 mr-5 bg-gray-700 border-4 border-gray-700 flex justify-center overflow-hidden">
                        <span id="pointVideoRef_nao" className="w-2.5 block h-full translate-y-[95%] bg-white rounded-full"></span>
                        <div className="hidden opacity-0 size-10 p-1.5 justify-center items-center" id="refreshVideoRef_nao">
                            <img  src="/refresh.svg" className="w-full h-full" />
                        </div>
                    </span>

                    
                    
                </div>
                <p id="textVideo_nao" className="sticky top-[70vh] translate-y-1/2  font-bold text-fuchsia-400 text-4xl ml-auto
                    sm:mb-[35vh] sm:right-6 sm:mr-20 sm:w-1/3
                    md:text-7xl
                "> "Incluso si el mundo te odia, yo no lo haré." </p>
            </div>
            <div id="secondImages-container_nao" className="flex  flex-col w-10/12 mx-auto mt-24 gap-16 justify-center items-center h-[90vh] pb-5
                md:flex-row sm:pb-0
            ">
                <ImgZoom imgSrc="/characters/nao/nao4.jpg" otherClass="h-11/12" alt="nao's fourth image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/nao/nao5.jpg" otherClass="h-8/12" alt="nao's fifth image" ></ImgZoom>
            </div>
            <div className="w-10/12 mx-auto font-bold pb-10
                md:-translate-y-[30%] md:w-4/12 md:ml-auto md:mr-[10vw] 
            ">
                <h2 className="text-2xl text-fuchsia-400
                    md:text-4xl
                ">Lo grabé todo, así que no puedes mentir.</h2>
                <p className="text-xl text-fuchsia-900
                    md:text-2xl
                "> En el olvido de él, Nao permaneció. Sin memoria, sin promesas, pero con fe: reconstruiría su historia, desde cero, una vez más. </p>
            </div>
        </div>
    )
}

export default Nao;