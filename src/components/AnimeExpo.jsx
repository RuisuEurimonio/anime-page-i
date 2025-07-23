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
        return (<img src="/animes/soloLeveling/sololeveling.jpg" className="h-full w-full object-cover border-[16px] border-white" style={{ transform: minimal ? "rotate(-8deg" : "" }} onClick={handleOpenModal}></img>)
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

                <div className="flex items-center gap-10 relative pl-16 w-full
                        md:pl-64
                    ">
                    <button className="absolute top-20 left-10 bg-fuchsia-700 text-black font-bold py-1 px-4 rounded-3xl cursor-pointer" onClick={handleCloseModal}> Cerrar. </button>
                    <div className="font-bold flex min-w-[190vw]
                        md:w-[25rem]
                    ">
                        <div className="h-1/2
                        md:min-w-96
                            ">
                            {mainImage(true)}
                        </div>
                        <div className="h-1/2">
                            <h2 className="text-2xl text-fuchsia-600
                                    md:text-4xl
                                "> Solo leveling </h2>
                            <h3 className="text-xl text-pink-400
                                    md:text-3xl
                                "> Sube de nivel </h3>
                        </div>
                        <p className="text-lg text-white h-full
                                md:text-2xl
                            "> Solo Leveling sigue a Sung Jin-Woo, el cazador más débil del mundo, quien tras un evento misterioso obtiene la habilidad única de volverse más fuerte al completar misiones como en un videojuego. Su camino lo lleva de ser despreciado a convertirse en el cazador más poderoso.</p>
                    </div>
                    <div className="grid grid-cols-[25vw_25vw_25vw] grid-rows-[30vh_1fr_1fr] gap-10 h-[100vh]">
                        <div className="col-span-1 row-span-1"></div>
                        <img src="/animes/soloLeveling/sololeveling1.jpg" alt="" className="col-span-1 row-span-1 h-full w-full object-cover" />
                        <img src="/animes/soloLeveling/sololeveling2.jpg" alt="" className="col-span-1 row-span-3 h-[80vh] place-self-center w-full object-cover" />
                        <img src="/animes/soloLeveling/sololeveling3.jpg" alt="" className="col-span-2 row-span-2 h-full w-full object-cover" />
                    </div>
                    <div className="flex gap-16 items-center ml-10">
                        {listImages.map((item, index) => {
                            index++
                            if (index === listImages.length) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className={`object-cover min-w-[60vw] h-[100vh]`} />
                            } else if (index / 1 === 1) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className={`object-cover min-w-[30vw] h-[100vh]`} />
                            } else if (index / 2 === 1) {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className={`object-cover min-w-[40vw] h-[40vh]`} />
                            } else {
                                return <img key={item} src={`/animes/soloLeveling/${item}.jpg`} className={`object-cover min-w-[30vw] h-[70vh]`} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeExpo;