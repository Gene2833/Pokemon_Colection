import "./Menu.css"
import Home from "../Home/Home"
import appFirabase from "../Firebase/Firebase"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirabase)


const Menu = ({correoUsuario}) =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1>Create Collection</h1>
          <h1> Collection List </h1>
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
     <Home/>
      </nav>
    )
}

export default Menu