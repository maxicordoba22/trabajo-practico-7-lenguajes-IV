import { useState } from 'react'
import '../styles/blob.css'

export default function ProyectoBlob() {
  const [blob, setBlob] = useState(null)
  const [mensaje, setMensaje] = useState('Todavía no se creó ningún Blob.')

  // 1) Crear un Blob a partir de texto
  const crearBlob = () => {
    const texto = 'Hola, este es un Blob de texto creado desde React.'
    const nuevoBlob = new Blob([texto], { type: 'text/plain' })
    setBlob(nuevoBlob)
    setMensaje(
      `Blob creado: ${nuevoBlob.size} bytes, tipo "${nuevoBlob.type}".`
    )
  }

  // 2) Descargar el Blob como archivo .txt
  const descargarBlob = () => {
    if (!blob) {
      setMensaje('Primero creá un Blob con el botón "Crear Blob de texto".')
      return
    }
    const url = URL.createObjectURL(blob)
    const enlace = document.createElement('a')
    enlace.href = url
    enlace.download = 'mi-blob.txt'
    enlace.click()
    URL.revokeObjectURL(url)
    setMensaje('Descarga iniciada: mi-blob.txt')
  }

  // 3) Usar slice() para obtener una parte del Blob
  const usarSlice = async () => {
    if (!blob) {
      setMensaje('Primero creá un Blob con el botón "Crear Blob de texto".')
      return
    }
    const parte = blob.slice(0, 4, 'text/plain')
    const contenido = await parte.text()
    setMensaje(
      `slice(0, 4) devolvió un Blob de ${parte.size} bytes: "${contenido}"`
    )
  }

  return (
    <section className="blob">
      <h2>Ejemplo de uso de Blobs</h2>

      <div className="blob__botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>

      <p className="blob__mensaje">{mensaje}</p>
    </section>
  )
}
