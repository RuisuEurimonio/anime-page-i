import{S as p,j as e}from"./gsapConfig.Dx5dlI8u.js";import{r as t}from"./index.BJfUAbRs.js";import{I as m}from"./ImgZoom.BgPBWpnm.js";import{g as l}from"./index.D3jsOSc0.js";import"./index.Bb5XNTnp.js";const u=48,f=r=>`/frames/mikasa/mikasa_${r.toString()}.jpg`;l.registerPlugin(p);const b=()=>{const r=t.useRef(null),[i,g]=t.useState([]),c=t.useRef(null),o=t.useRef(null);return t.useEffect(()=>{window.innerWidth>768&&r&&o&&[c,o].forEach((s,a)=>{l.to(s.current,{y:a===0?-100:-120,ease:"power1.inOut",duration:1,scrollTrigger:{trigger:"#text-container_mikasa",start:"top-=200px bottom",end:"bottom+=200px top",scrub:!0}})})},[]),t.useEffect(()=>{let s=[];for(let a=1;a<=u;a++){let n=f(a),d=new Image;d.src=n,s.push(d)}g(s),setTimeout(()=>{p.refresh()},100)},[]),t.useEffect(()=>{if(!r.current||i.length===0)return;const s={frame:0},a=l.timeline({scrollTrigger:{trigger:"#image-container_mikasa",start:"top top",end:"bottom bottom",scrub:!0}});return a.to("#image-container_mikasa",{opacity:1,duration:.1}),a.to(s,{frame:u-1,duration:.7,ease:"none",onUpdate:()=>{const n=Math.floor(s.frame);r.current&&(r.current.src=i[n].src)}}),a.to(r.current,{opacity:0,ease:"power2.in",duration:.1}),()=>{a.scrollTrigger?.kill(),a.kill()}},[i]),e.jsxs("div",{className:"relative",children:[e.jsx("div",{id:"image-container_mikasa",className:"h-[400vh] w-full absolute top-[-450px] bg-[rgb(18,3,20)] z-0 opacity-0",children:e.jsx("img",{ref:r,src:f(1),alt:"Mikasa's video frame",className:"sticky top-0 w-full h-screen object-cover"})}),e.jsx("div",{className:"pt-[180vh]",children:e.jsxs("div",{id:"text-container_mikasa",className:`text-white z-10 relative px-10\r
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0\r
                    md:grid-cols-[12vw_1.3fr_1fr_12vw] md:grid-rows-[1fr_0.5fr_0.5fr]\r
                `,children:[e.jsx(m,{ref:c,otherClass:` w-full h-full \r
                            sm:col-span-2 sm:h-10/12 sm:translate-y-100 sm:place-self-end\r
                        `,imgSrc:"/characters/mikasa/mikasa3.jpg",alt:"First Mikasa's image"}),e.jsxs("div",{className:`font-bold w-10/12\r
                    sm:mx-auto`,children:[e.jsx("h2",{className:`text-4xl uppercase text-purple-700 my-10 \r
                            md:text-7xl md:mt-0 md:mb-20\r
                        `,id:"mikasa_container",children:" Mikasa Ackerman "}),e.jsx("h3",{className:`text-2xl text-purple-100 mb-5 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]\r
                            md:text-4xl md:mb-10\r
                        `,children:" Cuando Mikasa tenía unos 9 años, unos traficantes de personas asesinaron a sus padres para venderla como esclava por su herencia asiática. "}),e.jsx("p",{className:`text-xl text-fuchsia-300 mb-10\r
                            md:text-2xl md:mt-0 md:mb-28\r
                        `,children:" Al unirse al ejército, Mikasa demuestra habilidades excepcionales, siendo la número 1 de su generación. Su fuerza sobrehumana y sentidos agudos son resultado del linaje Ackerman, una familia modificada genéticamente para proteger al rey. "})]}),e.jsx("div",{}),e.jsx("div",{}),e.jsx(m,{ref:o,otherClass:`h-full my-5 w-full\r
                        sm:row-span-2 sm:col-span-1 sm:translate-y-100 sm:place-self-end\r
                        md:my-0 md:h-11/12\r
                    `,imgSrc:"/characters/mikasa/mikasa2.jpg",alt:"Second Mikasa's image"}),e.jsx(m,{otherClass:`h-full w-full \r
                        sm:row-span-1 sm:col-span-1\r
                        md:h-10/12\r
                    `,imgSrc:"/characters/mikasa/mikasa1.jpg",alt:"Third Mikasa's image"}),e.jsx("div",{}),e.jsx("div",{}),e.jsx("p",{className:`text-xl text-fuchsia-300 mb-10 w-full mt-5 mx-auto font-bold \r
                            sm:w-10/12 sm:mt-0\r
                            md:text-2xl md:mb-0 \r
                        `,children:" Después de que Eren la salva y la acoge en su familia, Mikasa desarrolla un apego casi absoluto hacia él. Su mayor motivación en la vida se vuelve proteger a Eren a toda costa, como una forma de agradecerle, pero también por el vínculo emocional tan profundo que desarrolló "}),e.jsx("div",{})]})})]})};export{b as default};
