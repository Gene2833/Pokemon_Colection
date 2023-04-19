import "./Menu.css"
import appFirabase from "../Firebase/Firebase"
import { getAuth, signOut } from "firebase/auth"
import { Link } from "react-router-dom"
const auth = getAuth(appFirabase)


const Menu = ({correoUsuario}) =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link to="/" class="navbar-brand" href="#"> <img  src="https://i.pinimg.com/originals/00/91/ee/0091ee3217f61f8e5f369b9c6cd14db5.jpg" style={{height: 120, borderRadius: 70}} alt="pokemon" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex" role="search">
            <p className="p-2">Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesion</p>
           <button className="button btn btn" onClick={() => signOut(auth)} >
            Cerrar sesion
           </button>
          
            </div>
            
          </div>
       
        </div>
    
      </nav>
    )
}

export default Menu