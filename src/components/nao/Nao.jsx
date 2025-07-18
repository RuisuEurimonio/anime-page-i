import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";
import CharacterPageStyleTwo from "../CharacterPageStyleTwo";

gsap.registerPlugin(ScrollTrigger);

const frames = 100;
const getFramesSource = (index) => {
    return `/frames/nao/nao_${index.toString()}.jpg`
}

const Nao = () => {

    return (
        <CharacterPageStyleTwo
            keyNameCharacter={"nao"}
            framesVideo={100}
            fullName={"Nao Tomori"}
            historyStart={"La chica que grababa verdades, protegía a quienes sufrían... y eligió quedarse, incluso cuando él la olvidó."}
            mainQuote={"No existen los atajos para la vida."}
            videoQuote={"Incluso si el mundo te odia, yo no lo haré."}
            EndQuote={"Lo grabé todo, así que no puedes mentir."}
            historyEnd={"En el olvido de él, Nao permaneció. Sin memoria, sin promesas, pero con fe: reconstruiría su historia, desde cero, una vez más."}
            bgColorPage={"rgb(61,79,99)"}   
            activeSecondStyle={true}
            toColorPage={"rgb(240, 236, 209)"}
        />

    )
}

export default Nao;