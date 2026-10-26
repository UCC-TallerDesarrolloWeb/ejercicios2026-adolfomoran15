import '@styles/Activities.scss'
import Card from '@components/Card';
import {activities, diasSemana} from '../Data/Activities'

const Activities = () => {

  

const isLogin = localStorage.getItem("isLogin") === "true";

const handlerInscribir = (nombreActividad) => {
    `Inscripto en ${nombreActividad}`
}

return (
    <div className="activites-container">
        {
            activities.map((actividad,index) => (
                <Card key={index} title={actividad.nombre} subtitle ={actividad.descripcion}>
                    <ul>
                        {actividad.horarios.map((horario,i) => (
                            <li key={i}>
                                {diasSemana[horario.dia]} - {horario["hora-inicio"]} - {horario["hora-fin"]}
                            </li>
                        ))}
                    </ul>
                    {
                        isLogin && (
                        <button onClick={() => handlerInscribir(actividad.nombre)}>Inscribirse</button>
                    )
                    }
                </Card>
            ))
        }
    </div>
)

}

export default Activities;