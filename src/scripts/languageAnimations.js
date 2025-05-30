import gsap from "gsap"

export const lowerLanguageIcon = (language, isAnyOpen) => {
    gsap.to(language,{
        zIndex: isAnyOpen ? 40 : 20
      })
}