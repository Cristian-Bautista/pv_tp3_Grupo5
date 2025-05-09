import React, { useState} from 'react'

const InputTarea = ({guardar}) => {
    const [tarea, setTarea] = useState("");
    const subirTarea = () =>{
        guardar(tarea);
        setTarea('');
    }
  return (
    <div>
        <label htmlFor="">Ingrese la tarea </label>
        <input type="text" value = {tarea} onChange={(e)=> setTarea(e.target.value)}/>
        <button onClick={subirTarea}>Subir</button>
    </div>
  )
}

export default InputTarea
