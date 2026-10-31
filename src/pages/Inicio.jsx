import '../styles/paginas.css'

export default function Inicio() {
  return (
    <section className="pagina">
      <h1>Bienvenido</h1>
      <p>
        Este proyecto de React demuestra el uso de <strong>Blob</strong> (Binary
        Large Object) y de <strong>rutas</strong> con react-router-dom.
      </p>
      <p>
        Usá el menú del encabezado para navegar entre las secciones: Inicio,
        proyectoBlob, Acerca de nosotros y Contacto.
      </p>
    </section>
  )
}
