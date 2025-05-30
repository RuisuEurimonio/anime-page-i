import gsap from "gsap";

export const toggleTrailerList = (trailerList, isAnyOpen) => {
    console.log(isAnyOpen)
    gsap.to(trailerList,{
        opacity: isAnyOpen ? 1 : 0,
        duration: 0.2
      })
}