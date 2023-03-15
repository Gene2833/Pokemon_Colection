import "./login.css"
import React, { useState} from "react"
 // Se importa Firebase para poder usarlo y desesctruturar los servicios que vamos a utilizar del auth = autentificacion
import appFirabase from "../Firebase/Firebase"
//funciones que vamos a utilizar todo esto viene de la documentacion de firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// de la auth vamos a obtener la aplicacion de firebaseapp, va a esatr es escuchando nuestra aplicacion todo esto son regalas de firebase
const auth = getAuth(appFirabase)

const Login = () => {

  // se crea una variable de Estado para poder crear lo que se necesita en la logica
  const  [registro, setRegistro] =  useState (false)

  // realizazamos una cons que va hacer la funcion que va a esuchar lo que se va enviar atraves del formulario/login

  const handlerSubmit = (e) =>{
    // el preventDefault quita para que la pagina no se recargue
    e.preventDefault()

    // const van a estar almacenando la informacion del input de email y contraseña
    const correo = e.target.email.value;
    const contraseña = e.target.contraseña.value;
    // se crea el if, si nuestra variable de estado tuviera un estado true que no tuviera una cuenta tiene que crear una, si por lo contrario tiene una cuenta tiene que loguearse
    if(registro){
      //el auth de nuestras aplicacion
      createUserWithEmailAndPassword(auth,correo,contraseña)
    }else{
      //caso contrario si ya estuviese logueado 
       signInWithEmailAndPassword(auth,correo,contraseña)
    }
  }



return (

      <div>
          <div className='container bg-primary mt-5  rounded'>
              
          <div className="row align-items-stretch">
          <div className="col bg"  >
            
          </div>
          <div className="col">
            <div className='text-end'>
         
            </div>
                {/* se crear el operador ternario, si nuestra variable de estado registro esta en true muestre registrate si esta en false muestra iniciar sesion hace la accion de un if */}
            <h2 className='fw-bold text-center pt-5 mb-5'>{registro ? "Registrate" : "Inicia sesion"}</h2>
              
               {/* el evento onsubmit tiene que enviar toda la informacion del form */}
              <form onSubmit={handlerSubmit}>
                <div className='mb-4'>
                <label for="email" className='form-label'>Email:</label>
                <input type="email" className='form-control' placeholder="Ingresar email" id="email"  required />
                </div>
      
                <div className='mb-4'>
                <label for="password" className='form-label'>Contraseña:</label>
                <input type="password" className='form-control' placeholder="Ingresar contraseña" id="contraseña" required/>
                  </div>

                {/* se crear el operador ternario, si nuestra variable de estado registro esta en true muestre registrate si esta en false muestra iniciar sesion, hace la accion de un if */}
                  <div className='d-grid'>
                  <button type="submit"  className="btn btn-primary" value="Login" >{registro ? "Registrate" : "inicia sesion"} </button>
                  </div>
              </form>

              <div className="form-group">
                {/* se crear el EVENTO ONCLICK, CON UNA FUNCION DE CB, con el estado de setRegistro se modificado la variable de estado negando el registro, la negacio de false es true, la negacion de true es false   */}
              <button className="btn btn mt-4 form-control" onClick={() => setRegistro(!registro)}>
                 {/* se crear el operador ternario, si nuestra variable de estado registro esta en true muestre "no tienes cuenta? Registrate", si esta en false muestra "ya tienes una cuenta? Inicia sesion", hace la accion de un if */}
             {registro ? "ya tienes una cuenta? Inicia sesion" : "no tienes cuenta? Registrate"}
              </button>
              </div>
          </div>
          
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
          </div>
      
      
        )
      }
      
export default Login