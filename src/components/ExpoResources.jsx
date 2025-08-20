import { useRef, useState } from "react";
import ExpoElement from "./ExpoElement";
import { gsap, ScrollTrigger } from "../scripts/gsapConfig";

gsap.registerPlugin(ScrollTrigger);

const ExpoResources = ({mainTitle, srcAll, seeAllLink = "", count = 3, firstElement, secondElement, thirdElement, isPage = false, isVideo = false, fullView = false, listFullView = [{}]}) => {

    const [nameElement, setNameElement] = useState("");
    const [sizes, setSizes] = useState("");
    const [urlElement, setUrlElement] = useState("");
    const [urlVideo, setUrlVideo] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const expoModalRef = useRef(null);

    const handleOpenModal = (nameElement, sizes, urlElement, urlVideo = urlElement) => {
        setNameElement(nameElement);
        setSizes(sizes);
        setUrlElement(urlElement);
        setUrlVideo(urlVideo)
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
        return (<a className={`text-base cursor-pointer text-fuchsia-400/90 hover:text-fuchsia-400 ${extraClass}`} download href={srcAll}> Descargar todo <span> <img className="text-fuchsia-400 size-4 rotate-90 inline-block" src="/down.svg" loading="lazy" alt="download all icon"/> </span> </a>)
    }

    const ElementList = ({element}) => {
        return (<li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer h-80
                    md:w-full
                " onClick={()=>{isPage ? handleVisitPage(element?.pageUrl) : handleOpenModal(element?.name, "1 Tamaño", element?.imageUrl, element?.url)} }>
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={import.meta.env.BASE_URL+element?.imageUrl} loading={seeAllLink === "" ? "eager" : "lazy"} alt={"Imagen promocional, fanArt o extracción del anime: "+element?.name +""}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src={"/play.svg"} loading={seeAllLink === "" ? "eager" : "lazy"} alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {element?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> {mainTitle === "Videos" ? "1 Formato" : isPage ? "Visitar" : "1 Tamaño."} </p>
                </li>)
    }

    return(
        <div className="w-10/12 mx-auto mb-15
            md:w-8/12
        ">
            <div className="flex justify-between">
                <h2 className="text-white text-2xl font-bold"> {mainTitle} <span className="border text-sm ml-5 border-gray-600/40 py-1 px-2">  {count ? count : 70} </span></h2>
                <div className="flex items-center gap-6 ">
                    {!isPage && <DownloadAllElement extraClass="hidden md:block" />}
                    {!fullView && <a className="py-1 px-1 bg-gray-600/40 hover:bg-gray-600/60 duration-300 cursor-pointer rounded-4xl text-white
                        md:py-2 md:px-4
                    " href={import.meta.env.BASE_URL+"/download/"+seeAllLink} > <span className="hidden md:inline-block"> Ver todo </span>  <span> <img className="rotate-90 size-6 inline-block" src="/arrow.svg" loading={seeAllLink === "" ? "eager" : "lazy"} alt="Arrow see all icon"/> </span> </a>}
                </div>
            </div>
            {!fullView && <ul className="my-5 flex gap-8 flex-col items-center
                md:flex-row md
            ">
                <ElementList element={firstElement} />
                <ElementList element={secondElement} />
                <ElementList element={thirdElement} />
                
                <li className="block md:hidden">
                    <DownloadAllElement/>
                </li>
            </ul>}
            {fullView && listFullView.length > 0 && <ul className="my-5 grid gap-8 grid-cols-1
                md:flex-row md:grid-cols-3
            "> 
                {listFullView.map((item)=>{
                    return(
                    <ElementList element={item} key={item.id+item.name} />
                )})}
            </ul>}
            {isModalVisible && <ExpoElement 
                key={nameElement+"key"}
                ref={expoModalRef}
                nameElement={nameElement}
                sizes={sizes}
                urlImage={urlElement}
                urlVideo={urlVideo}
                isVideo={isVideo}
                handleClose={handleCloseModal}
            />}
        </div>
    )
} 

export default ExpoResources;