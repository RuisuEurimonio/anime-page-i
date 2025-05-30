import gsap from "gsap";

export const toggleElementSidebar = (closeElement, isAnyOpen, openElement, closeAll = false) => {
    console.log(isAnyOpen);
    gsap.to(closeElement,{
        opacity: isAnyOpen ? 1 : 0,
        display: isAnyOpen ? "block" : "none",
        duration: 0.2,
        onComplete: closeAll ? ()=>{} : ()=>{
          if(openElement){
            console.log("hla")
            toggleElementSidebar(openElement, true)
          }
        }
      })
}