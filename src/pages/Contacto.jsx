import { useState } from 'react'
import '../styles/paginas.css'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  const manejarEnvio = (e) => {
    e.preventDefault()
    setEnviado(true)
    e.target.reset()
  }

  return (
    <section className="pagina">
      <h1>Contacto</h1>
      <form className="formulario" onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" required />

        <label htmlFor="email">Correo electrónico</label>
        <input id="email" type="email" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>
      {enviado && <p className="formulario__ok">¡Mensaje enviado!</p>}
    </section>
  )
}
