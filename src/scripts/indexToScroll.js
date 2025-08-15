import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

export const sendToGsap = () =>{
    if(window.location.pathname !== "/" || window.location.hash === "") return;

    gsap.registerPlugin(ScrollToPlugin)

        gsap.to(window,{
            scrollTo: { y: window.location.hash+"_container", offsetX: -500},
            duration: 0.5,
            ease: "power2.inOut"
        })
    
}