import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../../scripts/gsapConfig";
import ImgZoom from "../../ImgZoom";

const frames = 40;
const getFramesSource = (index) => {
    return `/frames/sailorMoon2/sailormoon_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger)

const SailorMoonBottom = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const imgRef1 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        let imgs = []
        for (let i = 1; i <= frames; i++) {
            let imgSrc = getFramesSource(i);
            let img = new Image();
            img.src = imgSrc;
            imgs.push(img)
        }
        setImages(imgs)

        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
    }, [])

    useEffect(() => {
        if (!(window.innerWidth > 768)) return;
        if (imgRef1 && imgRef3) {
            [imgRef1, imgRef3].forEach((element, index) => {
                gsap.to(element.current, {
                    y: index === 0 ? -100 : -130,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: "#text-container_sailorBottom",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,

                    },

                })
            })
        }
    }, [])

    useEffect(() => {
        if (!imgRef.current || images.length === 0) return;
        const obj = { frame: 0 }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#image-container_sailorBottom",
                start: "top top",
                end: "bottom bottom",
                scrub: true,

            }
        })

        const tlAux = gsap.timeline({
            scrollTrigger: {
                trigger: "#image-container_sailorBottom",
                start: "top top",
                endTrigger: "#title_sailorBottom",
                end: "bottom+=100vh bottom",
                scrub: true,
            }
        })


        tl.to("#image-container_sailorBottom", {
            opacity: 1,
            duration: 0.1
        })

        tlAux.to("#aux-title_sailorBottom", {
            opacity: 1,
            y: "-8vh",
            duration: 0.2,
            delay: 0.05
        })

        tlAux.to({}, { duration: 0.70 })

        tlAux.set("#title_sailorBottom", {
            opacity: 1
        })

        tlAux.set("#aux-title_sailorBottom", {
            opacity: 0
        })

        tl.to(obj, {
            frame: frames - 1,
            duration: 0.8,
            ease: "none",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                if (imgRef.current) {
                    imgRef.current.src = images[index].src;
                }
            }
        }, "<")


        tl.to("#image-container_sailorBottom", {
            opacity: 0,
            ease: "power2.in",
            duration: 0.1
        })


        return () => {
            tlAux.scrollTrigger?.kill();
            tlAux.kill();
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [images])

    return (
        <div className="relative">
            <div id="image-container_sailorBottom" className="h-[400vh] w-full absolute top-[-500px] bg-[rgb(18,3,20)] z-0 opacity-0">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover" alt="Secuence of imagenes about the second Sailor's video" />
                <h2 id="aux-title_sailorBottom" className="fixed text-5xl uppercase font-bold text-pink-500 bottom-8 ml-[calc(2.5rem)] pr-10 opacity-0
                    md:text-6xl md:ml-[calc(12vw+2.5rem)] md:pr-0"> "Conejo de la Luna"  </h2>
            </div>
            <div className="pt-[220vh]">
                <div id="text-container_sailorBottom" className="text-white z-10 relative px-10
                sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.8fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0
                md:grid-cols-[12vw_1.4fr_1.2fr_12vw] md:grid-rows-[0.4fr_1fr_5fr_3fr]
            ">
                    <div></div>
                    <h2 id="title_sailorBottom" className="text-5xl uppercase place-content-start font-bold text-pink-500 my-10 opacity-0
                    md:text-6xl md:my-0 md:col-span-3 md:w-11/12
                "> "Conejo de la Luna"  </h2>

                    <div></div>
                    <div className="font-bold w-11/12
                    sm:w-10/12
                ">
                        <h3 className="text-2xl text-fuchsia-800 mb-5
                        md:text-4xl
                    "> "En el nombre de la luna te castigaré" </h3>
                    </div>
                    <div className="md:flex md:items-center md:justify-center font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
                        <p className="text-xl mb-10
                        md:text-2xl md:mb-0 md:w-10/12
                    "> No me rendiré. Porque sé que mientras tenga el amor de mis amigas y crea en mí misma, puedo superar cualquier oscuridad. </p>
                    </div>
                    <div></div>

                    <div className="h-full w-full relative
                    sm:col-span-2
                ">
                        <ImgZoom ref={imgRef1} otherClass="w-full h-full
                        sm:11/12 sm:absolute 
                        md:mt-20
                    " imgSrc="/characters/sailormoon/sailor4.jpg"
                            alt="First Sailor's second image" />
                    </div>
                    <ImgZoom otherClass="h-full my-5 w-full h-full
                    sm:row-span-2 sm:col-span-1
                    md:my-0 md:h-10/12 md:my-auto 
                " imgSrc="/characters/sailormoon/sailor5.jpg"
                        alt="Second Sailor's second image" />
                    <div></div>

                    <div></div>
                    <ImgZoom ref={imgRef3} otherClass="h-full w-full
                sm:row-span-1 sm:col-span-1 md:mt-20
                " imgSrc="/characters/sailormoon/sailor6.jpg" alt="Third Sailor's second image" />
                </div>
            </div>
        </div>
    )

}

export default SailorMoonBottom