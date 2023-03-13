import './App.css';
import React, { useState} from "react"
import Login from './componets/Login/Login';
import Home from "./componets/Home/Home"
import appFirabase from './componets/Firebase/Firebase';
import {getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(appFirabase)

function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirabase) =>{
  if (usuarioFirabase){
    setUsuario(usuarioFirabase)
  }
  else{
    setUsuario(null)
  }
  })

  return (
    <div className="App">
    {usuario ? <Home correoUsuario = {usuario.email} /> : <Login/>}
    </div>
  );
}

export default App;
