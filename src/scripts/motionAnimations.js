import gsap from "gsap";

let fullMovementActive = true;

export const inputToggleQuestion = (movementInputBall) =>{
    gsap.to(movementInputBall,{
        x: fullMovementActive ? 22 : 0,
        duration: .5,
        ease: "power3.out"
      })
    fullMovementActive = !fullMovementActive;
}