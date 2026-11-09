import { useState } from 'react'
import './App.css'
import { rajzfilmek } from './data/dataRF';
import Statisztika from './components/RajzfilmLista';

function App() {
  const [ rajzfilm, setRajzfilm ] = useState(rajzfilmek);

  return (
    <>
    {Statisztika}
    </>
  )
}

export default App