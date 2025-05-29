import { gsap } from "gsap";

export const menuIconClose = (menuIcon, closeIcon, sidebar, imagesSidebar) =>{
    gsap.to(menuIcon, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      zIndex: 20,
      onComplete: ()=>{
        closeIconOpen(closeIcon)
        openSidebar(sidebar)
        openImagesSidebar(imagesSidebar)
      }
    })
}

const closeIconOpen = (closeIcon) => {
    gsap.to(closeIcon, {
          opacity: 1,
          scale: 1,
          zIndex: 50,
        });
}

const openSidebar = (sidebar) =>{
    gsap.to(sidebar, {
          right: 0,
    });
}

const openImagesSidebar = (imagesSidebar) => {
    gsap.to(imagesSidebar, {
          opacity: 1,
          display: "block",
          delay: 0.5,
        });
}