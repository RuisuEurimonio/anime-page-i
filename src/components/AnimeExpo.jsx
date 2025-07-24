import { useEffect, useState } from "react";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

gsap.registerPlugin(ScrollTrigger)

const AnimeExpo = ({ }) => {

    const [listImages, setListImages] = useState([]);
    const [bgStyle, setBgStyle] = useState({})
    const [isDesktop, setIsDesktop] = useState(false)

    const handleOpenModal = () => {
        document.body.style.overflowY = "hidden";

        gsap.set("#animeInfo", {
            display: "flex",
        })

        gsap.set("#bgAnimeInfo", {
            display: "block"
        });

        ["#animeInfo", "#bgAnimeInfo"].forEach((item) => {
            gsap.fromTo(item, {
                x: "100%",
            }, {
                x: "0",
                ease: "expo.out",
                duration: 1
            })
        })
    }

    const handleCloseModal = () => {
        document.body.style.overflowY = "";

        ["#animeInfo", "#bgAnimeInfo"].forEach((item) => {
            gsap.fromTo(item, {
                x: "0%",
            }, {
                x: "100%",
                duration: 2,
                ease: "expo.out",
                onComplete: () => {
                    gsap.set(item, {
                        display: "none",
                    })
                }
            })

        })
    }

    useEffect(() => {
        if(!isDesktop) return; 
        else{
            gsap.fromTo("#bgAnimeInfo", {
                x: 0
            }, {
                x: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: "#animeInfo",
                    scroller: "#animeInfo",
                    horizontal: true,
                    start: "left left",
                    end: "right right",
                    scrub: true,
                    markers: true
                }
            })
        }
    }, [])

    useEffect(() => {
        setListImages(["sololeveling4", "sololeveling5", "sololeveling6", "sololeveling7"])
        setIsDesktop(window.innerWidth > 768)
    }, [])

    useEffect(() => {
        const gradientDirection = window.innerWidth > 768 ? "to right" : "to bottom";

        setBgStyle({
            backgroundImage: `
      linear-gradient(${gradientDirection}, rgba(0, 0, 0, 0.8) 10%, rgb(18,3,20) ${gradientDirection === "to right" ? "50%" : "80%"}, rgb(18,3,20) 100%),
      url('/animes/soloLeveling/sololeveling_bg.jpg')
    `
        });
    }, []);

    const mainImage = (minimal = false) => {
        return (<img src="/animes/soloLeveling/sololeveling.jpg" className="h-full w-full object-cover border-4 m-4 border-white
                md:border-[16px]
            " style={{ transform: minimal ? "rotate(-6deg" : "" }} onClick={handleOpenModal}></img>)
    }

    return (
        <div className="relative w-full flex items-center p-0 m-0 h-screen overflow-hidden">
            <div className="w-11/12 h-5/12 m-auto relative hover:drop-shadow-pink-300 hover:drop-shadow-xl duration-200 hover:cursor-pointer hover:rotate-2
                md:h-11/12 md:w-8/12
            ">
                {mainImage()}
                <button className=" absolute -bottom-16 right-0 left-0 mx-auto font-bold w-10/12 px-0.5 py-0.5 rounded-4xl bg-white cursor-pointer
                    sm:py-1.5
                    md:py-2.5 md:bottom-5
                " onClick={handleOpenModal}> Explorar Solo Leveling </button>
            </div>
            <div id="bgAnimeInfo" className="fixed h-full w-full bg-cover bg-center inset-0 top-0 left-0 z-[50] hidden" style={bgStyle}>
            </div>
            <div id="animeInfo" className="fixed top-0 left-0 w-[100%] h-screen overflow-x-scroll overflow-y-hidden bg-transparent z-[60] hidden">

                <div className="flex items-center gap-10 relative pl-5 w-full
                        md:pl-64
                    ">
                    <button className="absolute top-5 left-20 bg-fuchsia-700 text-black font-bold py-1 px-4 rounded-3xl cursor-pointer" onClick={handleCloseModal}> Cerrar. </button>
                    <div className="font-bold grid grid-cols-[100vw_95vw] grid-rows-2 min-w-[190vw] h-8/12 my-auto mr-16
                        md:w-[25rem]
                    ">
                        <div className="grid-cols-1 grid-rows-1 w-9/12 h-10/12
                        md:h-60 md:w-[50vw]
                            ">
                            {mainImage(true)}
                        </div>
                        <div className="grid-cols-1 grid-rows-1
                            md:grid-cols-none md:grid-rows-none
                        "></div>
                        <h2 className="text-5xl text-fuchsia-600 grid-cols-1 grid-rows-1 uppercase font-extrabold h-11/12 self-end
                                md:text-4xl
                            "> Solo leveling </h2>
                        <div className="grid-cols-1 grid-rows-1">
                            <h3 className="text-base text-pink-400 uppercase font-bold
                                    md:text-3xl
                                "> Sube de nivel </h3>
                            <p className="text-base text-white h-full
                                    md:text-2xl
                                "> Solo Leveling sigue a Sung Jin-Woo, el cazador más débil del mundo, quien tras un evento misterioso obtiene la habilidad única de volverse más fuerte al completar misiones como en un videojuego. Su camino lo lleva de ser despreciado a convertirse en el cazador más poderoso.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[200vw_80vw_80vw] grid-rows-1 gap-10 h-[100vh] 
                        md:grid-cols-[25vw_25vw_25vw] md:grid-rows-[30vh_1fr_1fr]
                    ">
                        <div className="col-span-1 row-span-1 hidden
                            md:block
                        "></div>
                        <img src="/animes/soloLeveling/sololeveling1.jpg" alt="" className="col-span-1 row-span-1 h-full w-full object-cover" />
                        <img src="/animes/soloLeveling/sololeveling2.jpg" alt="" className="col-span-1  row-span-1 h-[80vh] place-self-center w-full object-cover" />
                        <img src="/animes/soloLeveling/sololeveling3.jpg" alt="" className="col-span-1  row-span-1 h-full w-[90vh] object-cover
                            md:h-full md:col-span-2 md:row-span-2
                        " />
                    </div>
                    <div className="flex gap-16 items-center ml-10">
                        {listImages.map((item, index) => {
                            index++
                            if (index === listImages.length) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className="object-cover min-w-[100vw] h-[100vh]
                                    md:min-w-[60vw]
                                " />
                            } else if (index / 1 === 1) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className="object-cover min-w-[80vw] h-[100vh]
                                    md:min-w-[30vw]
                                " />
                            } else if (index / 2 === 1) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className="object-cover min-w-[70vw] h-[40vh]
                                    md:min-w-[40vw]
                                " />
                            } else {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className="object-cover min-w-[60vw] h-[70vh]
                                    md:
                                " />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeExpo;