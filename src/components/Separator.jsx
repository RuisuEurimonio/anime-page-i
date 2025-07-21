const Separator = () => {

    return (
        <div className="w-full border-t-4 px-5 mx-auto flex flex-col justify-evenly items-center py-12 bg-[rgb(240,236,209)] text-2xl font-extrabold
            md:px-32 md:flex-row md:text-4xl
        ">
            <div className="flex items-center flex-col justify-center
                md:flex-row md:justify-start
            "> <img src="/iconAnime.png" alt="" className="size-32"/> <span> Animes <br/> Series </span> </div>
            <p className="text-fuchsia-700 w-11/12 mx-auto
                md:text-right md:w-5/12
            "> Animes populares que no te puedes perder. </p>
        </div>
    )
}

export default Separator;