import{S as g,j as r}from"./gsapConfig.Dx5dlI8u.js";import{r as n}from"./index.BJfUAbRs.js";import{I as c}from"./ImgZoom.BgPBWpnm.js";import{g as m}from"./index.D3jsOSc0.js";import"./index.Bb5XNTnp.js";const d=34,u=t=>`/frames/frieren/frieren_${t.toString()}.jpg`;m.registerPlugin(g);const _=()=>{const t=n.useRef(null),[i,p]=n.useState([]),o=n.useRef(null),a=n.useRef(null);return n.useEffect(()=>{window.localStorage.getItem("reduceAnimation")!=="true"&&window.innerWidth>768&&o&&a&&[o,a].forEach((s,e)=>{m.to(s.current,{y:e==0?-120:-115,ease:"power1.inOut",duration:1,scrollTrigger:{trigger:"#text-container_frieren",start:"top bottom",end:"bottom top",scrub:!0}})})},[]),n.useEffect(()=>{let s=[];for(let e=1;e<=d;e++){let l=u(e),f=new Image;f.src=l,s.push(f)}p(s),setTimeout(()=>{g.refresh()},100)},[]),n.useEffect(()=>{if(!t.current||i.length===0)return;const s={frame:0},e=m.timeline({scrollTrigger:{trigger:"#image-container_frieren",start:"top top",end:"bottom bottom",scrub:!0}});return e.to("#image-container_frieren",{opacity:1,duration:.1}),e.to(s,{frame:d-1,duration:.7,ease:"none",onUpdate:()=>{const l=Math.floor(s.frame);t.current&&(t.current.src=i[l].src)}}),e.to(t.current,{opacity:0,ease:"power2.in",duration:.1}),()=>{e.scrollTrigger?.kill(),e.kill()}},[i]),r.jsxs("div",{className:"relative",children:[r.jsx("div",{id:"image-container_frieren",className:`h-[400vh] w-full absolute top-[-40vh] bg-[rgb(18,3,20)] z-0 opacity-0\r
                sm:top-[-70vh]\r
            `,children:r.jsx("img",{ref:t,alt:"secuence of images from Frieren's video",src:u(1),loading:"eager",className:"sticky top-0 w-full h-screen object-cover"})}),r.jsx("div",{className:`pt-[250vh]\r
                sm:pt-[180vh]\r
            `,children:r.jsxs("div",{id:"text-container_frieren",className:`text-white z-10 relative px-10\r
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0\r
                    md:grid-cols-[12vw_1fr_1fr_0.5fr] md:grid-rows-[0.4fr_60vh_50vh] \r
                `,children:[r.jsx("div",{}),r.jsxs("div",{className:`font-bold\r
                    sm:col-span-2 sm:mb-16`,children:[r.jsx("h2",{className:`text-5xl uppercase place-content-end font-bold text-fuchsia-800 my-10 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]\r
                        md:text-8xl md:my-0\r
                        `,id:"frieren_container",children:" Frieren "}),r.jsx("h3",{className:`text-2xl text-fuchsia-600 mb-5 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]\r
                            md:text-4xl\r
                        `,children:" Miembro del grupo que derrotó al Rey Demonio. Aunque parece ser muy joven, nació en una raza longeva de elfos y ha vivido durante más de mil años. "})]}),r.jsx("div",{}),r.jsx("div",{className:`h-full w-full relative \r
                        sm:col-span-2 sm:row-span-1\r
                    `,children:r.jsx(c,{ref:o,otherClass:` bottom-0 w-full h-full\r
                            sm:h-11/12 sm:absolute\r
                        `,imgSrc:"/characters/frieren/frieren1.jpg",alt:"First image about Frieren character"})}),r.jsx(c,{otherClass:`h-full my-5 fixed w-full object-top\r
                        sm:row-span-2 sm:col-span-2 \r
                        md:my-0 md:h-9/12\r
                    `,imgSrc:"/characters/frieren/frieren2.jpg",alt:"Second image about Frieren character"}),r.jsx("div",{}),r.jsx(c,{ref:a,otherClass:`h-full w-full \r
                        sm:row-span-1 sm:col-span-1\r
                        md:h-10/12\r
                    `,imgSrc:"/characters/frieren/frieren3.jpg",alt:"Third image about Frieren character"})]})})]})};export{_ as default};
