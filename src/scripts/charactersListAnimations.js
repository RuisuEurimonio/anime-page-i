import gsap from "gsap"
import { toggleAnimesList } from "./animeListAnimations"

export const toggleCharacterList = (characterItem, isAnyOpen, openElement, closeAll = false) =>{
    gsap.to(characterItem,{
        opacity: isAnyOpen ? 1 : 0,
        zIndex: isAnyOpen ? 30 : -10,
        display: isAnyOpen ? "block" : "none",
        duration: 0.2,
        onComplete: closeAll ? () => {} : () => {
          if(openElement){
            toggleAnimesList(openElement, true)
          }
        }
      })
}
