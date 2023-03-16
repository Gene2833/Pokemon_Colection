import "./Create.css"
import Menu from "../Menu/Menu"

const Create = () =>{
    return(
        <>
            <Menu/>
                <div class="container">
                
                    <h1>Crea tu Tarjeta</h1>

                    <form className="Container">
                        <div className="row row-cols-2"> 
                        <div className='col p-2'>
                            <label for="text" className='form-label'>Nombre</label>
                                <input type="text" className='form-control' placeholder="Ingresa el nombre" id="nombre"  required />
                        </div>

                        <div className='col p-2'>
                            <label for="email" className='form-label'>Descripcion</label>
                                <input type="email" className='form-control' placeholder="Ingresa la descripcion" id="descripcion"  required />
                        </div>

                        <div className='col p-2' >
                            <label for="text" className='form-label'>Poderes</label>
                                <input type="text" className='form-control ' placeholder="Ingresa los poderes" id="poderes"  required />
                        </div>

                        <div className='col p-2'>
                            <label for="formFile" className="form-label">Sube la imagen</label>
                                <input className="form-control" type="file" id="formFile"/>
                        </div>
                        
                        </div>
                        <div className="form-group" >
                        <button className="btn  mt-4 form-control"  type="button">Button</button>
                        </div>
                    </form>
            
                </div>
        </> 
    )
}

export default Create