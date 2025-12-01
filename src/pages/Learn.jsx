import { useState } from 'react';

function Learn() {
  const [activeSection, setActiveSection] = useState('myths');

  const sections = {
    myths: {
      title: '🚫 Idées reçues sur le climat',
      icon: '❌',
      content: [
        {
          myth: 'Le réchauffement climatique, c\'est naturel',
          reality: 'FAUX - Le réchauffement actuel est causé par les activités humaines',
          explanation: 'Le GIEC confirme avec 99% de certitude que le réchauffement depuis 1850 est dû aux émissions de gaz à effet de serre d\'origine humaine. La vitesse du changement actuel est sans précédent dans l\'histoire géologique récente.',
          source: 'GIEC, 6e rapport d\'évaluation (2021-2023)'
        },
        {
          myth: 'Les gestes individuels ne servent à rien',
          reality: 'FAUX - Chaque action compte, mais les politiques publiques sont essentielles',
          explanation: 'Selon l\'ADEME, les actions individuelles peuvent réduire notre empreinte carbone de 25%. Mais 75% des solutions nécessitent des changements systémiques (énergie, transport, agriculture). L\'individuel ET le collectif sont complémentaires.',
          source: 'ADEME, Faire sa part (2019)'
        },
        {
          myth: 'Il est trop tard pour agir',
          reality: 'FAUX - Chaque dixième de degré compte',
          explanation: 'Même si nous avons déjà +1.1°C, limiter le réchauffement à +1.5°C plutôt que +2°C éviterait des millions de victimes et protégerait de nombreux écosystèmes. Il n\'est jamais trop tard pour réduire les impacts futurs.',
          source: 'GIEC SR15 (2018)'
        },
        {
          myth: 'La technologie résoudra tout',
          reality: 'PARTIELLEMENT VRAI - La technologie aide, mais ne suffit pas',
          explanation: 'Les innovations technologiques (énergies renouvelables, efficacité énergétique) sont indispensables. Mais elles doivent s\'accompagner de sobriété et de changements de comportements. Il n\'existe pas de "solution miracle".',
          source: 'Haut Conseil pour le Climat (2023)'
        }
      ]
    },
    solutions: {
      title: '✅ Solutions efficaces',
      icon: '💚',
      content: [
        {
          solution: 'Énergies renouvelables',
          impact: 'Très élevé',
          description: 'Remplacer les énergies fossiles par le solaire, l\'éolien et l\'hydraulique. En France, l\'électricité bas-carbone représente déjà 92% du mix électrique.',
          action: 'Choisir un fournisseur d\'électricité verte, installer des panneaux solaires si possible',
          co2saved: 'Jusqu\'à 70% des émissions du secteur énergétique'
        },
        {
          solution: 'Mobilité durable',
          impact: 'Élevé',
          description: 'Les transports représentent 31% des émissions en France. Privilégier vélo, marche, transports en commun, covoiturage. Pour les longs trajets : train plutôt qu\'avion.',
          action: 'Limiter la voiture individuelle, privilégier le vélo pour <5km, éviter l\'avion',
          co2saved: 'Jusqu\'à 2 tonnes CO2/an par personne'
        },
        {
          solution: 'Alimentation bas-carbone',
          impact: 'Élevé',
          description: 'Réduire la viande (surtout rouge), privilégier les produits locaux et de saison, limiter le gaspillage alimentaire. L\'agriculture représente 19% des émissions françaises.',
          action: 'Diviser par 2 la consommation de viande rouge, manger local et de saison',
          co2saved: 'Jusqu\'à 1 tonne CO2/an par personne'
        },
        {
          solution: 'Rénovation énergétique',
          impact: 'Élevé',
          description: 'Le bâtiment représente 18% des émissions françaises. Isoler les logements permet de réduire drastiquement la consommation de chauffage.',
          action: 'Isoler murs, toiture, fenêtres. Baisser le chauffage de 1°C (7% d\'économie)',
          co2saved: 'Jusqu\'à 1.5 tonnes CO2/an par foyer'
        },
        {
          solution: 'Économie circulaire',
          impact: 'Moyen',
          description: 'Réduire, réutiliser, réparer, recycler. L\'industrie représente 18% des émissions. Acheter d\'occasion, réparer plutôt que jeter.',
          action: 'Acheter moins mais mieux, privilégier la seconde main, réparer',
          co2saved: 'Variable selon consommation'
        }
      ]
    },
    data: {
      title: '📊 Chiffres clés',
      icon: '📈',
      content: [
        {
          stat: '+1.1°C',
          label: 'Réchauffement depuis 1850',
          detail: 'La température moyenne mondiale a augmenté de 1.1°C depuis l\'ère préindustrielle. L\'objectif de l\'Accord de Paris est de limiter ce réchauffement à +1.5°C.',
          source: 'GIEC (2023)'
        },
        {
          stat: '416 ppm',
          label: 'CO₂ dans l\'atmosphère',
          detail: 'Le taux de CO₂ est le plus élevé depuis 3 millions d\'années. Avant l\'ère industrielle : 280 ppm. La barre des 400 ppm a été franchie en 2013.',
          source: 'NASA (2024)'
        },
        {
          stat: '9 tonnes',
          label: 'Empreinte carbone moyenne en France',
          detail: 'Pour respecter l\'Accord de Paris, il faudrait descendre à 2 tonnes CO₂eq/an/personne d\'ici 2050.',
          source: 'Carbone 4 (2023)'
        },
        {
          stat: '-55%',
          label: 'Objectif UE pour 2030',
          detail: 'L\'Union Européenne s\'est engagée à réduire ses émissions de 55% d\'ici 2030 (par rapport à 1990), et atteindre la neutralité carbone en 2050.',
          source: 'Commission Européenne'
        },
        {
          stat: '20%',
          label: 'Part du numérique dans l\'empreinte carbone',
          detail: 'Le numérique représente environ 2% des émissions mondiales, mais sa croissance est rapide (+9%/an). En France, c\'est 2.5% du total.',
          source: 'ADEME & Arcep (2022)'
        }
      ]
    },
    resources: {
      title: '🔗 Ressources fiables',
      icon: '📚',
      content: [
        {
          name: 'GIEC (Groupe d\'experts intergouvernemental sur l\'évolution du climat)',
          description: 'Référence scientifique mondiale sur le climat. Publie des rapports basés sur des milliers d\'études.',
          link: 'https://www.ipcc.ch/',
          type: 'Organisme scientifique'
        },
        {
          name: 'ADEME (Agence de la transition écologique)',
          description: 'Expertise française sur l\'environnement et l\'énergie. Propose des outils pratiques et des guides.',
          link: 'https://www.ademe.fr/',
          type: 'Agence publique'
        },
        {
          name: 'Réseau Action Climat',
          description: 'Réseau d\'associations françaises luttant contre le changement climatique.',
          link: 'https://reseauactionclimat.org/',
          type: 'Association'
        },
        {
          name: 'Nos Gestes Climat',
          description: 'Calculateur d\'empreinte carbone individuelle développé par l\'ADEME. Très pédagogique.',
          link: 'https://nosgestesclimat.fr/',
          type: 'Outil pratique'
        },
        {
          name: 'Bon Pote',
          description: 'Vulgarisation scientifique de qualité sur le climat et l\'écologie.',
          link: 'https://bonpote.com/',
          type: 'Blog / Média'
        },
        {
          name: 'Haut Conseil pour le Climat',
          description: 'Organisme indépendant qui évalue la politique climatique française.',
          link: 'https://www.hautconseilclimat.fr/',
          type: 'Organisme indépendant'
        }
      ]
    }
  };

  return (
    <div className="learn-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #0f172a 50%, #1a1f36 100%)',
      color: '#e2e8f0',
      padding: '2rem',
      fontFamily: '"Rajdhani", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grille technologique en arrière-plan */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3,
        pointerEvents: 'none'
      }}></div>

      <h1 style={{
        textAlign: 'center',
        fontSize: '3.5rem',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #00d4ff 0%, #10b981 50%, #00d4ff 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: '"Orbitron", sans-serif',
        fontWeight: '800',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        textShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
        animation: 'pulse 2s ease-in-out infinite alternate',
        position: 'relative',
        zIndex: '1'
      }}>
        Mission Climat 2030
      </h1>
      
      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 3rem',
        fontSize: '1.2rem',
        color: '#94a3b8',
        fontFamily: '"Rajdhani", sans-serif',
        fontWeight: '500',
        letterSpacing: '0.5px',
        position: 'relative',
        zIndex: '1',
        lineHeight: '1.6'
      }}>
        <span style={{ color: '#00d4ff', fontWeight: '600' }}>DÉFI À GAGNER</span> - Des informations basées sur la science pour comprendre le changement climatique 
        et agir efficacement. Sources : GIEC, ADEME, Réseau Action Climat.
      </p>

      {/* Navigation par onglets */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '3rem', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        zIndex: '1'
      }}>
        {Object.keys(sections).map(key => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            style={{
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              border: '2px solid rgba(0, 212, 255, 0.3)',
              background: activeSection === key 
                ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(16, 185, 129, 0.15))' 
                : 'rgba(15, 23, 42, 0.8)',
              color: activeSection === key ? '#fff' : '#cbd5e1',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: '"Orbitron", sans-serif',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: activeSection === key 
                ? '0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1)' 
                : '0 4px 6px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (activeSection !== key) {
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 212, 255, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = activeSection === key 
                ? '0 0 20px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.1)' 
                : '0 4px 6px rgba(0, 0, 0, 0.3)';
              e.target.style.borderColor = activeSection === key ? 'rgba(0, 212, 255, 0.6)' : 'rgba(0, 212, 255, 0.3)';
            }}
          >
            {sections[key].icon} {sections[key].title}
          </button>
        ))}
      </div>

      {/* Contenu des sections */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1'
      }}>
        
        {/* Section Mythes */}
        {activeSection === 'myths' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {sections.myths.content.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                boxShadow: '0 8px 32px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #ef4444, #dc2626)',
                  boxShadow: '0 0 10px #ef4444'
                }}></div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  fontFamily: '"Orbitron", sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1px'
                }}>
                  ⚡ "{item.myth}"
                </h3>
                <div style={{ 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  padding: '1.2rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.1)'
                }}>
                  <strong style={{
                    color: '#10b981',
                    fontSize: '1.1rem',
                    textShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                  }}>✓ RÉALITÉ : </strong>
                  <span style={{ color: '#d1fae5' }}>{item.reality}</span>
                </div>
                <p style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  color: '#cbd5e1',
                  fontSize: '1.05rem',
                  fontFamily: '"Rajdhani", sans-serif'
                }}>
                  {item.explanation}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    color: '#00d4ff',
                    filter: 'drop-shadow(0 0 5px rgba(0, 212, 255, 0.5))'
                  }}>📡</span>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8',
                    fontStyle: 'italic',
                    fontFamily: '"Rajdhani", sans-serif',
                    letterSpacing: '0.5px'
                  }}>
                    Source : <span style={{ color: '#00d4ff', fontWeight: '600' }}>{item.source}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Solutions */}
        {activeSection === 'solutions' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {sections.solutions.content.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 8px 32px rgba(16, 185, 129, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) rotateX(2deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3), inset 0 0 30px rgba(16, 185, 129, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    color: '#fff',
                    fontFamily: '"Orbitron", sans-serif',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    background: 'linear-gradient(135deg, #10b981, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                  }}>
                    🛡️ {item.solution}
                  </h3>
                  <span style={{
                    padding: '0.5rem 1.2rem',
                    background: item.impact === 'Très élevé' 
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(0, 212, 255, 0.2))' 
                      : item.impact === 'Élevé' 
                      ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(59, 130, 246, 0.2))'
                      : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))',
                    color: item.impact === 'Très élevé' ? '#10b981' : item.impact === 'Élevé' ? '#3b82f6' : '#f59e0b',
                    borderRadius: '0.5rem',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    fontFamily: '"Orbitron", sans-serif',
                    letterSpacing: '1px',
                    border: '1px solid',
                    borderColor: item.impact === 'Très élevé' ? 'rgba(16, 185, 129, 0.4)' : item.impact === 'Élevé' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(245, 158, 11, 0.4)',
                    boxShadow: '0 0 15px',
                    boxShadowColor: item.impact === 'Très élevé' ? 'rgba(16, 185, 129, 0.3)' : item.impact === 'Élevé' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(245, 158, 11, 0.3)',
                    textTransform: 'uppercase'
                  }}>
                    IMPACT {item.impact}
                  </span>
                </div>
                <p style={{
                  marginBottom: '1.5rem',
                  lineHeight: '1.7',
                  color: '#cbd5e1',
                  fontSize: '1.05rem',
                  fontFamily: '"Rajdhani", sans-serif'
                }}>
                  {item.description}
                </p>
                <div style={{ 
                  background: 'rgba(0, 212, 255, 0.1)', 
                  padding: '1.2rem', 
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-20px',
                    transform: 'translateY(-50%)',
                    fontSize: '1.5rem',
                    color: '#00d4ff',
                    filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))'
                  }}>🎯</span>
                  <strong style={{
                    color: '#00d4ff',
                    fontSize: '1rem',
                    fontFamily: '"Orbitron", sans-serif',
                    letterSpacing: '0.5px',
                    marginLeft: '1.5rem'
                  }}>ACTION CONCRÈTE : </strong>
                  <span style={{ color: '#e2e8f0', marginLeft: '0.5rem' }}>{item.action}</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.2rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  width: 'fit-content'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    color: '#10b981',
                    filter: 'drop-shadow(0 0 5px rgba(16, 185, 129, 0.5))'
                  }}>💨</span>
                  <p style={{
                    color: '#10b981',
                    fontWeight: '800',
                    fontSize: '0.95rem',
                    fontFamily: '"Orbitron", sans-serif',
                    letterSpacing: '0.5px',
                    margin: 0
                  }}>
                    ÉCONOMIE : <span style={{ color: '#d1fae5' }}>{item.co2saved}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Chiffres */}
        {activeSection === 'data' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            perspective: '1000px'
          }}>
            {sections.data.content.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                textAlign: 'center',
                boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) rotateX(5deg)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.1)';
              }}>
                {/* Effet de bordure lumineuse */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                  animation: 'slideBorder 2s linear infinite'
                }}></div>
                
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #00d4ff, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem',
                  fontFamily: '"Orbitron", sans-serif',
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
                  letterSpacing: '2px'
                }}>
                  {item.stat}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  color: '#fff',
                  marginBottom: '1.5rem',
                  fontWeight: '600',
                  fontFamily: '"Orbitron", sans-serif',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {item.label}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontFamily: '"Rajdhani", sans-serif',
                  minHeight: '80px'
                }}>
                  {item.detail}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(0, 212, 255, 0.1)',
                  borderRadius: '0.25rem',
                  border: '1px solid rgba(0, 212, 255, 0.3)'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    color: '#00d4ff',
                    filter: 'drop-shadow(0 0 5px rgba(0, 212, 255, 0.5))'
                  }}>📡</span>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                    fontStyle: 'italic',
                    fontFamily: '"Rajdhani", sans-serif',
                    letterSpacing: '0.5px',
                    margin: 0
                  }}>
                    {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Ressources */}
        {activeSection === 'resources' && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {sections.resources.content.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '2rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 212, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
              }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#fff',
                    marginBottom: '0.75rem',
                    fontFamily: '"Orbitron", sans-serif',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>
                    {item.name}
                  </h3>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.3rem 1rem',
                    background: 'rgba(0, 212, 255, 0.15)',
                    color: '#00d4ff',
                    borderRadius: '0.25rem',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    fontFamily: '"Orbitron", sans-serif',
                    letterSpacing: '1px',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    textTransform: 'uppercase'
                  }}>
                    {item.type}
                  </span>
                  <p style={{
                    color: '#94a3b8',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontFamily: '"Rajdhani", sans-serif'
                  }}>
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.9rem 2rem',
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(16, 185, 129, 0.9))',
                    color: '#0f172a',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: '800',
                    whiteSpace: 'nowrap',
                    fontFamily: '"Orbitron", sans-serif',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1) rotate(2deg)';
                    e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1) rotate(0)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
                  }}
                >
                  ACCÉDER →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Call to action final */}
      <div style={{
        marginTop: '5rem',
        padding: '3rem',
        background: 'rgba(15, 23, 42, 0.8)',
        borderRadius: '1.5rem',
        textAlign: 'center',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 212, 255, 0.3)',
        boxShadow: '0 20px 60px rgba(0, 212, 255, 0.15), inset 0 0 50px rgba(0, 212, 255, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '1'
      }}>
        {/* Effet de particules */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 20%),
                          radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 20%)`,
          pointerEvents: 'none'
        }}></div>
        
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          color: '#fff',
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: '800',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          background: 'linear-gradient(135deg, #00d4ff, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
          position: 'relative',
          zIndex: '1'
        }}>
          MISSION FINALE : TESTEZ-VOUS ! 🎯
        </h2>
        <p style={{
          fontSize: '1.3rem',
          color: '#cbd5e1',
          marginBottom: '2.5rem',
          fontFamily: '"Rajdhani", sans-serif',
          fontWeight: '500',
          letterSpacing: '0.5px',
          position: 'relative',
          zIndex: '1',
          lineHeight: '1.6'
        }}>
          <span style={{ color: '#00d4ff', fontWeight: '700' }}>DÉFIEZ VOS CONNAISSANCES</span> - Maintenant que vous possédez les données scientifiques, 
          passez à l'action finale avec notre simulateur de mission !
        </p>
        <a
          href="/quiz"
          style={{
            display: 'inline-block',
            padding: '1.2rem 3rem',
            background: 'linear-gradient(135deg, #00d4ff, #10b981)',
            color: '#0f172a',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: '900',
            fontSize: '1.2rem',
            fontFamily: '"Orbitron", sans-serif',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            zIndex: '1'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1) translateY(-5px)';
            e.target.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)';
            e.target.style.filter = 'brightness(1.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) translateY(0)';
            e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4), 0 0 50px rgba(16, 185, 129, 0.2)';
            e.target.style.filter = 'brightness(1)';
          }}
        >
          LANCER LA MISSION →
        </a>
        
        {/* Effet de compteur en bas */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: '1'
        }}>
          {[
            { value: '99%', label: 'Certitude Scientifique' },
            { value: '2030', label: 'Échéance Critique' },
            { value: '1.5°C', label: 'Objectif Planétaire' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#00d4ff',
                fontFamily: '"Orbitron", sans-serif',
                textShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                fontFamily: '"Rajdhani", sans-serif',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ajout des animations CSS */}
      <style>
        {`
          @keyframes pulse {
            0% {
              text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            }
            100% {
              text-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(16, 185, 129, 0.4);
            }
          }
          
          @keyframes slideBorder {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Learn;