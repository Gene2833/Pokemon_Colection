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
    <div className='container bg-primary mt-5 shadow-lg rounded'>
        
    <div class="row align-items-stretch">
    <div class="col bg"  >
      
    </div>
    <div class="col">
      <div className='text-end'>
        <img src='./Pokemon.png' width="80" alt='pokemon' />
      </div>
      <h2 className='fw-bold text-center pt-5 mb-5'>Bienvenido</h2>
        
        {/*Login*/}
        <form>
          <div className='mb-4'>
          <label for="text" className='form-label'>Usuario</label>
          <input type="text" id="txtusu"  className='form-control' name="usuario" onChange={ (e)=>setUsu(e.target.value) }  required />
          </div>

          <div className='mb-4'>
          <label for="password" className='form-label'>Password</label>
          <input type="password"  id="txtpas"  className='form-control' name="password"   onChange={ (e)=>setPas(e.target.value) } required/>
            </div>

            <div className='d-grid'>
            <button type="submit"  className="btn btn-primary" value="Login" onClick={ iniciarSesion }>Entrar </button>
            </div>
            
            <div className='my-3'>
              <span>No tienes cuenta? <li>Registrate</li></span>
            </div>
        </form>
    </div>
    
      </div>
      </div>
{ miLogin === "true" && <Navbar/> }

    </div>



  )
}

export default Login