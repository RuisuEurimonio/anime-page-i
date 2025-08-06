import React, { useEffect } from "react";

const ExpoElement = React.forwardRef(({nameElement, isVideo = false, sizes, urlElement},ref) =>{

    useEffect(()=>{
        console.log("hola")
    },[])

    return (
        <div ref={ref} className="fixed left-0 top-[100vh] duration-100 w-full h-screen bg-[rgb(18,3,20)] z-50 flex items-end justify-center ">
            <div className="w-9/12 h-11/12 bg-gray-700/40 rounded-t-3xl overflow-hidden">
                <div className="h-10/12">
                    {!isVideo && <img className="bg-black w-full object-cover h-full" src={urlElement} alt={`${nameElement} image`} />}
                    {isVideo && <video className="" src={urlElement}/> }
                </div>
                <div className="h-2/12 w-10/12 mx-auto flex justify-between items-center">
                    <div className="flex flex-col"> <span className="text-white text-2xl"> {nameElement} </span> <span className="text-lg text-gray-500"> {sizes} </span></div>
                    <button> <a className="px-4 py-2 rounded-full w-full h-full bg-white text-black flex items-center font-bold" href={urlElement} download={"Imagen"}> <span className="inline-block"> <img className="size-4 mr-2 rotate-90" src="/arrow2.svg" alt="" /> </span> Descargar </a> </button>
                </div>
            </div>
            <button className="absolute top-15 right-10"> <img className="size-10 p-2 bg-gray-700/40 rounded-full" src="/xmark.svg" alt="close icon"/> </button>
        </div>
    )
})

export default ExpoElement;