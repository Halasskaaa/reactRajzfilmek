import { useState } from 'react'
import './App.css'
import { rajzfilmek } from './data/dataRF';
import Statisztika from './components/RajzfilmLista';
import { Kartya } from './components/Rajzfilm';

function App() {
  // const [ rajzfilm, setRajzfilm ] = useState(rajzfilmek);

  return (
    <>
    <div>
      {rajzfilmek.map((rajzfilm, index) =>
        <div key={index}>
          <Kartya
            cim = {rajzfilm.cim}
            studio = {rajzfilm.studio}
            megjelenes = {rajzfilm.megjelenesEve}
          />
        </div>
      )}
    </div>
    </>
  )
}

export default App