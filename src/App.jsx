import { Routes, Route } from 'react-router-dom'
import Encabezado from './components/Encabezado.jsx'
import Inicio from './pages/Inicio.jsx'
import ProyectoBlob from './pages/ProyectoBlob.jsx'
import AcercaDeNosotros from './pages/AcercaDeNosotros.jsx'
import Contacto from './pages/Contacto.jsx'

export default function App() {
  return (
    <>
      <Encabezado />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyecto-blob" element={<ProyectoBlob />} />
          <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
    </>
  )
}
