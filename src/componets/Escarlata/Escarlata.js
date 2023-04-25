import "./Escarlata.css"
import { Link } from "react-router-dom"

const Escarlata = () =>{
    return(
        <div className="fondo">
            <div className="escarlata-1">
            <li><Link to={"/"} style={{textDecoration:"none", color:"black"}}>🡨</Link></li>
           <img className="escarlata2" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/logo/es-es/sv01-header-logo.png" alt="escarlata"/>
           </div>

            <h1>Cartas Destacadas</h1>
                
            <section className="galeria">
            <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_125.jpg" alt="koraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_81.jpg" alt="miraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_19.jpg" alt="are"/>
           <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_143.jpg" alt="nom"/>
           <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_226.jpg" alt="olc"/>
           <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_216.jpg"   alt="csa"/>
            </section>
         </div>
      
    )
}


export default Escarlata