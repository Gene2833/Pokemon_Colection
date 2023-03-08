import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./login.css"

const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function iniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("Complete Los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas==="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
      }else{
        setMiLogin("false");
        alert("Error De Usuario y/o Contraseña!!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
        
      }
    }
  }


  return (
    

    <div>
      
    <form id="form_login">
      <img className='img'  src='http://c.files.bbci.co.uk/5BC3/production/_90319432_poke5.png' alt='nombre'/>
          <div> 
            
          <h1>Inicio de sesion</h1>
            <label htmlFor="txtusu"><strong>Usuario</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setUsu(e.target.value) }  required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password </strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setPas(e.target.value) }  required/>
        </div><br/>
        <button type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }>Entrar </button>
    </form>
   <div>
    { miLogin === "true" && <Navbar/> }
</div>


</div>
    



  )
}

export default Login