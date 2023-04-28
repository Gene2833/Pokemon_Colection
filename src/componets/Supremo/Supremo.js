import "./Supremo.css"
import { Link } from "react-router-dom"

const Supremo = () =>{

    return(
        <div>
            <div className="supremo">
            <li className="button-link"><Link to={"/"} style={{textDecoration:"none", color:"black"}}>🡨</Link></li>
                <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/logos/es-es/swsh12pt5-logo.png" alt="nombre"/>
            </div>
                <h1 className="titulo-supremo">Cartas Destacadas</h1>

            <section className="galeria-supremo">
            <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_96.jpg" alt="koraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_99.jpg" alt="miraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_44.jpg" alt="are"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_66.jpg" alt="nom"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_50.jpg" alt="olc"/>
            </section>

             <h1 className="titulo-supremo">CENIT SUPREMO DE JCC POKÉMON</h1>
            <p className="parrafo-supremo">¡Disfruta de todo el esplendor de JCC Pokémon con la Galería de Galar de Cenit Supremo! Sé testigo de la intimidante mirada de Zoroark de Hisui V-ASTRO bajo la luna llena, observa a Darkrai V-ASTRO volar sobre un lago mientras desata el poder de las pesadillas y date un paseo con la ambiciosa Cintia mientras investiga los mitos y leyendas de Sinnoh en estas cartas con ilustraciones alternativas especiales.</p>
            
            <div className="galeria-supremo1">
            <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_56.jpg"   alt="csa"/>
            <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_50.jpg"   alt="csa"/>
            <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/cards/es-es/SWSH12pt5_ES_GG_60.jpg"   alt="csa"/>
            </div>

        </div>
    )
}

export default Supremo