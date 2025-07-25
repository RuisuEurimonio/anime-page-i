import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";
import ImgZoom from "./ImgZoom";

gsap.registerPlugin(ScrollTrigger)

const AnimeExpo = ({ keyName, fileName = keyName, fullName, quote, text, listImagesProp }) => {

    const [listImages, setListImages] = useState(listImagesProp);
    const [bgStyle, setBgStyle] = useState({})
    const [isDesktop, setIsDesktop] = useState(false)

    const lastImgGrid = useRef(null);

    const handleOpenModal = () => {
        document.body.style.overflowY = "hidden";

        gsap.set("#animeInfo_"+keyName, {
            display: "flex",
        })

        gsap.set("#bgAnimeInfo_"+keyName, {
            display: "block"
        });

         gsap.set("#optionsModal_"+keyName, {
            display: "flex"
        });

        ["#animeInfo_"+keyName, "#bgAnimeInfo_"+keyName, "#optionsModal_"+keyName].forEach((item) => {
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

        ["#animeInfo_"+keyName, "#bgAnimeInfo_"+keyName, "#optionsModal_"+keyName].forEach((item) => {
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

        //TODO : Ajustar el efecto

        requestAnimationFrame(()=>{
            if (!lastImgGrid.current) return;

        if (!isDesktop) {
            gsap.fromTo("#progressbar-modal_"+keyName, {
                x: "91.6667%"
            }, {
                x: "0%",
                ease: "none",
                scrollTrigger: {
                    trigger: "#animeInfo_"+keyName,
                    scroller: "#animeInfo_"+keyName,
                    start: "left left",
                    endTrigger: lastImgGrid.current,
                    end: "right right",
                    scrub: true,
                    horizontal: true,
                    markers: true
                }
            })

        } else {
            gsap.fromTo("#bgAnimeInfo_"+keyName, {
                x: 0
            }, {
                x: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: "#animeInfo_"+keyName,
                    scroller: "#animeInfo_"+keyName,
                    horizontal: true,
                    start: "left left",
                    end: "right right",
                    scrub: true,
                }
            })
        }
        })

        
        
    }, [isDesktop, listImages])

    useEffect(() => {
        setIsDesktop(window.innerWidth > 768)
    }, [])

    useEffect(() => {
        const gradientDirection = window.innerWidth > 768 ? "to right" : "to bottom";

        setBgStyle({
            backgroundImage: `
      linear-gradient(${gradientDirection}, rgba(0, 0, 0, 0.8) 10%, rgb(18,3,20) ${gradientDirection === "to right" ? "50%" : "80%"}, rgb(18,3,20) 100%),
      url('/animes/${keyName}/${fileName}_bg.jpg')
    `
        });
    }, []);

    const mainImage = (minimal = false) => {
        return (<img src={`/animes/${keyName}/${fileName}.jpg`} alt={`${minimal ? "small" : ""} portrait image from ${fullName} anime`} className="h-full w-full object-cover border-4 m-4 border-white
                md:border-[12px]
            " style={{ transform: minimal ? "rotate(-6deg" : "" }} onClick={handleOpenModal} />)
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
                " onClick={handleOpenModal}> Explorar {fullName} </button>
            </div>
            <div id={`bgAnimeInfo_${keyName}`} className="fixed h-full w-full bg-cover bg-center inset-0 top-0 left-0 z-[50] hidden" style={bgStyle}>
            </div>
            <div id={`optionsModal_${keyName}`} className="fixed top-5 left-5 w-[90vw] justify-between z-[65] hidden">
                        <button className="bg-fuchsia-700 text-black font-bold py-1 px-4 rounded-3xl cursor-pointer" onClick={handleCloseModal}> Cerrar. </button>
                        <div className="bg-fuchsia-700/10 rounded-full h-8 w-7/12 flex items-center justify-center
                                md:hidden
                            ">
                            <div className="relative w-10/12 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div id={`progressbar-modal_${keyName}`} className="absolute h-full w-full bg-gray-300 left-0 -translate-x-11/12 rounded-full">  </div>
                            </div>
                        </div>
                    </div>
            <div id={`animeInfo_${keyName}`} className="fixed top-0 left-0 w-[100%] h-screen overflow-x-scroll overflow-y-hidden bg-transparent z-[60] hidden">

                <div className="flex items-center gap-10 relative pl-5 w-full
                        md:pl-64
                    ">
                    <div className="font-bold grid grid-cols-[100vw_95vw] grid-rows-2 min-w-[190vw] h-8/12 my-auto mr-16
                        md:grid-cols-[1fr_1fr] md:grid-rows-1 md:min-w-[90vw] md:items-center
                    ">
                        <div className="grid-cols-1 grid-rows-1 w-10/12 h-10/12
                        md:h-full md:w-[50vw] md:row-span-1 md:col-span-1 md:mr-16
                            ">
                            {mainImage(true)}
                        </div>
                        <div className="grid-cols-1 grid-rows-1
                            md:grid-cols-none md:grid-rows-none md:hidden
                        "></div>
                        <h2 className="text-5xl text-fuchsia-600 grid-cols-1 grid-rows-1 uppercase font-extrabold h-11/12 self-end
                                md:text-4xl md:col-span-1 md:row-span-1 md:content-end md:hidden
                            "> Solo leveling </h2>
                        <div className="grid-cols-1 grid-rows-1
                            md:col-span-1 md:row-span-1
                        ">
                            <h2 className="text-5xl text-fuchsia-600 grid-cols-1 grid-rows-1 uppercase font-extrabold h-11/12 self-end hidden
                                md:text-4xl md:col-span-1 md:row-span-1 md:content-end md:block
                            "> {fullName} </h2>
                            <h3 className="text-base text-pink-400 uppercase font-bold
                                    md:text-2xl
                                "> {quote} </h3>
                            <p className="text-base text-white h-full
                                    md:text-xl
                                "> {text} </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[200vw_80vw_80vw] grid-rows-1 gap-10 h-[100vh] 
                        md:grid-cols-[25vw_25vw_25vw] md:grid-rows-[30vh_1fr_1fr]
                    ">
                        <div className="col-span-1 row-span-1 hidden
                            md:block
                        "></div>
                        <ImgZoom imgSrc={`/animes/${keyName}/${fileName}1.jpg`} alt={`First collage image about ${fullName} anime`} otherClass="col-span-1 row-span-1 h-full w-full object-cover
                        " />
                        <ImgZoom imgSrc={`/animes/${keyName}/${fileName}2.jpg`} alt={`Second collage image about ${fullName} anime`} otherClass="col-span-1  row-span-1 h-[80vh] place-self-center w-full object-cover
                        md:row-span-3" />
                        <ImgZoom imgSrc={`/animes/${keyName}/${fileName}3.jpg`} alt={`Third collage image about ${fullName} anime`} otherClass="col-span-1  row-span-1 h-full w-[90vh] object-cover
                            md:h-full md:col-span-2 md:row-span-2
                        " />
                    </div>
                    <div className="flex gap-16 items-center ml-10">
                        {listImages && listImages.map((item, index) => {
                            const isLast = index === listImages.length - 1;

                            let className = "object-cover h-[100vh] ";

                            if (isLast) {
                                className += "min-w-[100vw] md:min-w-[60vw]";
                            } else if (index === 0) {
                                className += "min-w-[80vw] md:min-w-[30vw] md:h-[70vh]";
                            } else if (index === 1) {
                                className += "min-w-[70vw] h-[40vh] md:min-w-[40vw] md:h-[40vh]";
                            } else {
                                className += "min-w-[60vw] h-[70vh] md:min-w-[30vw] md:h-[60vh]";
                            }

                            return (
                                <ImgZoom
                                    key={item}
                                    ref={isLast ? lastImgGrid : null}
                                    imgSrc={`/animes/${keyName}/${item}.jpg`}
                                    otherClass={className}
                                    alt={`${index+1} image about ${fullName} anime`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimeExpo;