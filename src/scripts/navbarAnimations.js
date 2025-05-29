import { gsap } from "gsap";

let isClose = true;
const sidebarMovementValue = 768 > window.innerWidth ? "-91.6667%" : "-50%";

export const openSidebar = (menuIcon, closeIcon, sidebar, imagesSidebar) =>{
    gsap.to(menuIcon, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      zIndex: 20,
      onComplete: ()=>{
        closeIconOpen(closeIcon)
        toggleSidebar(sidebar)
        toggleImagesSidebar(imagesSidebar)
      }
    })
    isClose = false;
}

const closeIconOpen = (closeIcon) => {
    gsap.to(closeIcon, {
          opacity: 1,
          scale: 1,
          zIndex: 50,
        });
}

const toggleSidebar = (sidebar) =>{
    gsap.to(sidebar, {
          right: isClose ? sidebarMovementValue : 0,
          delay: isClose ? 0.2 : 0
    });
}

const toggleImagesSidebar = (imagesSidebar) => {
    gsap.to(imagesSidebar, {
          opacity: isClose ? 0 : 1,
          display: isClose ? "none" : "block",
          delay: isClose ? 0 : 0.5,
        });
}

export const closeSidebar = (closeIcon, menuIcon, sidebar, imagesSidebar) =>{
    gsap.to(closeIcon, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      zIndex: 20,
      onComplete: () => {
        menuIconHidden(menuIcon)
        toggleSidebar(sidebar)
        toggleImagesSidebar(imagesSidebar)
      }
    })
    isClose = true
}

const menuIconHidden = (menuIcon) => {
    gsap.to(menuIcon, {
          opacity: 1,
          scale: 1,
          zIndex: 50,
          delay: 0.2,
    });
}