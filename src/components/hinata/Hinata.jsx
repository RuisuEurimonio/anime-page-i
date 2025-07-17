import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";
import CharacterPageStyleTwo from "../CharacterPageStyleTwo";

gsap.registerPlugin(ScrollTrigger);

const Hinata = () => {

    return (
        <CharacterPageStyleTwo 
            keyNameCharacter={"hinata"}
            framesVideo={41}
            fullName={"Hinata Hyuga"}
            mainQuote={"Quiero ser más fuerte... como tú, Naruto."}
            historyStart={"Tímida heredera Hyuga, encuentra inspiración en Naruto. Su amor y determinación la transforman en una valiente y poderosa ninja."}
            videoQuote={"No me rendiré... ¡Ese es mi camino ninja!"}
            EndQuote={"Fortaleza Silenciosa y Amor Inquebrantable"}
            historyEnd={"supera el rechazo y la inseguridad, inspirada por Naruto. Se convierte en una mujer valiente, amorosa y fuerte, formando con él una familia feliz."}
        />
    )
}

export default Hinata;