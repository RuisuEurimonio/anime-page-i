import {gsap} from "gsap";

const duration1 = document.getElementById("animeDuration");
const duration2 = document.getElementById("highDuration");
const iframe = document.getElementById("iframe");
const animePlay = document.getElementById("animePlay");
const highPlay = document.getElementById("highPlay");

let isOpen = false;

export const animePlayAnimation = () =>{
    if (duration1 && duration2 && iframe) {
            duration1.textContent = "Reproduciendo";
            duration2.textContent = "4:28"
            iframe.src = "https://www.youtube.com/embed/_NXrTujMP50?si=Rmv3-LcXdHoDdCic"
            gsap.to(animePlay,{
                opacity: 0,
                onComplete: ()=>{
                    gsap.to(highPlay,{
                        opacity: 1
                    })
                }
            })
        }
}

export const highPlayAnimation = () => {
    if(duration1 && duration2 && iframe){
            duration1.textContent = "4:21";
            duration2.textContent = "Repoduciendo";
            iframe.src = "https://www.youtube.com/embed/OEQPYC1Rvm4?si=n1lbFR1mXm9nQ9tU"
            gsap.to(highPlay,{
                opacity:0,
                onComplete: ()=>{
                    gsap.to(animePlay,{
                        opacity:1
                    })
                }
            })
        }
}

export const toggleModalTrailer = (modalTrailers) => {
    gsap.to(modalTrailers,{
      opacity: isOpen ? 0 : 1, 
      zIndex: isOpen ? 0 : 45,
      y: isOpen ? window.innerWidth : 0 ,
      duration: 1
    })
    isOpen = !isOpen;
}