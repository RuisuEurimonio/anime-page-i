import { gsap, ScrollTrigger } from "../../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";
import ImgZoom from "../ImgZoom";

const frames = 40;
const getFramesSource = (index) => {
    return `/frames/mikasa2/mikasa_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger)

const MikasaBottom = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        if (!(window.innerWidth > 768)) return;
        if (imgRef2 && imgRef3) {
            [imgRef2, imgRef3].forEach((ref, i) => {
                gsap.to(ref.current, {
                    y: i === 0 ? -100 : -260,
                    ease: "power1.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger: "#text-container_mikasaBottom",
                        start: "top-=200px bottom",
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
                trigger: "#image-container_mikasaBottom",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#image-container_mikasaBottom", {
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
            <div id="image-container_mikasaBottom" className="h-[400vh] w-full absolute top-[-450px] bg-[rgb(18,3,20)] z-0 opacity-0">
                <img ref={imgRef} src={getFramesSource(1)} alt="Secuence of imagenes from Mikasa's second video" className="sticky top-0 w-full h-screen object-cover" />
            </div>
            <div className="pt-[200vh]
                sm:pt-[180vh]
            ">
                <div id="text-container_mikasaBottom" className="text-white z-10 relative px-10
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0
                    md:grid-cols-[12vw_1.3fr_1fr_12vw] md:grid-rows-[1fr_1fr_2fr_1.5fr]
                ">

                    <div></div>
                    <h2 className="text-5xl uppercase text-pink-400 my-10 font-bold
                            sm:col-span-2 sm:place-self-end sm:mx-14
                            md:text-7xl md:mt-0 md:mb-20
                        "> "Si no peleamos, no podemos ganar." </h2>
                    <div></div>

                    <div></div>
                    <p className="text-xl text-fuchsia-300 mb-10 font-bold
                            sm:place-self-end sm:mb-10 sm:mx-14 
                            md:text-2xl md:mt-0 
                        "> Eso crea en ella un vacío emocional que intenta llenar a través de su conexión con Eren y Armin. Su lealtad, fuerza y disciplina surgen de no querer perder esa "nueva familia". </p>
                    <h3 className="text-2xl text-purple-100 mb-5 font-bold
                            md:text-4xl md:mb-16
                        "> Ante la crueldad del mundo, Mikasa entrena duro y se convierte en la mejor de su clase, no por gloria, sino porque ser fuerte le da control en un mundo caótico. </h3>
                    <div></div>

                    <div></div>
                    <ImgZoom otherClass=" w-full h-full 
                            sm:row-span-2 sm:h-10/12
                        " imgSrc="/characters/mikasa/mikasa4.jpg"
                        alt="First Mikasa's second image"
                    />
                    <ImgZoom ref={imgRef2} otherClass="h-full my-5 w-full
                        md:my-0 md:h-10/12 md:col-span-2
                    " imgSrc="/characters/mikasa/mikasa5.jpg"
                        alt="Second Mikasa's second image"
                    />

                    <div></div>
                    <ImgZoom ref={imgRef3} otherClass="h-full w-full 
                        sm:row-span-1 sm:col-span-1
                        md:h-10/12
                    " imgSrc="/characters/mikasa/mikasa6.jpeg"
                        alt="Third Mikasa's second image"
                    />
                    <div></div>
                </div>
            </div>
        </div>
    )

}

export default MikasaBottom;