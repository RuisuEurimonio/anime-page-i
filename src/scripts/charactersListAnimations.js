import gsap from "gsap"

export const toggleCharacterList = (charactersList, isAnyOpen) =>{
    gsap.to(charactersList,{
        opacity: isAnyOpen ? 1 : 0,
        duration: 0.2
      })
}