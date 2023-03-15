import React, { useState} from "react"
import Login from './componets/Login/Login';
import Footer from './componets/Footer/Footer';
import Menu from "./componets/Menu/Menu";

 // Se importa Firebase para poder usarlo y desesctruturar los servicios que vamos a utilizar del auth = autentificacion
import appFirabase from './componets/Firebase/Firebase';
//funciones que vamos a utilizar todo esto viene de la documentacion de firebase
import {getAuth, onAuthStateChanged} from "firebase/auth"


// de la auth vamos a obtener la aplicacion de firebaseapp, va a estar es escuchando nuestra aplicacion todo esto son regalas de firebase
const auth = getAuth(appFirabase)

  // necesitamos una funcion para verificar si ya estamos logueados o no, funcion que se utilizara onAuthStateChanged
function App() {
  // se crea el estado
  const [usuario, setUsuario] = useState(null)

  //se utiliza esta funcion, se hace un arow funcion
  onAuthStateChanged(auth, (usuarioFirabase) =>{
  // se crea el if y se pregunta si el usuariofirabase esta en true o falso
  if (usuarioFirabase){
    // si es verdadero paso al home
    setUsuario(usuarioFirabase)
  }
  // si es falso sigue siendo null
  else{
    setUsuario(null)
  }
  })

  return (
    <div className="App">
       
    {usuario ? <Menu correoUsuario = {usuario.email} /> : <Login/>}
    <Footer/>
    </div>
  );
}

export default App;
