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
        if(!imgRef.current || images.length === 0) return console.log("hola");

        const obj = { frame : 0}

        console.log(images)
        console.log(getFramesSource(1))

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#sailor-container",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: true
            },
        })

        tl.to(imgRef.current,{
            opacity: 1,
            duration: 0.2
        })

        tl.to(obj,{
            frame: frames - 1,
            ease: "none",
            onUpdate: ()=>{
                const index = Math.floor(obj.frame);
                if(imgRef.current){
                    imgRef.current.src = images[index].src;
                }
            },
            onComplete: ()=>{
                tl.to(imgRef.current, {
                    opacity: 0
                })
            }
        },"<")

        return ()=>{
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    },[images])

    return(
        <div>
            <div id="sailor-container" className="h-[400vh] w-full relative bg-[rgb(18,3,20)]">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover opacity-0" /> 
            </div>
            <div className="text-white z-10 grid grid-cols-[15vw_1.2fr_1.2fr_0.6fr] grid-rows-5 gap-10"> 
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
                    <img className="border-white hover:border-8 duration-200 bottom-0 absolute w-full h-11/12 object-cover" src="/characters/sailormoon/sailor3.jpg"/> 
                </div>
                <div className=""></div>
                <img className="border-white hover:border-8 duration-200 row-span-2 col-span-1 h-full object-cover" src="/characters/sailormoon/sailor2.jpg" /> 

                <div className=""></div>
                <img className="border-white hover:border-8 duration-200 row-span-1 col-span-1 h-10/12 w-full object-cover" src="/characters/sailormoon/sailor1.jpg" /> 
            </div>
        </div>
    )

}

export default SailorMoon;