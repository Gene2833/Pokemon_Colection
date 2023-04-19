import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () =>{

    return(
        <footer>
        <div className="footer-container">
          <div className="logo">
          <Link to="/" class="navbar-brand" href="#"> <img  src="https://i.pinimg.com/originals/00/91/ee/0091ee3217f61f8e5f369b9c6cd14db5.jpg" style={{height: 120, borderRadius: 70}} alt="pokemon" /></Link>
          </div>
          <ul className="social-icons">
          <li><Link to={`#`}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" style={{width:60, height:60}} alt="instagram"/></Link></li>
          <li><Link to={`#`}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" style={{width:60, height:60}}  alt="facebbok"/></Link></li>
          <li><Link to={`#`}> <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360" style={{width:60, height:60}}  alt="whatsapp"/></Link></li>       
        </ul>
        </div>
        <div className="bottom-bar">
          <p>&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
      
    )
}

export default Footer