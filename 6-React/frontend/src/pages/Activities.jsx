import '@styles/Activities.scss'
import Card from '@components/Card';
// import {activities, diasSemana} from '../Data/Activities'
import { useEffect, useState } from 'react';

const Activities = () => {

const isLogin = localStorage.getItem("isLogin") === "true";

const [activities, setActivities] = useState([]);
const [diasSemana, setDiasSemana] = useState([]);

const BASE_URL = "http://localhost:4000/";

const fetchActivities = async () => {
    try {
        const response = await fetch(`${BASE_URL}activities`);
        const data = await response.json();
        setActivities(data);
    }catch(error){
        console.error(`Error al retornar actividades: ${error}`)
    }
}

const fetchDias = async () => {
    try{
        const response = await fetch(`${BASE_URL}diasSemana`);
        const data = await response.json();
        setDiasSemana(data.dias);
    }catch(error){
        console.error(`Error al retornar dias de la semana: ${error}`);
    }
}


useEffect(() =>{
    fetchActivities();
    fetchDias();

},[]);

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