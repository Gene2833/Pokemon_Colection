import "./Menu.css"
import appFirabase from "../Firebase/Firebase"
import { getAuth, signOut } from "firebase/auth"
import { Link } from "react-router-dom"

const auth = getAuth(appFirabase)


const Menu = ({correoUsuario}) =>{
    return(
       
      <header>
      <nav className="menu-navegacion contenedor">
      <div className='logo'>
      <Link to="/"  href="#"> <img src="https://tcg.pokemon.com/assets/img/global/logos/es-es/tcg-logo.png"  alt="logo" /></Link>
      </div>
      <div className='enlaces' >
      <p>Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesion</p>
           <button className="button btn btn" onClick={() => signOut(auth)} >
            Cerrar sesion
           </button>

      </div> 
  
       </nav>
 
    </header>
     
    )
}

export default Menu