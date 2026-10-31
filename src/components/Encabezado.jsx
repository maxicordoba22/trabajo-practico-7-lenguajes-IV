import { NavLink } from 'react-router-dom'
import '../styles/encabezado.css'

export default function Encabezado() {
  return (
    <header className="encabezado">
      <div className="encabezado__logo">
        <span className="encabezado__marca"></span>
        logo
      </div>

      <nav className="encabezado__nav">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/proyecto-blob">proyectoBlob</NavLink>
        <NavLink to="/acerca-de-nosotros">Acerca de nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  )
}
