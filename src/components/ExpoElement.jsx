import React from "react";

const ExpoElement = React.forwardRef(({nameElement, isVideo = false, sizes, urlImage, urlVideo = urlImage, handleClose},ref) =>{

    return (
        <div ref={ref} className="fixed left-0 top-[100vh] duration-100 w-full h-screen bg-[rgb(18,3,20)] z-50 flex items-end justify-center ">
            <div className="w-full h-10/12 bg-gray-700/40 rounded-t-3xl overflow-hidden
                md:w-9/12 md:h-11/12
            ">
                <div className="h-9/12
                    md:h-10/12
                ">
                    {!isVideo && <img className="bg-black w-full object-cover h-full" src={urlImage} alt={`${nameElement} image`} />}
                    {isVideo && <video className="w-full object-cover h-full bg-black" src={urlVideo} controls/> }
                </div>
                <div className="h-3/12 w-10/12 mx-auto flex justify-center gap-3  flex-col
                    md:h-2/12 md:flex-row md:justify-between md:items-center
                ">
                    <div className="flex flex-col"> <span className="text-white text-xl
                        md:text-2xl
                    "> {nameElement} </span> <span className="text-base text-gray-500
                        md:text-lg
                    "> {sizes} </span></div>
                    <button> <a className="px-4 py-2 rounded-full w-full h-full bg-white text-black flex items-center font-bold text-center justify-center" href={isVideo ? urlVideo : urlImage} download={isVideo ? "video" : "imagen"}> <span className="inline-block"> <img className="size-4 mr-2 rotate-90" src="/arrow2.svg" alt="Arrow download icon" /> </span> Descargar </a> </button>
                </div>
            </div>
            <button onClick={handleClose} className="cursor-pointer absolute top-3 right-10
                md:top-15
            "> <img className="size-10 p-2 bg-gray-700/40 rounded-full" src="/xmark.svg" alt="close icon"/> </button>
        </div>
    )
})

export default ExpoElement;