import "./Tempestad.css"
import { Link } from "react-router-dom"


const Tempestad = () =>{
    return(
        <div>
            <div className="tempestad">
            <li className="tempestad-button"><Link to={"/"} style={{textDecoration:"none", color:"black"}}>🡨</Link></li>
                <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/global/logos/es-es/swsh12-logo.png" alt="nombre"/>
            </div>

            <h1>Cartas Destacadas</h1>

            <section className="galeria-tempestad">
            <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_34-2x.jpg" alt="koraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_139-2x.jpg" alt="miraidon"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_136-2x.jpg" alt="are"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_58-2x.jpg" alt="nom"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_136-2x.jpg" alt="olc"/>
           <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_66-2x.jpg"   alt="csa"/>
            </section>

                <h1>ESPADA Y ESCUDO-TEMPESTAD PLATEADA DE JCC POKÉMON</h1>
                <p className="parrafo-tempestad">¡Otorga un Poder V-ASTRO a cualquier Pokémon V con estas cartas especiales de Herramienta Pokémon! Une Piedra Sello Forestal a tu Pokémon V para que pueda utilizar la habilidad Astro Alquimia, un Poder V-ASTRO con el que podrás buscar en tu baraja una carta y ponerla en tu mano, perfecto para encontrar en cualquier momento de la partida esa carta que tanto necesitas. También puedes optar por un camino más ofensivo al unir Piedra Sello Terrestre a cualquiera de tus Pokémon V para que usen el ataque Astro Gravedad, que coloca contadores de daño en cada uno de los Pokémon V de tu rival hasta que les queden 100 PS. Domina como nunca con estas poderosas cartas de Herramienta Pokémon que harán que cualquier Pokémon sea estelar.</p>
            
            <div className="galeria-tempestad1">   
                <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_156.jpg" alt="olc"/>
                <img src="https://tcg.pokemon.com/assets/img/expansions/silver-tempest/cards/es-es/SWSH12_ES_154-2x.jpg"   alt="csa"/>    
            </div>
        </div>
    )
}

export default Tempestad