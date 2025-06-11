import { useEffect, useRef } from 'react'
import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"

gsap.registerPlugin(ScrollTrigger);

export default function AnimeMask({textRef}) {


  return (

    
    <div id="container-mask" className="relative h-screen bg-black overflow-hidden flex justify-center items-center">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="anime-text-mask" className='flex justify-center'>
            <rect width="100%" height="100%" fill="black" />
            <text
              ref={textRef}
              y="30%"
              textAnchor="middle"
              fontSize="10000"
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