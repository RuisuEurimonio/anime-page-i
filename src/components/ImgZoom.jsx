import { forwardRef, useRef, useState } from "react";
import { gsap } from "../scripts/gsapConfig";
import { createPortal } from "react-dom";

const ImgZoom = forwardRef(({imgSrc, alt, otherClass = ""}, ref) => {

    const imgRef = useRef(null)

    const [showFullImage, setShowFullImage] = useState(false);

    const handleClic = () => {
        setShowFullImage(true);

        requestAnimationFrame(()=>{
            gsap.fromTo(imgRef.current,{
                width: "8rem",
                height: "8rem",
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
            },
            {
                width: "90vw",
                height: "90vh",
                duration: 1,
                ease: "power3.inOut",
            })
        })
    }

    const handleClose = () => {
        gsap.to(imgRef.current,{
            width: "8rem",
          height: "8rem",
          duration: 1,
          ease: "power3.inOut",
          onComplete: () => {
            setShowFullImage(false);
          },
        })
    }

    return(
        <>
        <div ref={ref} className={"group w-full relative duration-200 hover:border-8 border-white cursor-zoom-in "+otherClass} onClick={handleClic}>
            <img src={imgSrc} alt={alt +" miniatura"} loading="lazy" className="w-full h-full object-cover"/>
            <img src="/zoom.svg" alt="Icono de zoom" className="group-hover:bg-pink-100 duration-200 group-hover:scale-125 absolute bottom-5 right-5 size-10 bg-pink-400 rounded-full p-2" />
        </div>
        {
            showFullImage &&
                createPortal(
                <div className="fixed w-screen h-screen inset-0 z-[100] bg-[rgba(18,3,20,0.9)] cursor-zoom-out justify-center items-center" onClick={handleClose}>
                    <img ref={imgRef} src={imgSrc} alt={alt +" expandida"} className="absolute object-cover rounded-xl"/> 
                </div>
                ,document.body)
        }
        </>
    )

})

export default ImgZoom;