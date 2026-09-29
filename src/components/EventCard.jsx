import { useState } from "react"

function EventCard({ title, category, date, method, location, description }) {
  const [inscrito, setInscrito] = useState(false)
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  function cambiarEstado() {
    setInscrito(!inscrito)
  }

  function cambiarDetalles() {
    setMostrarDetalles(!mostrarDetalles)
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>Categoria: {category}</p>
      <p>Fecha: {date}</p>

      {mostrarDetalles && (
        <div>
          <p>Lugar: {location}</p>
          <p>Modalidad: {method}</p>
          <p>Descripcion: {description}</p>
        </div>
      )}

      <button onClick={cambiarDetalles}>{mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}</button>
      <button onClick={cambiarEstado}>{inscrito ? "Cancelar inscripcion" : "Inscribirse"}</button>
    </article>
  )
}

export default EventCard