import { gsap, ScrollTrigger } from "../../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";
import ImgZoom from "../ImgZoom";

const frames = 39;
const getFramesSource = (index) => {
    return `/frames/frieren2/frieren_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger)

const FrierenBottom = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);
    const imgStatic = useRef(null);

    const textRef = useRef(null);

    useEffect(() => {

                

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

    useEffect(()=>{
        if(imgStatic){
            gsap.to(imgStatic.current,{
                y: "20vh",
                ease: "power1.inOut",
                duration: 2.5,
                scrollTrigger: {
                    trigger: "#image-parallax_frierenBottom",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        }
    })

    useEffect(() => {
        if (!imgRef.current || images.length === 0) return;

        const obj = { frame: 0 }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#image-container_frierenBottom",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#image-container_frierenBottom", {
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
    <div
      id="image-container_frierenBottom"
      className="h-[400vh] w-full absolute top-[-450px] bg-[rgb(18,3,20)] z-0 opacity-0"
    >
      <img
        ref={imgRef}
        src={getFramesSource(1)}
        alt="Sequence of images from Frieren's second video"
        className="sticky top-0 w-full h-screen object-cover"
      />
    </div>

    <div className="pt-[230vh] sm:pt-[280vh]">
      <div
        id="text-container_frierenBottom"
        className="h-screen w-full relative flex justify-center items-center"
      >
        <h3
          ref={textRef}
          className="font-bold text-6xl sticky top-1/2 w-1/2 text-justify text-fuchsia-500"
        >
          "Solo he empezado a darme cuenta de lo valioso que fue nuestro viaje... ahora que ya terminó."
        </h3>
      </div>
    </div>

    <div id="image-parallax_frierenBottom" className="mt-[50vh] h-[110vh] overflow-y-hidden"
        style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)"}}
    >
      <div
        ref={imgStatic}
        className="h-[120vh] w-full"
        style={{
          backgroundImage: "url('/characters/frieren/frieren4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      ></div>
    </div>
    <div className="h-[70vh] flex flex-col gap-5 justify-around items-center text-fuchsia-200 w-9/12 mx-auto
        sm:flex-row sm:gap-32
    ">
        <h2 className="text-7xl font-extrabold"> Cosas del anime </h2>
        <p className="text-4xl font-bold"> El anime es arte que trasciende idioma, edad y fronteras. </p>
    </div>
  </div>
);
}

export default FrierenBottom;