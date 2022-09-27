import './calificacion.css';
import image from './user-user.png';

function Calificacion() {
    return(
        <section id="calificacion">
        <h2 class="title-calificacion">Nuestros usuarios dicen...</h2>
        <div class="caja-user">

            <div class="user user2">
            <img src={image} alt="image"></img>
            </div>

            <div class="user user1">
            <img src={image} alt="image"></img>
            </div>

            <div class="user user2">
            <img src={image} alt="image"></img>
            </div>
        </div>
    </section>
    );
}

export default Calificacion;