import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
        <div className="footer-container">
          <div className="logo">
          <Link to="/" class="navbar-brand" href="#"> <img  src="https://tcg.pokemon.com/assets/img/global/logos/es-es/tcg-logo.png"  alt="pokemon" /></Link>
          </div>
          <ul className="social-icons">
          <li><Link to={`#`}> <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png" style={{width:60, height:60}} alt="instagram"/></Link></li>
          <li><Link to={`#`}> <img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_facebook_fb_35.png" style={{width:60, height:60}}  alt="facebbok"/></Link></li>
          <li><Link to={`#`}> <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/whatsapp_black_logo_icon_147050.png" style={{width:60, height:60}}  alt="whatsapp"/></Link></li>       
        </ul>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
      
    )
}

export default Footer