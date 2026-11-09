import { useEffect, useState } from 'react'
import './App.css'
import Statisztika from './components/RajzfilmLista';
import { Kartya } from './components/Rajzfilm';
import type { RajzfilmTipus } from './types/typeRF';
import Lablec from './components/Lablec';

function App() {
  const [ rajzfilmek, setRajzfilmek ] = useState<RajzfilmTipus[]>([]);

  useEffect(()=> {
    fetch("./rajzfilmek.json")
    .then(response => response.json())
    .then(data => setRajzfilmek(data))
  }, [])

  const evszamok = rajzfilmek.map(item => item.megjelenesEve);
  const legkorabbi = Math.min(...evszamok);
  const legkesobbi = Math.max(...evszamok);

  return (
    <>
    <div className="container">
      <Statisztika
        db={rajzfilmek.length}
        earliest={legkorabbi}
        latest={legkesobbi}
      />

      {rajzfilmek.map(item => (
        <Kartya
          key={item.id}
          cim={item.cim}
          studio={item.studio}
          megjelenes={item.megjelenesEve}
        />
      ))}      
      <Lablec/>
    </div>

    </>
  )
}

export default App