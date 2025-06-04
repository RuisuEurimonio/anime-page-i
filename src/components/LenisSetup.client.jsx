import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const LenisSetup = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
  }, []);

  return <>{ children }</>;
};

export default LenisSetup;
