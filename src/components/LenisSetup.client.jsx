import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "../scripts/gsapConfig";
import { gsap } from "../scripts/gsapConfig";

const LenisSetup = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    const updateLenis = (time) => {
      // GSAP trabaja en segundos y Lenis espera milisegundos.
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    let refreshTimer;
    let lastDocumentHeight = 0;

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
      lastDocumentHeight = document.documentElement.scrollHeight;
    };

    // Agrupa los cambios de layout provocados por hidratacion, imagenes y fuentes.
    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(refresh, 120);
    };

    const onLoad = () => scheduleRefresh();
    const onResize = () => scheduleRefresh();
    const onAssetLoad = (event) => {
      if (event.target instanceof HTMLImageElement) scheduleRefresh();
    };

    const resizeObserver = new ResizeObserver(() => {
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight !== lastDocumentHeight) {
        scheduleRefresh();
      }
    });

    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);
    document.addEventListener("load", onAssetLoad, true);
    resizeObserver.observe(document.body);
    document.fonts?.ready.then(scheduleRefresh);
    refresh();

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("load", onAssetLoad, true);
      resizeObserver.disconnect();
      gsap.ticker.remove(updateLenis);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default LenisSetup;
