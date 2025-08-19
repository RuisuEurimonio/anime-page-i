import{S as p,j as e}from"./gsapConfig.Dx5dlI8u.js";import{r as a}from"./index.BJfUAbRs.js";import{I as l}from"./ImgZoom.BgPBWpnm.js";import{g as c}from"./index.D3jsOSc0.js";import"./index.Bb5XNTnp.js";const u=40,f=s=>`/frames/mikasa2/mikasa_${s.toString()}.jpg`;c.registerPlugin(p);const k=()=>{const s=a.useRef(null),[o,g]=a.useState([]),n=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{window.localStorage.getItem("reduceAnimation")!=="true"&&window.innerWidth>768&&n&&i&&[n,i].forEach((t,r)=>{c.to(t.current,{y:r===0?-100:-260,ease:"power1.inOut",duration:1,scrollTrigger:{trigger:"#text-container_mikasaBottom",start:"top-=200px bottom",end:"bottom top",scrub:!0}})})},[]),a.useEffect(()=>{let t=[];for(let r=1;r<=u;r++){let m=f(r),d=new Image;d.src=m,t.push(d)}g(t),setTimeout(()=>{p.refresh()},100)},[]),a.useEffect(()=>{if(!s.current||o.length===0)return;const t={frame:0},r=c.timeline({scrollTrigger:{trigger:"#image-container_mikasaBottom",start:"top top",end:"bottom bottom",scrub:!0}});return r.to("#image-container_mikasaBottom",{opacity:1,duration:.1}),r.to(t,{frame:u-1,duration:.7,ease:"none",onUpdate:()=>{const m=Math.floor(t.frame);s.current&&(s.current.src=o[m].src)}}),r.to(s.current,{opacity:0,ease:"power2.in",duration:.1}),()=>{r.scrollTrigger?.kill(),r.kill()}},[o]),e.jsxs("div",{className:"relative",children:[e.jsx("div",{id:"image-container_mikasaBottom",className:"h-[400vh] w-full absolute top-[-450px] bg-[rgb(18,3,20)] z-0 opacity-0",children:e.jsx("img",{ref:s,src:f(1),alt:"Secuence of imagenes from Mikasa's second video",className:"sticky top-0 w-full h-screen object-cover"})}),e.jsx("div",{className:`pt-[200vh]\r
                sm:pt-[180vh]\r
            `,children:e.jsxs("div",{id:"text-container_mikasaBottom",className:`text-white z-10 relative px-10\r
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0\r
                    md:grid-cols-[12vw_1.3fr_1fr_12vw] md:grid-rows-[1fr_1fr_2fr_1.5fr]\r
                `,children:[e.jsx("div",{}),e.jsx("h2",{className:`text-5xl uppercase text-pink-400 my-10 font-bold\r
                            sm:col-span-2 sm:place-self-end sm:mx-14\r
                            md:text-7xl md:mt-0 md:mb-20\r
                        `,children:' "Si no peleamos, no podemos ganar." '}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("p",{className:`text-xl text-fuchsia-300 mb-10 font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]\r
                            sm:place-self-end sm:mb-10 sm:mx-14 \r
                            md:text-2xl md:mt-0 \r
                        `,children:' Eso crea en ella un vacío emocional que intenta llenar a través de su conexión con Eren y Armin. Su lealtad, fuerza y disciplina surgen de no querer perder esa "nueva familia". '}),e.jsx("h3",{className:`text-2xl text-purple-100 mb-5 font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]\r
                            md:text-3xl md:mb-16\r
                        `,children:" Ante la crueldad del mundo, Mikasa entrena duro y se convierte en la mejor de su clase, no por gloria, sino porque ser fuerte le da control en un mundo caótico. "}),e.jsx("div",{}),e.jsx("div",{}),e.jsx(l,{otherClass:` w-full h-full \r
                            sm:row-span-2 sm:h-10/12\r
                        `,imgSrc:"/characters/mikasa/mikasa4.jpg",alt:"First Mikasa's second image"}),e.jsx(l,{ref:n,otherClass:`h-full my-5 w-full\r
                        md:my-0 md:h-10/12 md:col-span-2\r
                    `,imgSrc:"/characters/mikasa/mikasa5.jpg",alt:"Second Mikasa's second image"}),e.jsx("div",{}),e.jsx(l,{ref:i,otherClass:`h-full w-full \r
                        sm:row-span-1 sm:col-span-1\r
                        md:h-10/12\r
                    `,imgSrc:"/characters/mikasa/mikasa6.jpeg",alt:"Third Mikasa's second image"}),e.jsx("div",{})]})})]})};export{k as default};
