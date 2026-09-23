import { Link, Routes, Route } from 'react-router-dom'
import Sobre from './Sobre'
import './App.css'

function App() {
  return (
    <div className="pagina">

      <header className="header">
        <nav className="nav">
          <Link to="/">INICIO</Link>
          <Link to="/sobre">SOBRE</Link>
        </nav>
      </header>

      <main>
        <section className="hero">

          <div className="hero-text">
            <h1>SOCIAL MEDIA</h1>

            <p>
              gestão de redes sociais
              <br />
              com posicionamento
              <br />
              estratégico, criatividade
              <br />
              e autenticidade.
            </p>
          </div>

          <div
            className="social-image"
            aria-label="Ilustração de redes sociais"
          >
            <div className="phone">

              <div className="phone-title">
                Social
              </div>

              <div className="social-icons">
                <span>◎</span>
                <span>▶</span>
                <span>f</span>
                <span>♪</span>
                <span>♡</span>
                <span>✦</span>
                <span>◎</span>
                <span>▶</span>
                <span>f</span>
              </div>

            </div>
          </div>

        </section>
      </main>

    </div>
  )
}

export default App