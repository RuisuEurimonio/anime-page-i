import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimeMask() {
  const textRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    gsap.to(textRef.current, {
      attr: { y: '50%' },
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => lenis.destroy()
  }, [])

  return (
    <div className="absolute top-0 h-screen bg-black overflow-hidden z-[100]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <mask id="anime-text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              ref={textRef}
              x="50%"
              y="120%"
              textAnchor="middle"
              fontSize="160"
              fontWeight="bold"
              fill="white"
              fontFamily="sans-serif"
              letterSpacing="0.05em"
            >
              anime page
            </text>
          </mask>
        </defs>

        <image
          href="miku.jpg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#anime-text-mask)"
        />
      </svg>
    </div>
  )
}
