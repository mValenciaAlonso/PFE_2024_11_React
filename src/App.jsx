import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './fragments/InformacionCalamaFragment'
import InformacionCalamaFragment from "./fragments/InformacionCalamaFragment.jsx";

function App() {
    const [platoFavorito, setplatoFavorito] = useState('Lasaña')
    const [color, setcolor] = useState('Peru')
  //const [count, setCount] = useState(0)
 //const handleClick (){}

 const handleClick = () => {
        //platoFavorito = 'cazuela' // no se pueden cambiar estados de esta manera
        //se hace de la siguiente forma:
     setplatoFavorito('Cazuela')
 }
  return (
    <>
        {/* a traves de estos parentesis se pueden incluir : expresiones, estados y otros */}
        {2*2} <br/>
        {platoFavorito} <br/>
        <hr/>
        <button type="button" className='btn btn-primary' onClick={handleClick}>
             Presiona para cambiar Lasaña por Cazuela
        </button>
        <hr className="mb-4"/>
        <InformacionCalamaFragment/>
    </>
  )
}

export default App
