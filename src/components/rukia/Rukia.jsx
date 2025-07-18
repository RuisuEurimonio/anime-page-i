import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../../scripts/gsapConfig";
import ImgZoom from "../ImgZoom";
import CharacterPageStyleTwo from "../CharacterPageStyleTwo";

const Rukia = () => {

    return (
        <CharacterPageStyleTwo 
            keyNameCharacter={"rukia"}
            fullName={"Rukia Kuchiki"}
            framesVideo={59}
            mainQuote={"El corazón es algo que se forma entre las personas."}
            historyStart={"Shinigami perteneciente al prestigioso Clan Kuchiki y miembro del Escuadrón 13 del Gotei 13. A pesar de su linaje noble, fue adoptada por el clan y siempre sintió que debía ganarse su lugar."}
            videoQuote={"No temas a la muerte. Teme no vivir nunca."}
            EndQuote={"Hielo que aprendió a sentir"}
            historyEnd={"Rukia cierra su historia como capitana, madre y símbolo de equilibrio. De alma fría y reservada, se convierte en una líder cálida y fuerte."}
            bgColorPage="rgba(7,23,51,1)"
        />

    )
}

export default Rukia;