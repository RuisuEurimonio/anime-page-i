import gsap from "gsap";
import { toggleAnimesList } from "./animeListAnimations";

export const toggleTrailerList = (trailerElement, isAnyOpen, openElement, closeAll = false) => {
    gsap.to(trailerElement,{
        opacity: isAnyOpen ? 1 : 0,
        display: isAnyOpen ? "block" : "none",
        duration: 0.2,
        onComplete: closeAll ? ()=>{} : ()=>{
          if(openElement){
            toggleAnimesList(openElement, true)
          }
        }
      })
}
