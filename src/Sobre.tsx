import './sobre.css'

function Sobre() {
  return (
    <div className="sobre-page">

      <header className="sobre-header">
        <nav className="sobre-nav">
          <a href="/">INICIO</a>
          <a href="/sobre">SOBRE</a>
        </nav>
      </header>

      <main className="sobre-main">

        <section className="sobre-content">

          {/* ILUSTRAÇÃO */}
          <div className="sobre-ilustracao">

            <div className="illustration-phone">
              <div className="phone-screen">
                <div className="screen-line"></div>
                <div className="screen-line short"></div>
                <div className="screen-line"></div>
                <div className="screen-button"></div>
              </div>
            </div>

            <div className="person person-one">
              <div className="head"></div>
              <div className="body"></div>
              <div className="legs"></div>
            </div>

            <div className="person person-two">
              <div className="head"></div>
              <div className="body"></div>
              <div className="legs"></div>
            </div>

            <div className="person person-three">
              <div className="head"></div>
              <div className="body"></div>
              <div className="legs"></div>
            </div>

            <div className="person person-four">
              <div className="head"></div>
              <div className="body"></div>
              <div className="legs"></div>
            </div>

          </div>

          {/* TEXTO */}
          <div className="sobre-texto">

            <h1>O QUE FAZ?</h1>

            <ul>
              <li>Planejamento estrategico</li>
              <li>Criação de conteúdo</li>
              <li>Legendas</li>
              <li>Calendário mensal</li>
              <li>Análise de métricas</li>
            </ul>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Sobre