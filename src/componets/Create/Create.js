import "./Create.css"

const Create = () =>{
    return(
        <div>
           <h1>Create tu pokemon</h1>


		
        <form action="enviar.php" method="post">
		<label for="nombre">Nombre:</label>
		<input type="text" id="nombre" name="nombre" placeholder="Nombre" required/>

		<label for="correo">Descripcion</label>
		<input type="email" id="Descripcion" name="descripcion"  placeholder="Descripcion" required/>

		<label for="asunto">Poderes</label>
		<input type="text" id="poderes" name="poderes" placeholder="Poderes" required/>

        <div className="archivo">
        <label for="correo">Seleccionar archivo:</label>
		<input type="file" id="archivo" name="archivo" required/>
        </div>
        <div>
		<input type="submit" value="Enviar"/>
        </div>
	</form>
	



        </div>
    )
}

export default Create