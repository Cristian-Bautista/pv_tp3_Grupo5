import React, { useState } from 'react';
import InputTarea from './InputTarea';
import './listaTarea.css';

const ListaTarea = () => {
  const guardar = (nuevaTarea) => {
    setTareas([...tareas, { texto: nuevaTarea, completado: false }]);
  };

  const marcarcomocompletado = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completado = !nuevasTareas[index].completado;
    setTareas(nuevasTareas);
  };

  const eliminartarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const [tareas, setTareas] = useState([]);

  return (
    <div className="listaTarea">
      <h2>Lista de Tareas</h2>
      <InputTarea guardar={guardar} />
      <ul className="Fondo">
        {tareas.map((elemento, index) => (
          <li key={index}>
            <span style={{
              textDecoration: elemento  .completado ? 'line-through' : 'none'
            }}>
              {elemento.texto}
            </span>
            <button onClick={() => marcarcomocompletado(index)}>Realizada</button>
            <button onClick={() => eliminartarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarea;
