const ExpoResources = ({mainTitle, count = 0, firstElement, secondElement, thirdElement}) => {

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
                    "> <span className="hidden md:inline-block"> Ver todo </span>  <span> <img className="rotate-90 size-6 inline-block" src="/arrow.svg" /> </span> </button>
                </div>
            </div>
            <ul className="my-5 flex gap-8 flex-col items-center
                md:flex-row md
            ">
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                ">
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={firstElement?.imageUrl} alt={firstElement?.name +"picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {firstElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> 1 Tamaño. </p>
                </li>
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                ">
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={secondElement.imageUrl} alt={secondElement?.name + "picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {secondElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> 1 Tamaño. </p>
                </li>
                <li className="w-full bg-gray-700/40 hover:bg-gray-700/70 duration-300 cursor-pointer
                    md:w-4/12
                ">
                    <div className="h-9/12 relative flex justify-center items-center">
                        <img className="w-full h-full object-cover" src={thirdElement?.imageUrl} alt={thirdElement?.name + "picture"}></img>
                        <span className="absolute size-12 bg-white/50 p-2 rounded-full"> <img src="/play.svg" alt="play icon"/> </span>
                    </div>
                    <h3 className="w-11/12 mx-auto text-white mt-2 text-base
                        md:text-lg
                    "> {thirdElement?.name} </h3>
                    <p className="w-11/12 mx-auto text-gray-300 text-xs mb-5
                        md:text-base
                    "> 1 Tamaño. </p>
                </li>
                <li className="block md:hidden">
                    <DownloadAllElement/>
                </li>
            </ul>
        </div>
    )
} 

export default ExpoResources;