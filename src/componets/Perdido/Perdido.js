import { Link } from "react-router-dom"
import "./Perdido.css"
const Perdido = () =>{

    return(
        <div>

            <div className="perdido">
            <li className="button-link"><Link to={"/"} style={{textDecoration:"none", color:"black"}}>🡨</Link></li>
                <img src="https://tcg.pokemon.com/assets/img/expansions/lost-origin/global/logos/es-es/swsh11-logo.png" alt="perido"/>
                
            </div>

            <h1 className="titulo-supremo">Cartas Destacadas</h1>

        <section className="galeria-supremo">
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_96.jpg" alt="koraidon"/>
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_99.jpg" alt="miraidon"/>
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_44.jpg" alt="are"/>
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_66.jpg" alt="nom"/>
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_50.jpg" alt="olc"/>
        <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_56.jpg"   alt="csa"/>
        </section>
           
            <h1>ESPADA Y ESCUDO-ORIGEN PERDIDO DE JCC POKÉMON</h1>
            <p className="parrafo-perdido">La Zona Perdida vuelve a la expansión Espada y Escudo-Origen Perdido de JCC Pokémon. Giratina desgarró el tejido del espacio para crear una grieta en la Zona Perdida. Muchas cartas, incluyendo Giratina V y Giratina V-ASTRO, aprovecharán esta emocionante mecánica. Aunque las cartas que van a la Zona Perdida quedan fuera de juego para el resto de la partida, los jugadores más estratégicos podrán aprovechar al máximo esta nueva oportunidad.</p>
        
        <div className="galeria-perdido1">
            <img src="https://tcg.pokemon.com/assets/img/expansions/lost-origin/cards/es-es/SWSH11_ES_107-2x.jpg" alt="nom"/>
            <img src="https://tcg.pokemon.com/assets/img/expansions/lost-origin/cards/es-es/SWSH11_ES_93-2x.jpg" alt="olc"/>
            <img src="https://tcg.pokemon.com/assets/img/expansions/lost-origin/cards/es-es/SWSH11_ES_58-2x.jpg"   alt="csa"/>
        </div>
        </div>
    )
}

export default Perdido