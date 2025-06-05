import { useEffect, useRef } from 'react'
import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"

gsap.registerPlugin(ScrollTrigger);

export default function AnimeMask() {
  const textRef = useRef(null)

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.to(textRef.current,{
        fontSize: "128px",
        attr: {y: "30%"},
        ease: "expo.inOut",
        scrollTrigger:{
          trigger: "#container-mask",
          start: "top center",
          end: "center center",
          scrub: true,
          markers: true   
        }
      })
    })

    return ()=>{
      ctx.revert()
    }
  }, [])

  return (
    <div id="container-mask" className="relative h-screen bg-black overflow-hidden flex justify-center items-center">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="anime-text-mask">
            <rect width="100%" height="100%" fill="black" />
            <text
              ref={textRef}
              x="50%"
              y="100%"
              textAnchor="middle"
              fontSize="10000"
              fontWeight="bold"
              fill="white"
              strokeWidth="2"
              className='font-extrabold uppercase'
            >
              <tspan x="50%" dy="0">anime</tspan>
              <tspan x="50%" dy="1.2em">page</tspan>  
            </text>
          </mask>
        </defs>

        <image
          href="background.jpg"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#anime-text-mask)"
        />
      </svg>
    </div>
  )
}