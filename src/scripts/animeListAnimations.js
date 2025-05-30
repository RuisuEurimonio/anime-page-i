import gsap from "gsap";

export const toggleAnimesList = (animesList, isAnyOpen) => {
    gsap.to(animesList,{
        opacity: isAnyOpen ? 1 : 0,
        display: isAnyOpen ? "block" : "none",
        duration: 0.2
      })
}
