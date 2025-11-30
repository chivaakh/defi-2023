import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Learn from './pages/Learn';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;