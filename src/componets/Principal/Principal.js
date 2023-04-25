import "./Principal.css"
import Menu from "../Menu/Menu"
import { Link } from "react-router-dom"


const Principal = () =>{
    
    return(
        <div>
            <Menu/>   
                <div className="principal5"> 
                <h1 className="titulo5">TE DAMOS LA BIENVENIDA AL MUNDO DE POKÉMON</h1>
                <img className="pokemon1" src="https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg" alt="pokemon"/>
                <img className="pokemon2" src="https://tcg.pokemon.com/assets/img/parents-guide/about/es-es/SM11_55.jpg" alt="pokemon"/>
                <li><Link to={`/Pokemon`} className="button5" >Ver Cartas</Link></li>
                <li><Link to={`/Create`} className="button6" >Crea tu Pokemon</Link></li>
               
            </div>

            <div className="principal1">
                <img className="tarjeta1" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_125.jpg" alt="tarjeta"/>
                <img className="tarjeta2" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/logo/es-es/sv01-header-logo.png" alt="pokemon"/>
                <li><Link to={`/Escarlata`} className="button1" >Ver Cartas</Link></li>
                 <img className="tarjeta3" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_81.jpg" alt="tarjeta"/>
        </div>

            <div className="principal2">
                <img className="supremo1" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/frames/frame-gallery-header-top-left.png" alt="pokemon"/>
                <img className="supremo2" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/logos/es-es/swsh12pt5-logo.png" alt="pokemon"/>
                <h1 className="titulo2">LA EXPANSIÓN CENIT SUPREMO DE JCC POKÉMON</h1>
                <li><Link to={`/Supremo`} className="button2">Ver Cartas</Link></li>
                <img className="supremo3" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/frames/frame-gallery-header-bottom-right.png" alt="pokemon"/>
            </div>
            
            <div className="principal3">
                <img className="tempestad1" src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/global/logos/es-es/swsh12-logo.png" alt="pokemon"/>
                <h1 className="titulo3">LA EXPANSIÓN ESPADA Y ESCUDO-TEMPESTAD PLATEADA DE JCC POKÉMON</h1>
                <li><Link to={`/Tempestad`} className="button3" >Ver Cartas</Link></li>
            </div>

            <div className="principal4">
                <img className="perdido1" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/background-elements/slash-1.png" alt="nombre"/>
                <img className="perdido2" src="https://tcg.pokemon.com/assets/img/expansions/lost-origin/global/logos/es-es/swsh11-logo.png" alt="pokemon"/>
                <h1 className="titulo4">LA EXPANSIÓN ESPADA Y ESCUDO-ORIGEN PERDIDO DE JCC POKÉMON</h1>
                <li><Link to={`/Perdido`} className="button4" >Ver Cartas</Link></li>
                <img className="perdido3" src="https://tcg.pokemon.com/assets/img/expansions/crown-zenith/global/background-elements/slash-2.png" alt="nombre"/>
               
            </div>


     </div>
        )

    }

export default Principal