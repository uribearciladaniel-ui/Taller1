function RegistrationForm({ evento = [] }) {
  return (
    <section>
      <h2>INSCRIBETE</h2>
      <form>
        <label>Nombre completo</label>
        <input type="text" />

        <label>Correo electronico</label>
        <input type="email" />

        <label>Selecciona el evento</label>
        <select>
          <option value="">[seleccione un evento]</option>
          {evento.map(function (item) {
            return (
              <option key={item.id} value={item.title}>{item.title}</option>
            )
          })}
        </select>

        <button type="submit">Inscribirse al evento</button>
      </form>
    </section>
  )
}

export default RegistrationForm