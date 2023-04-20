import "./Principal.css"
import Menu from "../Menu/Menu"


const Principal = () =>{
    
    return(
        <div>
            <Menu/>
            <div className="principal">
            <img className="tarjeta1" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_125.jpg" alt="tarjeta"/>
            <img className="pokemon1" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/logo/es-es/sv01-header-logo.png" alt="pokemon"/>
            <li className="tarjet"><button>Ver tarjetas</button></li>
            <img className="tarjeta2" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_81.jpg" alt="tarjeta"/>
            <div>
            </div>
            </div>
            
            <div className="principal1">
                <img src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/frames/frame-gallery-header-top-left.png" alt="pokemon"/>
                <img className="supremo" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/logos/es-es/swsh12pt5-logo.png" alt="pokemon"/>
                <h1>DESCUBRE LA EXPANSIÓN CENIT SUPREMO DE JCC POKÉMON</h1>
                <li className="li" ><button>Ver tarjetas</button></li>
                <img className="fondo" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/frames/frame-gallery-header-bottom-right.png" alt="pokemon"/>
            </div>
           
     </div>
        )

    }

export default Principal