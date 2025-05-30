import gsap from "gsap";

const motionContainer = document.getElementById("motionContainer");
const motionArrow = document.getElementById("motionArrow");

let fullMovementActive = true;
let openMotion = false;

export const inputToggleQuestion = (movementInputBall) =>{
    gsap.to(movementInputBall,{
        x: fullMovementActive ? 22 : 0,
        duration: .5,
        ease: "power3.out"
      })
    fullMovementActive = !fullMovementActive;
}

export const toggleMotionContainer = () => {
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