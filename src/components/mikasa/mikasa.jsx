import { gsap, ScrollTrigger } from "../../scripts/gsapConfig"
import { useEffect, useRef, useState } from "react";
import ImgZoom from "../ImgZoom";

const frames = 48;
const getFramesSource = (index) => {
    return `/frames/mikasa/mikasa_${index.toString()}.jpg`
}

gsap.registerPlugin(ScrollTrigger)

const Mikasa = () => {

    const imgRef = useRef(null);
    const [images, setImages] = useState([]);

    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);

    useEffect(() => {
        if (!(window.innerWidth > 768)) return;
        if (imgRef && imgRef2) {
            [imgRef1, imgRef2].forEach((ref, i) => {
                gsap.to(ref.current, {
                    y: i === 0 ? -100 : -120,
                    ease: "power1.inOut",
                    duration: 1,
                    scrollTrigger: {
                        trigger: "#text-container_mikasa",
                        start: "top-=200px bottom",
                        end: "bottom+=200px top",
                        scrub: true,

                    }
                })
            })
        }
    }, [])

    useEffect(() => {
        let imgs = []
        for (let i = 1; i <= frames; i++) {
            let imgSrc = getFramesSource(i);
            let img = new Image();
            img.src = imgSrc;
            imgs.push(img)
        }
        setImages(imgs);

        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
    }, [])

    useEffect(() => {
        if (!imgRef.current || images.length === 0) return;

        const obj = { frame: 0 }
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#image-container_mikasa",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })

        tl.to("#image-container_mikasa", {
            opacity: 1,
            duration: 0.1
        })


        tl.to(obj, {
            frame: frames - 1,
            duration: 0.7,
            ease: "none",
            onUpdate: () => {
                const index = Math.floor(obj.frame);
                if (imgRef.current) {
                    imgRef.current.src = images[index].src;
                }
            },
        })

        tl.to(imgRef.current, {
            opacity: 0,
            ease: "power2.in",
            duration: 0.1
        })

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        }
    }, [images])

    return (
        <div className="relative">
            <div id="image-container_mikasa" className="h-[400vh] w-full absolute top-[-450px] bg-[rgb(18,3,20)] z-0 opacity-0">
                <img ref={imgRef} src={getFramesSource(1)} className="sticky top-0 w-full h-screen object-cover" />
            </div>
            <div className="pt-[180vh]">
                <div id="text-container_mikasa" className="text-white z-10 relative px-10
                    sm:grid sm:grid-cols-[10vw_1.2fr_1.2fr_0.6fr] sm:grid-rows-[0.4fr_1fr_0.3fr_0.3fr] sm:gap-10 sm:px-0
                    md:grid-cols-[12vw_1.3fr_1fr_12vw] md:grid-rows-[1fr_0.5fr_0.5fr]
                ">
                    <ImgZoom ref={imgRef1} otherClass=" w-full h-full 
                            sm:col-span-2 sm:h-10/12 sm:translate-y-100 sm:place-self-end
                        " imgSrc="/characters/mikasa/mikasa3.jpg"
                        alt="First Mikasa's image"
                    />
                    <div className="font-bold w-10/12
                    sm:mx-auto">
                        <h2 className="text-4xl uppercase text-purple-700 my-10 
                            md:text-7xl md:mt-0 md:mb-20
                        "> Mikasa Ackerman </h2>
                        <h3 className="text-2xl text-purple-100 mb-5 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]
                            md:text-4xl md:mb-10
                        "> Cuando Mikasa tenía unos 9 años, unos traficantes de personas asesinaron a sus padres para venderla como esclava por su herencia asiática. </h3>
                        <p className="text-xl text-fuchsia-300 mb-10
                            md:text-2xl md:mt-0 md:mb-28
                        "> Al unirse al ejército, Mikasa demuestra habilidades excepcionales, siendo la número 1 de su generación. Su fuerza sobrehumana y sentidos agudos son resultado del linaje Ackerman, una familia modificada genéticamente para proteger al rey. </p>
                    </div>
                    <div></div>

                    <div></div>
                    <ImgZoom ref={imgRef2} otherClass="h-full my-5 w-full
                        sm:row-span-2 sm:col-span-1 sm:translate-y-100 sm:place-self-end
                        md:my-0 md:h-11/12
                    " imgSrc="/characters/mikasa/mikasa2.jpg"
                        alt="Second Mikasa's image" />
                    <ImgZoom otherClass="h-full w-full 
                        sm:row-span-1 sm:col-span-1
                        md:h-10/12
                    " imgSrc="/characters/mikasa/mikasa1.jpg"
                        alt="Third Mikasa's image" />
                    <div></div>

                    <div></div>
                    <p className="text-xl text-fuchsia-300 mb-10 w-full mt-5 mx-auto font-bold 
                            sm:w-10/12 sm:mt-0
                            md:text-2xl md:mb-0 
                        "> Después de que Eren la salva y la acoge en su familia, Mikasa desarrolla un apego casi absoluto hacia él. Su mayor motivación en la vida se vuelve proteger a Eren a toda costa, como una forma de agradecerle, pero también por el vínculo emocional tan profundo que desarrolló </p>
                    <div></div>
                </div>
            </div>
        </div>
    )

}

export default Mikasa;