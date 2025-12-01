import React from "react";
import "./actions.css"; // si tu veux un style dédié

const ActionsUrgentes = () => {
  const actions = [
    "Utiliser une gourde au lieu de bouteilles en plastique.",
    "Éteindre la lumière quand tu quittes la pièce.",
    "Limiter la climatisation et privilégier le ventilateur.",
    "Réduire la consommation de viande.",
    "Prendre 5 minutes pour planter un arbre local.",
    "Utiliser des sacs réutilisables.",
    "Favoriser le covoiturage.",
    "Acheter local et saisonnier.",
    "Ne pas laisser l’eau couler inutilement.",
    "Recycler tes déchets correctement.",
    "Utiliser les transports en commun.",
    "Réparer/Recycler un appareil avant d’acheter neuf.",
    "Nettoyer un espace naturel près de chez toi.",
    "Limiter l’utilisation de plastique à usage unique.",
    "Éteindre les appareils en veille."
  ];

  return (
    <div className="actions-page">
      <h1>Actions Urgentes</h1>
      <p>Découvrez 15 gestes quotidiens simples pour réduire votre impact environnemental.</p>

      <ul className="actions-list">
        {actions.map((item, index) => (
          <li key={index} className="action-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionsUrgentes;
