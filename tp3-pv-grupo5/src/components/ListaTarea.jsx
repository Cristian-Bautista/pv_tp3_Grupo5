import React, { useState } from 'react'
import InputTarea from './InputTarea';

const ListaTarea = () => {
    const guardar = (nuevaTarea)=>{
        console.log(nuevaTarea);
        setTareas([...tareas,nuevaTarea]);
    }
    const [tareas, setTareas] = useState([]);
    return (
    <div>
        <InputTarea guardar={guardar}/>
        <ul>
            {
                tareas.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ListaTarea
