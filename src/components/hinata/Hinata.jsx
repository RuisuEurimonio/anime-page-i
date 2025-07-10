import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";

gsap.registerPlugin(ScrollTrigger);

const frames = 41;
const getFramesSource = (index) => {
    return `/frames/hinata/hinata_${index.toString()}.jpg`
}

const Hinata = ()=> {

    const imgStatic = useRef(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    const [images, setImages] = useState([]);

    useEffect(()=>{
        gsap.to(containerRef.current,{
            backgroundColor: "rgba(7,23,51,1)",
            duration: 2.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        })
    },[])

    useEffect(()=>{
        let imgs = []
        for(let i = 1 ; i <= frames ; i++){
            let imgSrc = getFramesSource(i);
            let newImg = new Image();
            newImg.src = imgSrc
            imgs.push(newImg);
        }

        setImages(imgs);
    },[])

    useEffect(()=>{
        if(!imgRef || images.length === 0) return;
        const obj = { frame: 0}

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#image-container_hinata",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        tl.to(obj,{
            frame: frames - 1,
            duration: 0.7 ,
            ease: "none",
            onUpdate: ()=>{
                const index = Math.floor(obj.frame)
                if(imgRef.current){
                    imgRef.current.src = images[index].src;
                }
            }
        }).to("#pointVideoRef",{
            top: "95%"
        },"<")
    },[images])

    useEffect(()=>{
        const tl = gsap.timeline({
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: "#image-parallax_hinata",
                    start: "top center",
                    end: "bottom top",
                    scrub: true,
                    markers: true
                }
            })

            tl.to(imgStatic.current,{
                y: "-20vh",
                duration: 0.8
            }).to(imgStatic.current,{
                opacity: 0,
                duration: 0.2
            })

            return () => {
                tl.scrollTrigger?.kill();
                tl.kill();
            }
    },[])

    return (
        <div ref={containerRef} className="bg-[rgba(7,23,51,0)] py-72">
            <div id="image-parallax_hinata" className="w-full h-[140vh] overflow-y-hidden relative"
                style={{clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 100%)"}}
            >
                <div className="h-[160vh] w-full"
                ref={imgStatic}
                style={{
                    backgroundImage: "url('/characters/hinata/hinata1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                >
                    <div className="w-4/12 right-20 top-1/2 absolute z-10 font-bold">
                        <h2 className="text-7xl text-fuchsia-400 uppercase text-right"> Hinata Hyuga </h2>
                        <h3 className="text-4xl my-3 text-fuchsia-700 text-right"> Quiero ser más fuerte... como tú, Naruto. </h3>
                        <p className="text-3xl text-pink-500 text-right"> Tímida heredera Hyuga, encuentra inspiración en Naruto. Su amor y determinación la transforman en una valiente y poderosa ninja. </p>
                    </div>
                </div>
            </div>
            <div className="flex w-11/12 ml-auto flex-row mt-24 gap-16 justify-center items-center h-[90vh]">
                <ImgZoom imgSrc="/characters/hinata/hinata2.jpeg" otherClass="h-8/12" alt="Hinata's second image" ></ImgZoom>
                <ImgZoom imgSrc="/characters/hinata/hinata3.jpg" otherClass="h-full" alt="Hinata's second image" ></ImgZoom>
            </div>
            <div id="image-container_hinata" className="h-[300vh] relative">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-[10vh] w-6/12 object-cover h-[80vh]" />
                <span className="w-5 h-32 absolute bottom-3 rounded-full right-6/12 mr-5 bg-gray-700 border-4 border-gray-700 flex justify-center overflow-hidden"> 
                    <span id={"pointVideoRef"} className="w-2.5 h-full absolute top-[90%] bg-white rounded-full"></span>
                 </span>
            </div>
        </div>
    )
}

export default Hinata;