import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

const frames = 194;
const getFramesSource = (index) =>{
    return `/frames/footer/footer_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger);

const Footer = () =>{

    const imgRef = useRef(null)
    const [images, setImages] = useState([]);

    useEffect(()=>{
        const imgs = []
        for(let i = 1 ; i <= frames ; i++){
            const img = new Image()
            const src = getFramesSource(i);
            img.src = src;
            imgs.push(img)
        }

        setImages(imgs)
    },[])

    useEffect(()=>{
        if(!imgRef.current || images.length === 0 ) return;

        const obj = {frame: 0}
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#videoFooter",
                start: "bottom top",
                end: "top bottom",
                scrub: true,
                markers: true
            }
        })

        tl.to(obj,{
            frame: frames - 1,
            duration: 0.8,
            ease: "none",
            onUpdate: (()=>{
                const index = Math.floor(obj.frame);
                if(imgRef.current){
                    imgRef.current.src = images[index].src;
                }
            })
        })

    },[images])

    return (
        <footer className="w-full">
            <div className="relative">
                <div id="videoFooter" className="w-full h-[800vh] relative">
                    <img ref={imgRef} src={getFramesSource(1)} alt="video footer" className="sticky top-0 w-full h-screen" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;