import './navbar.css'
import image from './Hotelia horizontal blanco.svg'
function Navbar() {
  return (
    <nav>
        <div class="logo">
            {image}
            <img src={image} alt='imagen'></img>
            <i class="fa-solid fa-bars"></i>
        </div>
        <div class="menu">
          <a href="Index.html" class="item">Inicio</a>
          <a href="Ubicanos.html" class="item">Ubícanos</a>
          <a href="Opiniones.html" class="item">Opiniones</a>
          <a href="../Views/Inicio/Inicio.html" class="item"><button class="navbar-button"><i class='fa-solid fa-user'>
         </i>Iniciar Sesión</button></a>
        </div>
    </nav> 
  );
}

export default Navbar;
