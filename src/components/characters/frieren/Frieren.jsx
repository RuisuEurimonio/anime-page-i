import { gsap, ScrollTrigger } from "../../../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";
import ImgZoom from "../../ImgZoom";

const frames = 34;
const getFramesSource = (index) => {
    return `/frames/frieren/frieren_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger)

const Frieren = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const imgRef1 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        if (!(window.innerWidth > 768)) return;
        if (imgRef1 && imgRef3) {
            [imgRef1, imgRef3].forEach((ref, i) => {
                gsap.to(ref.current, {
                    y: i == 0 ? -120 : -115,
                    ease: "power1.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger: "#text-container_frieren",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                })
            })
        }
    }, [])

    useEffect(() => {
        let imgs = []
        for (let i = 1; i <= frames; i++) {
            let imgSrc = getFramesSource(i);
            let img = new Image();
            img.src = imgSrc;
            imgs.push(img)
        }
        setImages(imgs);

        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
    }, [])

    useEffect(() => {
        if (!imgRef.current || images.length === 0) return;

        const obj = { frame: 0 }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#image-container_frieren",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#image-container_frieren", {
            opacity: 1,
            duration: 0.1
        })


        tl.to(obj, {
            frame: frames - 1,
            duration: 0.7,
            ease: "none",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                if (imgRef.current) {
                    imgRef.current.src = images[index].src;
                }
            },
        })

        tl.to(imgRef.current, {
            opacity: 0,
            ease: "power2.in",
            duration: 0.1
        })

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [images])

    return (
        <div className="relative">
            <div id="image-container_frieren" className="h-[400vh] w-full absolute top-[-40vh] bg-[rgb(18,3,20)] z-0 opacity-0
                sm:top-[-70vh]
            ">
                <img ref={imgRef} alt="secuence of images from Frieren's video" src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover" />
            </div>
            <div className="pt-[250vh]
                sm:pt-[180vh]
            ">
                <div id="text-container_frieren" className="text-white z-10 relative px-10
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0
                    md:grid-cols-[12vw_1fr_1fr_0.5fr] md:grid-rows-[0.4fr_60vh_50vh] 
                ">
                    <div></div>
                    <div className="font-bold
                    sm:col-span-2 sm:mb-16">
                        <h2 className="text-5xl uppercase place-content-end font-bold text-fuchsia-800 my-10 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                        md:text-8xl md:my-0
                        "> Frieren </h2>
                        <h3 className="text-2xl text-fuchsia-600 mb-5 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                            md:text-4xl
                        "> Miembro del grupo que derrotó al Rey Demonio. Aunque parece ser muy joven, nació en una raza longeva de elfos y ha vivido durante más de mil años. </h3>
                    </div>
                    <div></div>

                    <div className="h-full w-full relative 
                        sm:col-span-2 sm:row-span-1
                    ">
                        <ImgZoom ref={imgRef1} otherClass=" bottom-0 w-full h-full
                            sm:h-11/12 sm:absolute
                        " imgSrc="/characters/frieren/frieren1.jpg" alt="First image about Frieren character" />
                    </div>
                    <ImgZoom otherClass="h-full my-5 fixed w-full object-top
                        sm:row-span-2 sm:col-span-2 
                        md:my-0 md:h-9/12
                    " imgSrc="/characters/frieren/frieren2.jpg" alt="Second image about Frieren character" />
                    <div></div>
                    <ImgZoom ref={imgRef3} otherClass="h-full w-full 
                        sm:row-span-1 sm:col-span-1
                        md:h-10/12
                    " imgSrc="/characters/frieren/frieren3.jpg" alt="Third image about Frieren character" />
                </div>
            </div>
        </div>
    )

}

export default Frieren;