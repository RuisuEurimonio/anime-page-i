import gsap from "gsap"

export const lowerLanguageIcon = (language, isAnyOpen) => {
    gsap.to(language,{
        zIndex: isAnyOpen ? 40 : 20
      })
}

export const toggleArrowIcon = (arrowLanguage, isAnyOpen) => {
  gsap.to(arrowLanguage, {
        rotate: isAnyOpen ? (window.innerWidth > 768 ? 180 : 360) : (window.innerWidth > 768 ? 360 : 180),
        duration: 1
      })
}

export const toggleLanguagesList = (listLanguages, isAnyOpen) => {
  gsap.to(listLanguages,{
        opacity: isAnyOpen ? 0 : 1,
        zIndex: isAnyOpen ? -10 : 30,
        duration: 0.2
      })
}