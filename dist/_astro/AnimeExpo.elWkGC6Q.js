import{S as _,j as e}from"./gsapConfig.Dx5dlI8u.js";import{r as t}from"./index.BJfUAbRs.js";import{I as f}from"./ImgZoom.BgPBWpnm.js";import{g as o}from"./index.D3jsOSc0.js";o.registerPlugin(_);const j=({keyName:r,fileName:g,fullName:l,fatherContainer:n="",handleOpenModal:u=()=>{},minimal:d=!1})=>{const a=t.useRef(null);return t.useEffect(()=>{!a||n===""||window.localStorage.getItem("reduceAnimation")==="true"||o.fromTo(a.current,{scale:"1"},{scale:"1.3",ease:"power1.inOut",duration:1,scrollTrigger:{trigger:"#"+n+r,start:"top bottom",end:"bottom top",scrub:!0}})},[]),e.jsx("img",{ref:a,src:`/animes/${r}/${g}.jpg`,alt:`${d?"small":""} portrait image from ${l} anime`,className:`h-full w-full object-cover ${d?"border-4 border-white md:border-[12px] m-4":""}
                
            `,style:{transform:d?"rotate(-6deg)":"scale(1)"},onClick:d?null:u})};o.registerPlugin(_);const R=({keyName:r,idNavbar:g=r,fileName:l=r,fullName:n,quote:u,text:d,listImagesProp:a,noBgImg:i=!1})=>{const[m]=t.useState(a),[$,I]=t.useState({}),[w,S]=t.useState(!1),x=t.useRef(null),p=t.useRef(null),C=()=>{document.body.style.overflowY="hidden",o.set("#header",{display:"none"}),o.set("#animeInfo_"+r,{display:"flex"}),i||o.set("#bgAnimeInfo_"+r,{display:"block"}),o.set("#optionsModal_"+r,{display:"flex"}),["#animeInfo_"+r,i?null:"#bgAnimeInfo_"+r,"#optionsModal_"+r].forEach(s=>{s&&o.fromTo(s,{x:"105%"},{x:"0",ease:"expo.out",duration:1})})},v=()=>{document.body.style.overflowY="",["#animeInfo_"+r,i?null:"#bgAnimeInfo_"+r,"#optionsModal_"+r].forEach(s=>{s&&o.fromTo(s,{x:"0%"},{x:"105%",duration:2,ease:"expo.out",onComplete:()=>{o.set(s,{display:"none"}),o.set("#header",{display:"block"})}})}),x?.current?.scrollIntoView({behavior:"smooth"})};return t.useEffect(()=>{requestAnimationFrame(()=>{!p.current||i||(w?o.fromTo("#bgAnimeInfo_"+r,{x:0},{x:-50,ease:"none",scrollTrigger:{trigger:"#animeInfo_"+r,scroller:"#animeInfo_"+r,horizontal:!0,start:"left left",end:"right right",scrub:!0}}):o.fromTo("#progressbar-modal_"+r,{x:"91.6667%"},{x:"0%",ease:"none",scrollTrigger:{trigger:"#animeInfo_"+r,scroller:"#animeInfo_"+r,start:"left left",endTrigger:p.current,end:"right right",scrub:!0,horizontal:!0}}))})},[w,m]),t.useEffect(()=>{S(window.innerWidth>768)},[]),t.useEffect(()=>{if(i)return;const s=window.innerWidth>768?"to right":"to bottom";I({backgroundImage:`
      linear-gradient(${s}, rgba(0, 0, 0, 0.8) 10%, rgb(18,3,20) ${s==="to right"?"50%":"80%"}, rgb(18,3,20) 100%),
      url('/animes/${r}/${l}_bg.jpg')
    `})},[]),e.jsxs("div",{className:"relative w-full flex items-center p-0 m-0 h-screen overflow-hidden",id:g+"_container",children:[e.jsxs("div",{className:`w-11/12 h-5/12 m-auto hover:drop-shadow-pink-300 hover:drop-shadow-xl duration-200 hover:cursor-pointer hover:rotate-2 relative\r
                md:h-11/12 md:w-8/12\r
            `,children:[e.jsx("div",{id:`mainImageContainer_${r}`,className:"w-full h-full overflow-hidden border-[12px] border-white",children:e.jsx(j,{keyName:r,fileName:l,fullName:n,fatherContainer:"mainImageContainer_"})}),e.jsxs("button",{className:` absolute -bottom-16 right-0 left-0 mx-auto font-bold w-10/12 px-0.5 py-0.5 rounded-4xl bg-white cursor-pointer\r
                    sm:py-1.5\r
                    md:py-2.5 md:bottom-5\r
                `,onClick:C,children:[" Explorar ",n," "]})]}),!i&&e.jsx("div",{id:`bgAnimeInfo_${r}`,className:"fixed h-full w-full bg-cover bg-center inset-0 top-0 left-0 z-[50] hidden",style:$}),e.jsxs("div",{id:`optionsModal_${r}`,className:"fixed top-5 left-5 w-full justify-between z-[70] hidden",children:[e.jsx("button",{className:"bg-fuchsia-700 text-black font-bold py-1 px-4 rounded-3xl cursor-pointer",onClick:v,children:" Cerrar. "}),e.jsx("div",{className:`bg-fuchsia-700/10 rounded-full h-8 w-7/12 flex items-center justify-center\r
                                md:hidden\r
                            `,children:e.jsx("div",{className:"relative w-10/12 h-2 bg-gray-800 rounded-full overflow-hidden",children:e.jsx("div",{id:`progressbar-modal_${r}`,className:"absolute h-full w-full bg-gray-300 left-0 -translate-x-11/12 rounded-full",children:"  "})})})]}),e.jsx("div",{id:`animeInfo_${r}`,className:"fixed top-0 left-0 w-[100%] h-screen overflow-x-scroll overflow-y-hidden bg-transparent z-[60] hidden",onClick:s=>{s.stopPropagation()},style:{backgroundColor:i?"rgb(18,3,20)":""},children:e.jsxs("div",{className:`flex items-center gap-10 relative pl-5 w-full pointer-events-auto\r
                        md:pl-64\r
                    `,children:[e.jsxs("div",{className:`font-bold grid grid-cols-[100vw_95vw] grid-rows-2 min-w-[190vw] h-8/12 my-auto mr-16\r
                        md:grid-cols-[1fr_1fr] md:grid-rows-1 md:min-w-[90vw] md:items-center\r
                    `,children:[e.jsx("div",{ref:x,className:`grid-cols-1 grid-rows-1 w-10/12 h-10/12\r
                        md:h-full md:w-[50vw] md:row-span-1 md:col-span-1 md:mr-16\r
                            `,children:e.jsx(j,{keyName:r,fileName:l,fullName:n,handleOpenModal:v,minimal:!0})}),e.jsx("div",{className:`grid-cols-1 grid-rows-1\r
                            md:grid-cols-none md:grid-rows-none md:hidden\r
                        `}),e.jsx("h2",{className:`text-5xl text-fuchsia-600 grid-cols-1 grid-rows-1 uppercase font-extrabold h-11/12 self-end\r
                                md:text-4xl md:col-span-1 md:row-span-1 md:content-end md:hidden\r
                            `,children:" Solo leveling "}),e.jsxs("div",{className:`grid-cols-1 grid-rows-1\r
                            md:col-span-1 md:row-span-1\r
                        `,children:[e.jsxs("h2",{className:`text-5xl text-fuchsia-600 grid-cols-1 grid-rows-1 uppercase font-extrabold h-11/12 self-end hidden\r
                                md:text-4xl md:col-span-1 md:row-span-1 md:content-end md:block\r
                            `,children:[" ",n," "]}),e.jsxs("h3",{className:`text-base text-pink-400 uppercase font-bold\r
                                    md:text-2xl\r
                                `,children:[" ",u," "]}),e.jsxs("p",{className:`text-base text-white h-full\r
                                    md:text-xl\r
                                `,children:[" ",d," "]})]})]}),e.jsxs("div",{className:`grid grid-cols-[200vw_80vw_80vw] grid-rows-1 gap-10 h-[100vh] \r
                        md:grid-cols-[25vw_25vw_25vw] md:grid-rows-[30vh_1fr_1fr]\r
                    `,children:[e.jsx("div",{className:`col-span-1 row-span-1 hidden\r
                            md:block\r
                        `}),e.jsx(f,{imgSrc:`/animes/${r}/${l}1.jpg`,alt:`First collage image about ${n} anime`,otherClass:`col-span-1 row-span-1 h-full w-full object-cover\r
                        `}),e.jsx(f,{imgSrc:`/animes/${r}/${l}2.jpg`,alt:`Second collage image about ${n} anime`,otherClass:`col-span-1  row-span-1 h-[80vh] place-self-center w-full object-cover\r
                        md:row-span-3`}),e.jsx(f,{imgSrc:`/animes/${r}/${l}3.jpg`,alt:`Third collage image about ${n} anime`,otherClass:`col-span-1  row-span-1 h-full w-[90vh] object-cover\r
                            md:h-full md:col-span-2 md:row-span-2\r
                        `})]}),e.jsx("div",{className:"flex gap-16 items-center ml-10",children:m&&m.map((s,h)=>{const b=h===m.length-1;let c="object-cover h-[100vh] ";return b?c+="min-w-[100vw] md:min-w-[60vw]":h===0?c+="min-w-[80vw] md:min-w-[30vw] md:h-[70vh]":h===1?c+="min-w-[70vw] h-[40vh] md:min-w-[40vw] md:h-[40vh]":c+="min-w-[60vw] h-[70vh] md:min-w-[30vw] md:h-[60vh]",e.jsx(f,{ref:b?p:null,imgSrc:`/animes/${r}/${s}.jpg`,otherClass:c,alt:`${h+1} image about ${n} anime`},s)})})]})})]})};export{R as A};
