import{S as g,j as r}from"./gsapConfig.Dx5dlI8u.js";import{r as o}from"./index.BJfUAbRs.js";import{I as c}from"./ImgZoom.BgPBWpnm.js";import{g as m}from"./index.D3jsOSc0.js";import"./index.Bb5XNTnp.js";const u=30,f=t=>`/frames/sailorMoon/sailor_${t.toString()}.png`;m.registerPlugin(g);const w=()=>{const t=o.useRef(null),[a,p]=o.useState([]),i=o.useRef(null),n=o.useRef(null);return o.useEffect(()=>{window.localStorage.getItem("reduceAnimation")!=="true"&&window.innerWidth>768&&i&&n&&[i,n].forEach((s,e)=>{m.to(s.current,{y:e==0?-150:-145,ease:"power1.inOut",duration:1,scrollTrigger:{trigger:"#text-container_sailor",start:"center bottom",end:"bottom bottom",scrub:!0}})})},[]),o.useEffect(()=>{let s=[];for(let e=1;e<=u;e++){let l=f(e),d=new Image;d.src=l,s.push(d)}p(s),setTimeout(()=>{g.refresh()},100)},[]),o.useEffect(()=>{if(!t.current||a.length===0)return;const s={frame:0},e=m.timeline({scrollTrigger:{trigger:"#image-container_sailor",start:"top top",end:"bottom bottom",scrub:!0}});return e.to("#image-container_sailor",{opacity:1,duration:.1}),e.to(s,{frame:u-1,duration:.7,ease:"none",onUpdate:()=>{const l=Math.floor(s.frame);t.current&&(t.current.src=a[l].src)}}),e.to(t.current,{opacity:0,ease:"power2.in",duration:.1}),()=>{e.scrollTrigger?.kill(),e.kill()}},[a]),r.jsxs("div",{className:"relative",children:[r.jsx("div",{id:"image-container_sailor",className:"h-[400vh] w-full absolute top-[-70vh] bg-[rgb(18,3,20)] z-0 opacity-0",children:r.jsx("img",{ref:t,src:f(1),className:"sticky top-0 w-full h-screen object-cover",alt:"Secuence of imagenes about the Sailor's video"})}),r.jsx("div",{className:"pt-[180vh]",children:r.jsxs("div",{id:"text-container_sailor",className:`text-white z-10 relative px-10\r
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0\r
                    md:grid-cols-[12vw_1fr_1fr_1fr] md:grid-rows-[0.4fr_1fr_0.5fr_0.5fr]\r
                `,children:[r.jsx("div",{}),r.jsx("h2",{className:`text-5xl uppercase place-content-end font-bold text-pink-300 my-10\r
                        md:text-8xl md:my-0\r
                    `,id:"sailormoon_container",children:" Usagi Tsukino "}),r.jsx("div",{}),r.jsx("div",{}),r.jsx("div",{}),r.jsxs("div",{className:`font-bold w-11/12\r
                        sm:w-10/12\r
                    `,children:[r.jsx("h3",{className:`text-2xl text-pink-400 mb-5\r
                            md:text-4xl\r
                        `,children:' "El verdadero poder no está en destruir, sino en sanar, perdonar y amar incluso cuando todo parece perdido." '}),r.jsx("p",{className:`text-xl text-gray-700 mb-10\r
                            md:text-2xl md:mb-0\r
                        `,children:" Si bien en un principio Usagi no era más que una adolescente perezosa, ingenua y un tanto llorona; con el tiempo se vuelve más valiente, decidida y eficaz. Además de que su naturaleza gentil junto a su gran corazón la convierte en la portadora y guardiana del poderoso Cristal de Plata. "})]}),r.jsx("div",{className:`h-full w-full relative\r
                        sm:col-span-2 sm:row-span-2\r
                    `,children:r.jsx(c,{ref:i,otherClass:` bottom-0 relative w-full h-full\r
                            sm:11/12 sm:absolute\r
                        `,imgSrc:"/characters/sailormoon/sailor3.jpg",alt:"First Sailor's image"})}),r.jsx("div",{}),r.jsx(c,{otherClass:`h-full my-5 fixed w-full h-full\r
                        sm:row-span-2 sm:col-span-1\r
                        md:my-0\r
                    `,imgSrc:"/characters/sailormoon/sailor2.jpg",alt:"Second Sailor's image"}),r.jsx("div",{}),r.jsx(c,{ref:n,otherClass:`border-white hover:border-8 duration-200 h-full w-full object-cover\r
                        sm:row-span-1 sm:col-span-1\r
                        md:h-10/12\r
                    `,imgSrc:"/characters/sailormoon/sailor1.jpg",alt:"Third Sailor's image"})]})})]})};export{w as default};
