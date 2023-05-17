import "./Escarlata.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Escarlata = () =>{

    useEffect(() =>{
        document.title ="Pokemon- Escarlta Y Purpura"
    },[])

    
    return(

        
        <div className="fondo">
            <div className="escarlata-1">
            <li className="link"><Link to={"/"} style={{textDecoration:"none", backgroundColor:"black"}}>🡨</Link></li>
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


                <h1>Poder prehistórico</h1>
                <p className="parrafo-escarlata">Entra al combate con el despiadado poder ancestral de Koraidon ex y su habilidad Dinoalarido. Puede resultar complicado llevar la Energía a la pila de descartes para usar esta habilidad, ¡pero con la habilidad Motor Ruidoso de Revavroom podrás lograrlo mientras robas cartas! En circunstancias normales, el ataque Colmillo Furioso de Koraidon sería difícil de usar, pues requiere 3  y 1 , pero Revavroom descarta la Energía y Koraidon ex la acelera para que esté preparado en un abrir y cerrar de ojos.</p>
                <div className="galeria-escarlata">
                <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_125-2x.jpg"   alt="csa"/>
                <img className="mas" src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/featured-tips/icon-plus.png"  alt="csa"/>
                <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_142-2x.jpg"   alt="csa"/>
                <img src="https://tcg.pokemon.com/assets/img/sv-expansions/scarlet-violet/cards/es-es/SV01_ES_124-2x.jpg"   alt="csa"/>
            </div>
         </div>
      
    )
}


export default Escarlata