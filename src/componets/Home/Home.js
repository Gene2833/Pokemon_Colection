import appFirabase from "../Firebase/Firebase"
import { getAuth, signOut } from "firebase/auth"
const auth = getAuth(appFirabase)

const Home = ({correoUsuario}) =>{
    return(
        <div className="container">
           <p>Bienvenido, <strong>{correoUsuario}</strong> Haz iniciado sesion</p>

           <button className="btn btn-primary" onClick={() => signOut(auth)} >
            Cerrar sesion
           </button>
        </div>
    )
}

export default Home