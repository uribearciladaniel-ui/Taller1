import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import EventCard from './components/EventCard'
import Header from './components/Header'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  const eventos = [
    {
      id: 1,
      title: "React Meetup",
      category: "Tecnología",
      date: "2026-10-15",
      method: "Presencial",
      location: "Bogotá",
      description: "Taller práctico de React y componentes reutilizables."
    },
    {
      id: 2,
      title: "UI/UX Workshop",
      category: "Diseño",
      date: "2026-10-20",
      method: "Virtual",
      location: "Zoom",
      description: "Sesión enfocada en diseño de interfaces y experiencia de usuario."
    },
    {
      id: 3,
      title: "JavaScript Avanzado",
      category: "Programación",
      date: "2026-10-28",
      method: "Híbrido",
      location: "Medellín",
      description: "Profundización en patrones, asincronía y optimización de aplicaciones."
    }
  ]

  return (
    <div>
      <Header />
      <main>
        <section id='eventos'>
          <h2>Eventos disponibles</h2>
          {eventos.map(function (evento) {
            return (
              <EventCard
                key={evento.id}
                title={evento.title}
                category={evento.category}
                date={evento.date}
                method={evento.method}
                location={evento.location}
                description={evento.description}
              />
            )
          })}
        </section>

        <RegistrationForm evento={eventos} />
      </main>
      <Footer />
    </div>
  )
}

export default App
