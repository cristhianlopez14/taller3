import './caja1.css';
import HoteliaBlanco from './Hotelia horizontal blanco.svg';
import Campana from './hotelia campana.svg';
import Mujer from './icon-mujer.png.webp';
function Caja1() {
    return(
        <div class="caja-1">
        <div class="image-dashboard">
            <img src={HoteliaBlanco}/>
             <div class="nombre-correo">
            <h2>Angie Vargas</h2>
            <h2 class="correo-dashboard">angievargas2@gmail.com</h2>
        </div>
         </div> 
         <div class="image2-dashboard">
            <img src={Campana} alt=""/>
            <img src={Mujer}  alt="" class="img2-dashboard"/>
         </div>  
       
        
        <div class="habitaciones-dashboard">
            <div class="icon-dashboard"><i class="fa-solid fa-bed"></i><h2 class="text-dashboard">Habitaciones</h2></div>
            <div class="icon-dashboard .icon-blue"><i class="fa-solid fa-bell-concierge"></i><h2 class="text-dashboard">Reservas</h2></div>  
            <div class="icon-dashboard"><i class="fa-solid fa-bed"></i><h2 class="text-dashboard">Habitaciones</h2></div>
            <div class="icon-dashboard"><i class="fa-solid fa-bell-concierge"></i><h2 class="text-dashboard">Habitaciones</h2></div>  
        </div>
        
        <div class="cerrarsesion">
            <div class="sesion-dash"><i class="fa-solid fa-right-from-bracket"></i><h2 class="text-dashboard1"><a href="../Index2.html"> Cerrar sesión</a></h2></div>
        </div>

    </div>
    
    );
}

export default Caja1;