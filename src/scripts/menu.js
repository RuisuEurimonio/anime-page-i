import gsap from "gsap";

const elements = ["characters", "animes", "trailers", "download"];

elements.map((element)=>{
    document.getElementById(element).addEventListener("click",()=>{
        handleChange(element);
    })
})

const handleChange = (element) => {
    gsap.fromTo("#"+element,{
        backgroundColor: "rgba(255,255,255,0)",
        color: "rgb(0,0,0)"
    },{
        backgroundColor: "rgba(255,255,255,1",
        color: "rgb(255,255,255)"
    })

    const otherElements = elements.filter(item => item !== element);
    otherElements.forEach((item)=>{
        gsap.to("#"+item,{
            backgroundColor: "rgba(255,255,255,0)",
            color: "rgb(0,0,0)"
        })
    })
}