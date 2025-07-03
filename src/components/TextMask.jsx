import {gsap, ScrollTrigger} from "./../scripts/gsapConfig"

gsap.registerPlugin(ScrollTrigger);

export default function AnimeMask({textRef, svgRef, whiteSvgRef}) {


  return (

    
    <div className="relative h-full overflow-hidden flex justify-center items-center z-30">
      <svg  className="absolute inset-0 w-full h-full z-30">
        <text
          ref={whiteSvgRef}
          y="30%"
          textAnchor="middle"
          fontSize="10000"
          fill="white"
          strokeWidth="7"
          stroke="black"         
          paintOrder="stroke"    
          strokeLinejoin="round" 
          className="font-extrabold uppercase text-5xl"
        >
          <tspan x="50%" dy="0">anime</tspan>
          <tspan x="50%" dy="1.2em">page</tspan>
        </text>
      </svg>
      <svg ref={svgRef} className="absolute inset-0 w-full h-full z-30">
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
              className='font-extrabold uppercase text-5xl z-40'
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