import './form.css';
import image from './Hoteliahorizontalnegro.svg'
function Formulario() {
    return(
        <body id="Inicio-sesion">
    
    <section id="formulario">
        <div class="img-formulario">
            <img src={image} id="img-formulario"></img>
        </div>
        <div class="user-formulario">
            <i class="fa-solid fa-circle-user"></i>
        </div>
        <fieldset class="formulario">
            <form action="../Dashboard/Dashboard.html" method="get">
            <label for="usuario">Usuario</label>
            <input type="text" name="usario" id="usuario" class="formu"/><br></br><br></br>

            <label for="contrasena">Constraseña</label>
            <input type="password" name="contrasena" id="contrasena" class="formu"/><br></br><br></br>

            <button type="submit" class="boton-formu">Ingresar</button>
        </form>
        </fieldset>
        <div class="registrar-formu">
            <p class="registrate">¿No tienes una cuenta?</p>
            <a href="../Inicio/RegistrarUsuario.html" class="aqui">Registrate aquí</a>
        </div>
    </section>

</body>
    );
}
export default Formulario;