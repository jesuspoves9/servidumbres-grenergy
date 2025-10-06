import React, {useState, useEffect} from 'react'

export default function App(){
  const [predios, setPredios] = useState([])
  const [name, setName] = useState('')
  useEffect(()=>{ fetch('/api/predios').then(r=>r.json()).then(setPredios) },[])
  async function create(){
    const res = await fetch('/api/predios',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nombre:name})})
    const p = await res.json(); setPredios([p,...predios]); setName('')
  }
  return (<div style={{fontFamily:'Arial',padding:20}}>
    <h1>Servidumbres Grenergy — Prototipo</h1>
    <div style={{marginTop:10}}>
      <input placeholder='Nombre predio' value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={create} style={{marginLeft:8}}>Crear</button>
    </div>
    <ul>
      {predios.map(p=> <li key={p.id}>{p.nombre} — id: {p.id}</li>)}
    </ul>
    <p style={{color:'#666'}}>Frontend mínimo. Conecta con backend en /api</p>
  </div>)
}
