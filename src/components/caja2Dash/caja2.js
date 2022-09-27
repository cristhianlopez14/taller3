import './caja2.css'
import mujer from './icon-mujer.png.webp';

function Caja2() {
    return(
        <div class="caja-2">
        <div class="info-usuario">
            <h2 class="title-dash">Bienvenido, Angie Vargas</h2>

            <div class="datos-dash">
                <div class="col1-dash">
                    <img src={mujer} />

                    <div class="two-icons">                     
                      <div class="icon2-2 "><i class="fa-solid fa-file-arrow-up"></i></div>  
                      <div class="icon1-2"><i class="fa-solid fa-download"></i></div>  
                    </div>

                    <div class="cambiar-password-dash">
                        <h2>Cambiar constraseña</h2>
                    </div>
                </div>

                <div class="items-dashboard">
                    <div class="formu-dash">
                        <h3 class="campos-dash">Tipo de documento</h3>
                        <input type="text" name="" id="" placeholder="Cédula de ciudanía"  class="campoin-dash"/><br/>
                    </div>

                    <div class="formu-dash">
                        <h3 class="campos-dash">Nombres</h3>
                        <input type="text" placeholder="Angie Camila" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Fecha de nacimiento</h3>
                        <input type="date" name="" id="" placeholder="10/08/1976" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Género</h3>
                        <div class="campo-genero">
                        <input type="checkbox" name="genero" id="mujer" class="campoin-das"/>Mujer
                        <input type="checkbox" name="genero" id="mujer" class="campoin-das"/>Hombre
                        <input type="checkbox" name="genero" id="otro" class="campoin-das"/>Otro
                        </div>
                    </div>
                    <div class="formu-dash"> 
                        <h3 class="camps-dasho">Correo</h3>
                    <input type="email" name="" id="" placeholder="angievargas2@gmail.com" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Número de documento</h3>
                        <input type="number" placeholder="1025417456" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Apellidos</h3>
                        <input type="text" placeholder="Vargas Pinzon" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">País de origen</h3>
                        <input type="text" placeholder="Colombia" class="campoin-dash"/><br/>     
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Teléfono de contacto</h3>
                        <input type="text" placeholder="3135207460" class="campoin-dash"/><br/>
                    </div>
                    <div class="actualizar-dash">
                        <button class="botones-dash">Actualizar</button><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Contraseña</h3>
                        <input type="password" name="" id="" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash1">Confirmar contraseña</h3>
                        <input type="password" class="campoin-dash"/><br/> 
                    </div>
                    <div class="cambiar-dash">
                        <button class="botones-dash">Cambiar</button>
                    </div>
                </div>
        

            <div class="items-dashboard1">
                <div class="col1">
                    <div class="formu-dash">
                        <h3 class="campos-dash">Tipo de documento</h3>
                        <input type="text" name="" id="" placeholder="Cédula de ciudanía"  class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Nombres</h3>
                        <input type="text" placeholder="Angie Camila" class="campoin-dash"/><br/>
                    </div>
                    
                    <div class="formu-dash">
                        <h3 class="campos-dash">Fecha de nacimiento</h3>
                        <input type="date" name="" id="" placeholder="10/08/1976" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Género</h3>
                        <div class="campo-genero">
                        <input type="checkbox" name="genero" id="mujer" class="campoin-das"/>Mujer
                        <input type="checkbox" name="genero" id="mujer" class="campoin-das"/>Hombre
                        <input type="checkbox" name="genero" id="otro" class="campoin-das"/>Otro
                        </div>
                    </div>
                    <div class="formu-dash"> 
                        <h3 class="camps-dasho">Email</h3>
                    <input type="email" name="" id="" placeholder="angievargas2@gmail.com" class="campoin-dash"/><br/>
                    <div class="actualizar-dash">
                        <button class="botones-dash">Actualizar</button><br/>
                    </div>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Contraseña</h3>
                        <input type="password" name="" id="" class="campoin-dash"/><br/>
                    </div>
                    <div class="cambiar-dash">
                        <button class="botones-dash">Cambiar</button>
                    </div>
                </div>
                <div class="col2 col22">
                    <div class="formu-dash">
                        <h3 class="campos-dash">Número de documento</h3>
                        <input type="number" placeholder="1025417456" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Apellidos</h3>
                        <input type="text" placeholder="Vargas Pinzon" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">País de origen</h3>
                        <input type="text" placeholder="Colombia" class="campoin-dash"/><br/>     
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash">Teléfono de contacto</h3>
                        <input type="text" placeholder="3135207460" class="campoin-dash"/><br/>
                    </div>
                    <div class="formu-dash">
                        <h3 class="campos-dash1">Confirmar contraseña</h3>
                        <input type="password" class="campoin-dash"/><br/> 
                    </div>
                    
                    </div>
        </div>
                
                
        </div>
    </div>

    </div>
    );
}

export default Caja2;