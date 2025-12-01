import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container container">
      <h1>
        Relevez le <span className="text-gradient">Défi Climat</span>
      </h1>
      <p>
        Découvrez des actions concrètes pour réduire votre empreinte carbone 
        et contribuer à un avenir plus durable. Chaque geste compte !
      </p>

      <div className="cards-grid">
        <div className="card">
          <span className="card-icon">🎯</span>
          <h3>Testez vos connaissances</h3>
          <p>
            Évaluez votre compréhension des enjeux climatiques avec notre quiz interactif.
          </p>
          <Link to="/quiz" className="btn btn-primary">
            Commencer le Quiz
          </Link>
        </div>

        <div className="card">
          <span className="card-icon">📚</span>
          <h3>Apprenez les bases</h3>
          <p>
            Découvrez les concepts clés du changement climatique et les solutions disponibles.
          </p>
          <Link to="/learn" className="btn btn-secondary">
            Explorer les ressources
          </Link>
        </div>

        <div className="card">
          <span className="card-icon">🌱</span>
          <h3>Passez à l'action</h3>
          <p>
            Adoptez des gestes quotidiens simples pour réduire votre impact environnemental.
          </p>
          <Link to="/learn" className="btn btn-accent">
            Voir les actions
          </Link>
        </div>
      </div>

      <div className="info-box">
        <h2>💡 Le saviez-vous ?</h2>
        <p>
          Les petites actions quotidiennes de millions de personnes peuvent avoir 
          un impact significatif. En changeant nos habitudes de consommation, 
          de transport et d'énergie, nous pouvons collectivement réduire les 
          émissions de CO₂ et protéger notre planète pour les générations futures.
        </p>
      </div>

      <div className="cards-grid" style={{ marginTop: '3rem' }}>
        <div className="stat-card">
          <div className="stat-number">1.5°C</div>
          <div className="stat-label">Objectif de limitation</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2050</div>
          <div className="stat-label">Neutralité carbone</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Énergies renouvelables</div>
        </div>
      </div>
    </div>
  );
}

export default Home;