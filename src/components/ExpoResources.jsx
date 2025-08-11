import { useRef, useState } from "react";
import ExpoElement from "./ExpoElement";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

gsap.registerPlugin(ScrollTrigger);

const ExpoResources = ({mainTitle, seeAllLink, count = 0, firstElement, secondElement, thirdElement, isPage = false, fullView = false}) => {

    const [nameElement, setNameElement] = useState("");
    const [sizes, setSizes] = useState("");
    const [urlElement, setUrlElement] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const expoModalRef = useRef(null);

    const handleOpenModal = (nameElement, sizes, urlElement) => {
        setNameElement(nameElement);
        setSizes(sizes);
        setUrlElement(urlElement);
        setIsModalVisible(true);

        const timeout = setTimeout(()=>{
            if(!expoModalRef.current) return;
    
            document.body.style.overflowY = "hidden"
            
            gsap.fromTo(expoModalRef.current,{
                top: "100vh"
            },{
                top: "0vh",
                duration: 0.5,
                ease: "power1.in"
            })
        , 100})

        return ()=>{ clearTimeout(timeout)}
    }

    const handleCloseModal = () =>{
        if(!expoModalRef.current) return;

        gsap.fromTo(expoModalRef.current,{
            top: "0vh"
        },{
            top: "100vh",
            duration: 0.5,
            ease: "power1.in"
        })

        const timeOut = setTimeout(()=>{
            document.body.style.overflowY = ""

            setNameElement("");
            setSizes("");
            setUrlElement("");
            setIsModalVisible(false);
        }, 1100)

        return ()=> clearTimeout(timeOut);
    }

    const handleVisitPage = (page) => {
        window.open(page, "_blank", "noopener,noreferrer")
    }

    const DownloadAllElement = ({extraClass = ""}) =>{
        return (<p className={`text-base cursor-pointer text-fuchsia-400/90 hover:text-fuchsia-400 ${extraClass}`}> Descargar todo <span> <img className="text-fuchsia-400 size-4 rotate-90 inline-block" src="/down.svg" alt="download all icon"/> </span> </p>)
    }

    return(
        <div className="w-10/12 mx-auto mb-15
            md:w-8/12
        ">
            <div className="flex justify-between">
                <h2 className="text-white text-2xl font-bold"> {mainTitle} <span className="border text-sm ml-5 border-gray-600/40 py-1 px-2">  {count ? count : 70} </span></h2>
                <div className="flex items-center gap-6 ">
                    <DownloadAllElement extraClass="hidden md:block" />
                    <button className="py-1 px-1 bg-gray-600/40 hover:bg-gray-600/60 duration-300 cursor-pointer rounded-4xl text-white
                        md:py-2 md:px-4
                    " onClick={()=> window.location.href = "/download/"+seeAllLink} > <span className="hidden md:inline-block"> Ver todo </span>  <span> <img className="rotate-90 size-6 inline-block" src="/arrow.svg" /> </span> </button>
                </div>
            </div>
            {!fullView && <ul className="my-5 flex gap-8 flex-col items-center
                md:flex-row md
            ">
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                " onClick={()=>{isPage ? handleVisitPage(firstElement?.pageUrl) : handleOpenModal(firstElement?.name, "1 Tamaño", firstElement?.imageUrl)} }>
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={firstElement?.imageUrl} alt={firstElement?.name +"picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {firstElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> {isPage ? "Visitar" : "1 Tamaño."} </p>
                </li>
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                " onClick={()=> {isPage ? handleVisitPage(secondElement?.pageUrl) : handleOpenModal(secondElement?.name, "1 Tamaño", secondElement?.imageUrl)}} >
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={secondElement.imageUrl} alt={secondElement?.name + "picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {secondElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    ">  {isPage ? "Visitar" : "1 Tamaño.   "} </p>
                </li>
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                " onClick={()=> {isPage ? handleVisitPage(thirdElement?.pageUrl) : handleOpenModal(thirdElement?.name, "1 Tamaño", thirdElement?.imageUrl)} }>
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={thirdElement?.imageUrl} alt={thirdElement?.name + "picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {thirdElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> {isPage ? "Visitar" : "1 Tamaño."} </p>
                </li>
                <li className="block md:hidden">
                    <DownloadAllElement/>
                </li>
            </ul>}
            {fullView && <ul>

            </ul>}
            {isModalVisible && <ExpoElement 
                key={nameElement+"key"}
                ref={expoModalRef}
                nameElement={nameElement}
                sizes={sizes}
                urlElement={urlElement}
                handleClose={handleCloseModal}
            />}
        </div>
    )
} 

export default ExpoResources;