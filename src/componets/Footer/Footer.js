import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
        <div className="footer-container">
          <div className="logo">
          <Link to="/" class="navbar-brand" href="#"> <img  src="https://tcg.pokemon.com/assets/img/global/logos/es-es/tcg-logo.png"  alt="pokemon" /></Link>
          </div>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
      
    )
}

export default Footer