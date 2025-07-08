import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "../scripts/gsapConfig";

const LenisSetup = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body,{
      scrollTop(value){
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y
      },
      getBoundingClientRect(){
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: windows.innerHeight
        }
      },
      pinType: document.body.style.transform ? "transform" : "fixed"
    })

    ScrollTrigger.addEventListener("refresh", ()=> lenis.update())
    ScrollTrigger.refresh()
  },[])

  return <>{ children }</>;
};

export default LenisSetup;
