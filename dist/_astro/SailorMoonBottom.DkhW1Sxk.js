import{S as f,j as r}from"./gsapConfig.Dx5dlI8u.js";import{r as s}from"./index.BJfUAbRs.js";import{I as d}from"./ImgZoom.BgPBWpnm.js";import{g as l}from"./index.D3jsOSc0.js";import"./index.Bb5XNTnp.js";const g=40,u=i=>`/frames/sailorMoon2/sailormoon_${i.toString()}.jpg`;l.registerPlugin(f);const v=()=>{const i=s.useRef(null),[n,p]=s.useState([]),m=s.useRef(null),c=s.useRef(null);return s.useEffect(()=>{let o=[];for(let t=1;t<=g;t++){let e=u(t),a=new Image;a.src=e,o.push(a)}p(o),setTimeout(()=>{f.refresh()},100)},[]),s.useEffect(()=>{window.localStorage.getItem("reduceAnimation")!=="true"&&window.innerWidth>768&&m&&c&&[m,c].forEach((o,t)=>{l.to(o.current,{y:t===0?-100:-130,ease:"power1.inOut",scrollTrigger:{trigger:"#text-container_sailorBottom",start:"top bottom",end:"bottom top",scrub:!0}})})},[]),s.useEffect(()=>{if(!i.current||n.length===0)return;const o={frame:0},t=l.timeline({scrollTrigger:{trigger:"#image-container_sailorBottom",start:"top top",end:"bottom bottom",scrub:!0}}),e=l.timeline({scrollTrigger:{trigger:"#image-container_sailorBottom",start:"top top",endTrigger:"#title_sailorBottom",end:"bottom+=100vh bottom",scrub:!0}});return t.to("#image-container_sailorBottom",{opacity:1,duration:.1}),e.to("#aux-title_sailorBottom",{opacity:1,y:"-8vh",duration:.2,delay:.05}),e.to({},{duration:.7}),e.set("#title_sailorBottom",{opacity:1}),e.set("#aux-title_sailorBottom",{opacity:0}),t.to(o,{frame:g-1,duration:.8,ease:"none",onUpdate:()=>{const a=Math.floor(o.frame);i.current&&(i.current.src=n[a].src)}},"<"),t.to("#image-container_sailorBottom",{opacity:0,ease:"power2.in",duration:.1}),()=>{e.scrollTrigger?.kill(),e.kill(),t.scrollTrigger?.kill(),t.kill()}},[n]),r.jsxs("div",{className:"relative",children:[r.jsxs("div",{id:"image-container_sailorBottom",className:"h-[400vh] w-full absolute top-[-500px] bg-[rgb(18,3,20)] z-0 opacity-0",children:[r.jsx("img",{ref:i,src:u(1),className:"sticky top-0 w-full h-screen object-cover",alt:"Secuence of imagenes about the second Sailor's video"}),r.jsx("h2",{id:"aux-title_sailorBottom",className:`fixed text-5xl uppercase font-bold text-pink-500 bottom-8 ml-[calc(2.5rem)] pr-10 opacity-0\r
                    md:text-6xl md:ml-[calc(12vw+2.5rem)] md:pr-0`,children:' "Conejo de la Luna"  '})]}),r.jsx("div",{className:"pt-[220vh]",children:r.jsxs("div",{id:"text-container_sailorBottom",className:`text-white z-10 relative px-10\r
                sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.8fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0\r
                md:grid-cols-[12vw_1.4fr_1.2fr_12vw] md:grid-rows-[0.4fr_1fr_5fr_3fr]\r
            `,children:[r.jsx("div",{}),r.jsx("h2",{id:"title_sailorBottom",className:`text-5xl uppercase place-content-start font-bold text-pink-500 my-10 opacity-0\r
                    md:text-6xl md:my-0 md:col-span-3 md:w-11/12\r
                `,children:' "Conejo de la Luna"  '}),r.jsx("div",{}),r.jsx("div",{className:`font-bold w-11/12\r
                    sm:w-10/12\r
                `,children:r.jsx("h3",{className:`text-2xl text-fuchsia-800 mb-5\r
                        md:text-4xl\r
                    `,children:' "En el nombre de la luna te castigaré" '})}),r.jsx("div",{className:"md:flex md:items-center md:justify-center font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]",children:r.jsx("p",{className:`text-xl mb-10\r
                        md:text-2xl md:mb-0 md:w-10/12\r
                    `,children:" No me rendiré. Porque sé que mientras tenga el amor de mis amigas y crea en mí misma, puedo superar cualquier oscuridad. "})}),r.jsx("div",{}),r.jsx("div",{className:`h-full w-full relative\r
                    sm:col-span-2\r
                `,children:r.jsx(d,{ref:m,otherClass:`\r
                        sm:11/12 sm:absolute \r
                        md:mt-20\r
                    `,imgSrc:"/characters/sailormoon/sailor4.jpg",alt:"First Sailor's second image"})}),r.jsx(d,{otherClass:`h-full my-5 \r
                    sm:row-span-2 sm:col-span-1\r
                    md:my-0 md:h-10/12 \r
                `,imgSrc:"/characters/sailormoon/sailor5.jpg",alt:"Second Sailor's second image"}),r.jsx("div",{}),r.jsx("div",{}),r.jsx(d,{ref:c,otherClass:`\r
                sm:row-span-1 sm:col-span-1 md:mt-20\r
                `,imgSrc:"/characters/sailormoon/sailor6.jpg",alt:"Third Sailor's second image"})]})})]})};export{v as default};
