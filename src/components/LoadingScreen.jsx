import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "../scripts/gsapConfig";
import { sendToGsap } from "../scripts/indexToScroll";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef(null);

  useEffect(() => {
    const startAnimation = () => {
      if (!loadingRef.current) return;

      gsap.fromTo(
        loadingRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 2,
          delay: 1.5,
          ease: "power4.in",
          onComplete: () => {
            gsap.set(loadingRef.current, { display: "none" });
            setLoading(false);
            sendToGsap();
          }
        }
      );
    };

    if (document.readyState === "complete") {
      startAnimation();
    } else {
      window.addEventListener("load", ()=> {
        startAnimation()
        ScrollTrigger.refresh();
    });
      return () => window.removeEventListener("load", startAnimation);
    }
  }, []);

  return (
    <>
      {loading && (
        <section
          ref={loadingRef}
          className="fixed top-0 w-full h-screen z-[9999] bg-[radial-gradient(circle,rgba(18,3,20,1)_99%,rgba(51,20,74,1)_0%)]"
        >
          <div className="flex items-center justify-center w-full h-full">
            <img src="/logoAnim.webp" alt="Logo de la página" className="size-32" />
          </div>
        </section>
      )}
    </>
  );
};

export default LoadingScreen;
