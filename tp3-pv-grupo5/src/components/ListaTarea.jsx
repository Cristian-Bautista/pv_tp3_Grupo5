import React, { useState } from 'react'
import InputTarea from './InputTarea';
import './listaTarea.css';

const ListaTarea = () => {
    const guardar = (nuevaTarea)=>{
        console.log(nuevaTarea);
        setTareas([...tareas,nuevaTarea]);
    }
    const [tareas, setTareas] = useState([]);
    return (
    <div className='listaTarea'>
        <h2>Ingresar Tarea</h2>
      <InputTarea guardar={guardar} />
      <ul className="Fondo">
        {tareas.map((elemento, index) => (
          <li className="tarea" key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTarea
