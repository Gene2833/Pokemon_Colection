import "./login.css"
import React, { useState} from "react"
import appFirabase from "../Firebase/Firebase"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirabase)

const Login = () => {

  const  [registro, setRegistro] =  useState (false)
  
  const handlerSubmit = async(e) =>{
    e.preventDefault()

    const correo = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    if(registro){
      await createUserWithEmailAndPassword(auth,correo,contraseña)
    }else{
      await signInWithEmailAndPassword(auth,correo,contraseña)
    }
  }



return (

      <div>
          <div className='container bg-primary mt-5  rounded'>
              
          <div class="row align-items-stretch">
          <div class="col bg"  >
            
          </div>
          <div class="col">
            <div className='text-end'>
              <img src='./Pokemon.png' width="80" alt='pokemon' />
            </div>
            <h2 className='fw-bold text-center pt-5 mb-5'>{registro ? "Registrate" : "Inicia sesion"}</h2>
              
              <form onSubmit={handlerSubmit}>
                <div className='mb-4'>
                <label for="email" className='form-label'>Email:</label>
                <input type="email" className='form-control' placeholder="Ingresar email" id="email"  required />
                </div>
      
                <div className='mb-4'>
                <label for="password" className='form-label'>Contraseña:</label>
                <input type="password" className='form-control' placeholder="Ingresar contraseña" id="contraseña" required/>
                  </div>
      
                  <div className='d-grid'>
                  <button type="submit"  className="btn btn-primary" value="Login" >{registro ? "Registrate" : "inicia sesion"} </button>
                  </div>
              </form>

              <div className="form-group">
              <button className="btn btn mt-4 form-control" onClick={() => setRegistro(!registro)}>
                {registro ? "ya tienes una cuenta? Inicia sesion" : "no tienes cuenta? Registrate"}
              </button>
              </div>
          </div>
          
            </div>
            </div>
          </div>
      
      
        )
      }
      
export default Login