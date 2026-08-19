import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

const frames = 194;
const getFramesSource = (index) =>{
    return `${import.meta.env.BASE_URL}frames/footer/footer_${index.toString()}.jpg`
};

gsap.registerPlugin(ScrollTrigger);

const Footer = ({isSecondPage = false}) =>{

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);
    const belowContainerRef = useRef(null);
    const logoRef = useRef(null);
    const moreInfoRef = useRef(null);
    const textLogoRef = useRef(null);
    const disclaimerRef = useRef(null);
    const contactMeRef = useRef(null);
    const aboutMeRef = useRef(null);

    useEffect(()=>{
        if(isSecondPage) return;

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
        if (isSecondPage) return;
        if(!imgRef.current || images.length === 0 ) return;

        const obj = {frame: 0}
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#videoFooter",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
            }
        })

        tl.to("#separator_footer",{
            opacity: 1,
            ease: "none",
            duration: 0.06
        },"<")

        tl.to(imgRef.current,{
            opacity: 1,
            ease: "power4.in",
            duration: 0.05
        })

        tl.to(obj,{
            frame: frames - 1,
            duration: 0.9,
            ease: "none",
            onUpdate: (()=>{
                const index = Math.floor(obj.frame);
                if(imgRef.current){
                    imgRef.current.src = images[index].src;
                }
            })
        })

        tl.to("#footer",{
            duration: 0.05,
            backgroundColor: "rgb(10,4,4)",
            ease: "power4.out"
        }, "<")

        tl.to(imgRef.current,{
            opacity: 0,
            duration: 0.05
        })
        
        return ()=> {
            tl.kill();
            tl.scrollTrigger?.kill()
        }

    },[images])

    useEffect(()=>{
        if(isSecondPage) return;

        if(!logoRef.current || !moreInfoRef.current || !belowContainerRef.current || !textLogoRef.current || !disclaimerRef.current || !contactMeRef.current || !aboutMeRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: belowContainerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

            }
        })

        tl.fromTo(logoRef.current,{
            scale: 1.2,
        },{
            scale: 1,
            duration: 0.9
        })

        tl.fromTo(textLogoRef.current,{
            scale: 1.2,
        },{
            scale: 1,
            duration: 0.5
        },"<")

        tl.to(moreInfoRef.current,{
            opacity: 1,
            duration: 0.1,
        }).to(disclaimerRef.current,{
            opacity: 1,
            duration: 0.1
        },"<").to(contactMeRef.current,{
            opacity: 1,
            duration: 0.1
        },"<").to(aboutMeRef.current,{
            opacity: 1,
            duration: 0.1
        },"<")

        return ()=>{
            tl.kill()
            tl.scrollTrigger?.kill()
        }
    },[])

    return (
        <footer id="footer" className="w-full pb-12 relative bg-[18,3,20]">
            {!isSecondPage && <div className="relative">
                <div id="separator_footer" className="bg-[linear-gradient(180deg,rgba(18,3,20,1)_0%,rgba(94,4,0,1)_100%)] h-[180vh] absolute w-full z-[-5] top-[-100vh] opacity-0" ></div>
                <div id="videoFooter" className="w-full h-[600vh] relative mt-10">
                    <img ref={imgRef} src={getFramesSource(1)} alt="Sequence of images about the final anime video" loading="eager" className="sticky top-0 object-cover w-full h-screen opacity-0 z-5" />
                </div>
            </div>}
            <div ref={belowContainerRef} className={`relative ${isSecondPage ? "" : "mt-[-100vh]" }`}>
                {!isSecondPage && <div className="relative w-full h-[300vh] items-center flex-col flex z-0">
                    <div  className="sticky top-50 -translate-y-1/4 flex items-center flex-col w-full" > 
                        <div ref={logoRef} className="flex justify-center items-center"style={{transform: "scale(1.2)"}} >
                            <img src={`${import.meta.env.BASE_URL}iconAnime.svg`}  className="size-60" loading="eager" decoding="async" alt="page icon"/> 
                            <p className="absolute text-white text-5xl uppercase font-extrabold text-center"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                            >Anime<br/>Page<br/>I</p>
                        </div>
                        <h3 ref={textLogoRef} className="uppercase text-3xl font-extrabold mt-10   text-center text-fuchsia-500 w-1/2
                            md:text-6xl
                        " style={{transform: "scale(1.2)"}}> Para todo los gustos. </h3>
                    </div>
                </div>}
                <div ref={moreInfoRef} className={`relative -mt-5 text-white uppercase font-bold text-xl my-20 flex w-full flex-row flex-wrap  items-center justify-center gap-4 ${isSecondPage ? "opacity-100" : "opacity-0"}
                    md:text-row md:text-3xl md:gap-16 md:flex-nowrap
                `}>
                    <h2 className="font-extrabold uppercase text-xl w-full text-center
                        md:text-4xl md:w-auto
                    "> Conoce más </h2>
                    <p className="bg-gray-600/50 rounded-4xl px-4 py-1 w-1/3 text-center
                        md:w-auto md:px-8 md:py-2
                    "> Online </p>
                    <p className="bg-gray-600/50 rounded-4xl px-4 py-1 w-1/3 text-center
                        md:w-auto md:px-8 md:py-2
                    "> DVD </p>
                </div>
                <div ref={disclaimerRef} className={`text-white mx-auto py-4 px-4 border border-gray-600/60 rounded-4xl w-10/12 flex flex-col items-center justify-evenly ${isSecondPage ? "opacity-100" : "opacity-0"}
                    md:flex-row
                `}>
                    <p className="text-base w-full font-bold mb-4 text-center
                        md:text-lg md:2-2/12 md:mb-0
                    ">Descargo de responsabilidad</p>
                    <p className="text-xs w-11/12 text-justify
                        md:2-10/12 md:text-left
                    "> Este contenido incluye fragmentos de obras con derechos de autor, utilizados con fines educativos, de análisis, comentario o sin fines de lucro. No se pretende infringir ningún derecho, y todo el material pertenece a sus respectivos autores y productoras. Si eres titular de los derechos y deseas que se retire algún contenido, por favor contáctame y se procederá de inmediato. </p>
                </div>
                <ul ref={contactMeRef} className={`text-white flex w-8/12 my-12 mx-auto justify-center gap-4 flex-wrap ${isSecondPage ? "opacity-100" : "opacity-0"}
                    md:gap-16
                `}>
                    <li> <a href="https://www.linkedin.com/in/luis-felipe-linares-perdomo/" target="_blank"> Contactame. </a> </li>
                    <li> <a href="https://www.crunchyroll.com/" target="_blank"> Mira anime. </a> </li>
                    <li> <a href="https://www.wallpaperflare.com/" target="_blank"> WallpaperFlare. </a> </li>
                    <li> <a href="https://www.rockstargames.com/VI" target="_blank"> Gta VI </a> </li>
                </ul>
            </div>
            <div ref={aboutMeRef} className={`flex w-6/12 h-10 mx-auto text-white items-center justify-center gap-6 flex-wrap ${isSecondPage ? "opacity-100" : "opacity-0"}`}>
                <div className="h-full"> <img className="h-full" src={`${import.meta.env.BASE_URL}iconAnime.svg`} alt="anime logo" /> </div>
                <div>
                    <p> Anime Page I </p>
                    <h4 className="text-white text-center text-xs"> Por Luis Linares.</h4>
                </div>
            </div> 
        </footer>
    )
}

export default Footer;      