import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <div>
            <img className="logo" src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/others_3/SI_Pokemon.jpg" alt="pokemon"/>
                <nav className="menu">
                    <Link to="registrar" style={{padding: 10}}>Crear Tarjetas</Link>
                    <Link to="Listar">Listado de Tarjetas</Link>
                </nav>
        </div>

      )
    }


export default Navbar