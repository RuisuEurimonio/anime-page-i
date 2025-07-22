import { useEffect, useState } from "react";


const AnimeExpo = ({}) => {

    const [listImages, setListImages] = useState([]);

    useEffect(()=>{

    },[])

    const mainImage = () =>{
        return (<img src="/animes/soloLeveling/sololeveling.jpg" className="h-full w-full object-cover"></img>)
    }

    return (
        <div className="relative w-full flex items-center p-0 m-0 h-screen overflow-x-hidden">
            <div className="w-11/12 h-5/12 m-auto border-[16px] relative hover:drop-shadow-pink-300 hover:drop-shadow-xl border-white duration-200 hover:cursor-pointer hover:rotate-2
                md:h-11/12 md:w-8/12
            ">
                {mainImage()}
                <button className=" absolute -bottom-16 right-0 left-0 mx-auto font-bold w-10/12 px-0.5 py-0.5 rounded-4xl bg-white
                    sm:py-1.5
                    md:py-2.5 md:bottom-5
                "> Explorar Solo Leveling </button>
            </div>
            <div className="absolute h-full overflow-x-scroll"> </div>
        </div>
    )
}

export default AnimeExpo;