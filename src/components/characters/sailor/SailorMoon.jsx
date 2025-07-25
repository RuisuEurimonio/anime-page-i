import { gsap, ScrollTrigger } from "../../../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";
import ImgZoom from "../../ImgZoom";

const frames = 30;
const getFramesSource = (index) => {
    return `/frames/sailorMoon/sailor_${index.toString()}.png`
}

gsap.registerPlugin(ScrollTrigger)

const SailorMoon = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const imgRef1 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        if (!(window.innerWidth > 768)) return;
        if (imgRef1 && imgRef3) {
            [imgRef1, imgRef3].forEach((ref, i) => {
                gsap.to(ref.current, {
                    y: i == 0 ? -150 : -145,
                    ease: "power1.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger: "#text-container_sailor",
                        start: "center bottom",
                        end: "bottom bottom",
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
                trigger: "#image-container_sailor",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#image-container_sailor", {
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
            <div id="image-container_sailor" className="h-[400vh] w-full absolute top-[-70vh] bg-[rgb(18,3,20)] z-0 opacity-0">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover" alt="Secuence of imagenes about the Sailor's video" />
            </div>
            <div className="pt-[180vh]">
                <div id="text-container_sailor" className="text-white z-10 relative px-10
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0
                    md:grid-cols-[12vw_1fr_1fr_1fr] md:grid-rows-[0.4fr_1fr_0.5fr_0.5fr]
                ">
                    <div></div>
                    <h2 className="text-5xl uppercase place-content-end font-bold text-pink-300 my-10
                        md:text-8xl md:my-0
                    "> Sailor Moon </h2>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div className="font-bold w-11/12
                        sm:w-10/12
                    ">
                        <h3 className="text-2xl text-pink-400 mb-5
                            md:text-4xl
                        "> "El verdadero poder no está en destruir, sino en sanar, perdonar y amar incluso cuando todo parece perdido." </h3>
                        <p className="text-xl text-gray-700 mb-10
                            md:text-2xl md:mb-0
                        "> Si bien en un principio Usagi no era más que una adolescente perezosa, ingenua y un tanto llorona; con el tiempo se vuelve más valiente, decidida y eficaz. Además de que su naturaleza gentil junto a su gran corazón la convierte en la portadora y guardiana del poderoso Cristal de Plata. </p>
                    </div>
                    <div className="h-full w-full relative
                        sm:col-span-2 sm:row-span-2
                    ">
                        <ImgZoom ref={imgRef1} otherClass=" bottom-0 relative w-full h-full
                            sm:11/12 sm:absolute
                        " imgSrc="/characters/sailormoon/sailor3.jpg"
                            alt="First Sailor's image"
                        />
                    </div>
                    <div></div>
                    <ImgZoom otherClass="h-full my-5 fixed w-full h-full
                        sm:row-span-2 sm:col-span-1
                        md:my-0
                    " imgSrc="/characters/sailormoon/sailor2.jpg"
                        alt="Second Sailor's image"
                    />

                    <div></div>
                    <ImgZoom ref={imgRef3} otherClass="border-white hover:border-8 duration-200 h-full w-full object-cover
                        sm:row-span-1 sm:col-span-1
                        md:h-10/12
                    " imgSrc="/characters/sailormoon/sailor1.jpg"
                        alt="Third Sailor's image"
                    />
                </div>
            </div>
        </div>
    )

}

export default SailorMoon;