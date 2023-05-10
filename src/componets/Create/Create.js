import "./Create.css"
import { useState } from "react";


const Create = () =>{
    const [tarjetas, setTarjetas] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [poderes, setPoderes] = useState('');
    const [imagen, setImagen] = useState(null);
    
 const handleImagenChange = (event) => {
            setImagen(event.target.files[0]);
          };

    const guardarTarjetas = (e) =>{
        e.preventDefault()
      
       
          // Crea un nuevo objeto de tarjeta
          const nuevaTarjeta = {
            nombre: nombre,
            descripcion: descripcion,
            poderes: poderes,
            imagen:imagen
          };

    // Agrega la nueva tarjeta al vector
    setTarjetas([...tarjetas, nuevaTarjeta]);

    // Limpia los campos del formulario
    setNombre('');
    setDescripcion('');
    setPoderes('');
    setImagen(null);
  };

  return(
    <div>
       <h1>Create tu pokemon</h1>


    
    <form onSubmit={guardarTarjetas}>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} required/>

    <label for="correo">Descripcion</label>
    <input type="text" id="Descripcion" name="descripcion"  placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} required />

    <label for="asunto">Poderes</label>
    <input type="text" id="poderes" name="poderes" placeholder="Poderes" onChange={(e) => setPoderes(e.target.value)}required />

    <div className="archivo">
    <label for="correo">Seleccionar archivo:</label>
    <input type="file" id="archivo" name="archivo" onChange={handleImagenChange} required/>
    </div>

    <input type="submit" value="Enviar"/>

</form>

    {tarjetas.map((tarjeta, index) => (
        <div className="contenedor" key={index}>
            <h2>{tarjeta.nombre}</h2>
            <p>{tarjeta.descripcion}</p>
            <h6>{tarjeta.poderes}</h6>
            <img src={URL.createObjectURL(tarjeta.imagen)} alt="" />
        </div>
      ))}

    </div>

)  
    
}


      



export default Create

