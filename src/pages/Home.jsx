import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Démêlez le vrai du faux sur le climat ! 🌍</h1>
      <p>
        Beaucoup d'idées reçues circulent sur le changement climatique.
        Testez vos connaissances et découvrez les vraies solutions pour notre planète !
      </p>

      <div className="cards-grid">
        <div className="card">
          <div className="card-icon">❓</div>
          <h3>Quiz Interactif</h3>
          <p>Testez vos connaissances sur le climat et les vraies solutions</p>
          <Link to="/quiz" className="btn btn-primary">
            Commencer le quiz
          </Link>
        </div>

        <div className="card">
          <div className="card-icon">📚</div>
          <h3>Apprendre</h3>
          <p>Découvrez les vraies solutions basées sur la science</p>
          <Link to="/learn" className="btn btn-secondary">
            En savoir plus
          </Link>
        </div>

        <div className="card">
          <div className="card-icon">✨</div>
          <h3>Un futur positif</h3>
          <p>Des solutions existent et sont à notre portée !</p>
          <button className="btn btn-accent">Découvrir</button>
        </div>
      </div>

      <div className="info-box">
        <h2>Saviez-vous que... ?</h2>
        <p>
          Les solutions pour limiter le changement climatique existent et sont efficaces.
          Ensemble, avec des actions individuelles ET des politiques publiques,
          nous pouvons construire un avenir durable ! 🌱
        </p>
      </div>
    </div>
  );
}

export default Home;