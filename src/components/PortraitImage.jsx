import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

gsap.registerPlugin(ScrollTrigger)

const PortraitImage = ({ keyName, fileName, fullName, fatherContainer = "", handleOpenModal = ()=>{}, minimal = false }) => {

    const imgRef = useRef(null);

    useEffect(()=>{
        if(!imgRef || fatherContainer === "") return;

        gsap.fromTo(imgRef.current,{
            scale: "1",
        },{
            scale: "1.3",
            ease: "power1.inOut",
            duration: 1,
            scrollTrigger:{
                trigger: "#"+fatherContainer+keyName,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                markers: true
            }
        })

    },[])

    return (
        <img ref={imgRef} src={`/animes/${keyName}/${fileName}.jpg`} alt={`${minimal ? "small" : ""} portrait image from ${fullName} anime`} className={`h-full w-full object-cover ${minimal ? "border-4 border-white md:border-[12px] m-4" : ""}
                
            `} style={{ transform: minimal ? "rotate(-6deg)" : "scale(1)" }} onClick={minimal ? null : handleOpenModal} />
    )
}

export default PortraitImage;