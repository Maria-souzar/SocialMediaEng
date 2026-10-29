import { Link } from 'react-router-dom'
import './sobre.css'

function Sobre() {
  return (
    <div className="sobre-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="sobre-header">

        <nav className="sobre-nav">

          <Link to="/">
            INICIO
          </Link>

          <Link to="/sobre">
            SOBRE
          </Link>

        </nav>

      </header>


      {/* =========================
          CONTEÚDO PRINCIPAL
      ========================= */}

      <main className="sobre-main">

        <section className="sobre-content">


          {/* =========================
              ILUSTRAÇÃO
          ========================= */}

          <div className="sobre-ilustracao">

            {/* CELULAR */}

            <div className="illustration-phone">

              <div className="phone-screen">

                <div className="screen-line"></div>

                <div className="screen-line short"></div>

                <div className="screen-line"></div>

                <div className="screen-button"></div>

              </div>

            </div>


            {/* PESSOA 1 */}

            <div className="person person-one">

              <div className="head"></div>

              <div className="body"></div>

              <div className="legs"></div>

            </div>


            {/* PESSOA 2 */}

            <div className="person person-two">

              <div className="head"></div>

              <div className="body"></div>

              <div className="legs"></div>

            </div>


            {/* PESSOA 3 */}

            <div className="person person-three">

              <div className="head"></div>

              <div className="body"></div>

              <div className="legs"></div>

            </div>


            {/* PESSOA 4 */}

            <div className="person person-four">

              <div className="head"></div>

              <div className="body"></div>

              <div className="legs"></div>

            </div>

          </div>


          {/* =========================
              TEXTO
          ========================= */}

          <div className="sobre-texto">

            <h1>O QUE FAZ?</h1>

            <ul>

              <li>
                Planejamento estratégico
              </li>

              <li>
                Criação de conteúdo
              </li>

              <li>
                Legendas
              </li>

              <li>
                Calendário mensal
              </li>

              <li>
                Análise de métricas
              </li>

            </ul>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Sobre