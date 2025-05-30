import gsap from "gsap";

export const toggleElementSidebar = (closeElement, isAnyOpen, openElement, closeAll = false) => {
    gsap.to(closeElement,{
        opacity: isAnyOpen ? 1 : 0,
        display: isAnyOpen ? "flex" : "none",
        duration: 0.2,
        onComplete: closeAll ? ()=>{} : ()=>{
          if(openElement){
            toggleElementSidebar(openElement, true)
          }
        }
      })
}