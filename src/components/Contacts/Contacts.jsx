import Navbar from "../Navbar/Navbar"
import "./Contacts.css"

function Contacts () {
    return(
        <div>
            <nav>
                <Navbar/>  
            </nav>

            <div className="form-contact">
                <h2> Formulario de contacto por cualquier duda o reclamo. </h2>
                <label for="nombre"> Nombre </label>
                <input type="text" id="nombre"/>

                <label for="apellido"> Apellido </label>
                <input type="text" id="apellido"/>
                <label for="email"> Email </label>
                <input type="email" name="" id="email"/>

                <label for="dudas"> Consultas </label>
                <textarea name="" id="miTextarea" cols="30" rows="10" placeholder=""></textarea>

                <button value="Enviar"> Enviar </button>
                <button class="boton" type="reset"> Restablecer </button>
            </div>
        </div>
    )
}

export default Contacts