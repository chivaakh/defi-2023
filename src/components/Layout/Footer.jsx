import React from 'react';

function Footer() {
  return (
    <footer>
      <p>🌱 Ensemble pour un avenir durable</p>
      <p className="footer-small">
        Défi Climat © {new Date().getFullYear()} - Agissons maintenant
      </p>
    </footer>
  );
}

export default Footer;