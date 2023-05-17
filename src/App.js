import React, { useState} from "react"
import Footer from './componets/Footer/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login/Login";
 // Se importa Firebase para poder usarlo y desesctruturar los servicios que vamos a utilizar del auth = autentificacion
import appFirabase from './componets/Firebase/Firebase';
//funciones que vamos a utilizar todo esto viene de la documentacion de firebase
import {getAuth, onAuthStateChanged} from "firebase/auth"
import Principal from "./componets/Principal/Principal";
import Escarlata from "./componets/Escarlata/Escarlata";
import Supremo from "./componets/Supremo/Supremo";
import Tempestad from "./componets/Tempestad/Tempestad";
import Perdido from "./componets/Perdido/Perdido";
import Pokemon from "./componets/Pokemon/Pokemon";
import Create from "./componets/Create/Create";

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

     <BrowserRouter>
     <Routes>   
      <Route path='/' element={usuario ? <Principal correoUsuario = {usuario.email} /> : <Login/>}/>    
      <Route path="/" element={<Principal/>}/>
      <Route path="/Escarlata" element={<Escarlata/>}/>   
      <Route path="/Supremo" element={<Supremo/>}/>
      <Route path="/Tempestad" element={<Tempestad/>}/>
      <Route path="/Perdido" element={<Perdido/>}/>
      <Route path="/Pokemon" element={<Pokemon/>}/>
      <Route path="/Create" element={<Create/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter>  

  );
}

export default App;