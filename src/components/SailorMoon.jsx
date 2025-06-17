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
            }
        })


        return ()=>{
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    },[images])

    return(
        <div id="sailor-container" className="h-[400vh] w-full relative bg-[rgb(18,3,20)] top-80">
            <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover opacity-0" /> 
        </div>
    )

}

export default SailorMoon;