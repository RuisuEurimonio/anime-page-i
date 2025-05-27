import gsap from "gsap";

export default () =>{
    document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("menuIcon") as HTMLElement;

            img?.addEventListener("click",()=>{
                gsap.to(img,{
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.5
                })
            })
    })
}