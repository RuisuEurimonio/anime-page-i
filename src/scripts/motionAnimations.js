import gsap from "gsap";

const motionContainer = document.getElementById("motionContainer");
const motionArrow = document.getElementById("motionArrow");

const movementInputBall = document.getElementById("movementInputBall");

let isActive = window.localStorage.getItem("reduceAnimation") === "true";
let openMotion = false;

const animationButton = () =>{
  gsap.to(movementInputBall,{
        x: isActive ? 22 : 0,
        backgroundColor: isActive ? "var(--color-purple-950)" : "black",
        duration: .5,
        ease: "power3.out"
      })
    
}

export const inputToggleQuestion = () =>{
    isActive = !isActive;
    animationButton();
    window.localStorage.setItem("reduceAnimation", isActive ? "true" : "false");
    window.location.reload()
}

export const toggleMotionContainer = () => {
  console.log(isActive)
  animationButton();
    gsap.to(motionContainer,{
        opacity: openMotion ? 0 : 1,
        zIndex: openMotion ? -10 : 30,
        duration: 0.2
      })
    animationArrow();
    openMotion = !openMotion;
}

const animationArrow = () => {
    gsap.to(motionArrow,{
        rotate: openMotion ? (window.innerWidth > 768 ? 180 : 360) : (window.innerWidth > 768 ? 360 : 180),
        duration: 1
      })
}

export const lowerMotion = (motion, isAnyOpen) => {
  gsap.to(motion,{
        zIndex: isAnyOpen ? 40 : 20
        })
}