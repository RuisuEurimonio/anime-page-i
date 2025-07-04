import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";

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

    useEffect(()=>{
        [imgRef1,imgRef3].forEach((ref, i)=>{
            gsap.to(ref.current,{
                y: i == 0 ? -230 : -245,
                ease: "power1.inOut",
                duration: 1,
                scrollTrigger: {
                    trigger: "#text-container",
                    start: "top+=380vh top",
                    end: "bottom bottom",
                    scrub: true,
                    markers: true
                }
            })
        })
    },[])

    useEffect(()=>{
        let imgs = []
        for(let i = 1; i <= frames;i++){
            let imgSrc = getFramesSource(i);
            let img = new Image();
            img.src = imgSrc;
            imgs.push(img)
        }
        setImages(imgs);
    },[])

    useEffect(()=>{
        if(!imgRef.current || images.length === 0) return;

        const obj = { frame : 0}
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sailor-image-container",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#sailor-image-container",{
            opacity: 1,
            duration: 0.1
        })


        tl.to(obj,{
            frame: frames - 1,
            duration: 0.7,
            ease: "none",
            onUpdate: ()=>{
                const index = Math.floor(obj.frame);
                if(imgRef.current){
                    imgRef.current.src = images[index].src;
                }
            },
        })

        tl.to(imgRef.current, {
                    opacity: 0,
                    ease: "power2.in",
                    duration: 0.1
                })

        return ()=>{
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    },[images])

    return(
        <div id="sailor-container" className="relative">
            <div id="sailor-image-container" className="h-[400vh] w-full absolute top-[-70vh] bg-[rgb(18,3,20)] z-0 opacity-0">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover" /> 
            </div>
            <div id="text-container" className="text-white z-10 grid grid-cols-[15vw_1.2fr_1.2fr_0.6fr] grid-rows-[0.4fr_1fr_1fr_1fr] gap-10 relative pt-[180vh]"> 
                <div></div>
                <h2 className="text-8xl uppercase place-content-end font-bold text-pink-300"> Sailor Moon </h2>
                <div></div>
                <div></div>

                <div></div>
                <div className="font-bold w-10/12">
                    <h3 className="text-4xl text-pink-400 mb-5"> "El verdadero poder no está en destruir, sino en sanar, perdonar y amar incluso cuando todo parece perdido." </h3>
                    <p className="text-2xl"> Si bien en un principio Usagi no era más que una adolescente perezosa, ingenua y un tanto llorona; con el tiempo se vuelve más valiente, decidida y eficaz. Además de que su naturaleza gentil junto a su gran corazón la convierte en la portadora y guardiana del poderoso Cristal de Plata. </p>
                </div>
                <div className="col-span-2 row-span-2 h-full w-full relative">
                    <img ref={imgRef1} className="border-white hover:border-8 duration-200 bottom-0 absolute w-full h-11/12 object-cover" src="/characters/sailormoon/sailor3.jpg"/> 
                </div>
                <div></div>
                <img className="border-white hover:border-8 duration-200 row-span-2 col-span-1 h-full object-cover" src="/characters/sailormoon/sailor2.jpg" /> 

                <div></div>
                <img ref={imgRef3} className="border-white hover:border-8 duration-200 row-span-1 col-span-1 h-10/12 w-full object-cover" src="/characters/sailormoon/sailor1.jpg" /> 
            </div>
        </div>
    )

}

export default SailorMoon;