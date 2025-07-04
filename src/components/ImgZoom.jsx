const ImgZoom = ({imgSrc, ref, otherClass = ""}) => {

    return(
        <div ref={ref} className={"w-full relative duration-200 hover:border-8 border-white"+otherClass}>
            <img src={imgSrc} className="w-full h-full object-cover"/>
            <img src="/zoom.svg" className="absolute bottom-5 right-5 size-10 bg-pink-100 rounded-full p-2" />
        </div>
    )

}

export default ImgZoom;