import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          🌍 Climat Vrai/Faux
        </Link>
        <div className="nav-links">
          <Link to="/">Accueil</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/learn">Apprendre</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;