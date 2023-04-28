import "./Pokemon.css"
import { Link } from "react-router-dom"
const Pokemon = () =>{
    return(
        <div>
            <div className="pokemon">
                <img className="" src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/SI_Pokemon.jpg" alt="pokemon"/>
                <li className="link-pokemon"><Link to={"/"} style={{textDecoration:"none", color:"black"}}>🡨</Link></li>

            </div>

            <h1 className="titulo-pokemon">Cartas destacadas</h1>

            <div className="pokemon-galeria">
                <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_78-2x.jpg" alt="entrenador"/>
                <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_10-2x.jpg" alt="charizard"/>
                 <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_31-2x.jpg" alt="mewtow"/>
                 <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_48-2x.jpg" alt="melmetal"/>
            </div>

            <button className="button-pokemon">Ver la galeria de Cartas</button>

            <h1>POKÉMON GO DE JCC POKÉMON</h1>
            <p className="parrafo-pokemon">La nueva expansión de JCC Pokémon se inspira en Pokémon GO y presenta ilustraciones que muestran a los Pokémon en el mundo real.</p>

            <div className="pokemon-galeria">
                <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_4-2x.jpg" alt="pokemon"/>
                <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_11-2x.jpg" alt="pokemon"/>
                <img src="https://tcg.pokemon.com/assets/img/expansions/tcg-go/cards/es-es/POGO_ES_18-2x.jpg" alt="pokemon"/>
            </div>
        </div>
    )
}

export default Pokemon