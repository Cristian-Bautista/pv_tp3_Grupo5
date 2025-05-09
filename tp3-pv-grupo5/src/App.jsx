import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputTarea from './components/InputTarea'
import ListaTarea from './components/ListaTarea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaTarea/>
    </>
  )
}

export default App
