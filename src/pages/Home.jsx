import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container" style={{
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

      {/* Étoiles/trous noirs décoratifs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '15%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: '1'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '4rem',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #00d4ff 0%, #10b981 50%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: '900',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          textShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
          animation: 'pulse 3s ease-in-out infinite alternate',
          lineHeight: '1.2'
        }}>
          MISSION <span style={{ display: 'block', fontSize: '5rem' }}>CLIMAT 2030</span>
        </h1>

        <p style={{
          textAlign: 'center',
          fontSize: '1.4rem',
          color: '#94a3b8',
          marginBottom: '4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: '1.6',
          fontFamily: '"Rajdhani", sans-serif',
          fontWeight: '500',
          letterSpacing: '0.5px',
          padding: '0 1rem'
        }}>
          <span style={{ color: '#00d4ff', fontWeight: '700' }}>DÉFIEZ VOTRE IMPACT</span> - Adoptez des actions concrètes pour réduire votre empreinte carbone et contribuer à un avenir plus durable. Chaque geste compte dans cette mission planétaire !
        </p>

        {/* Section des cartes principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '5rem',
          perspective: '1000px'
        }}>
          {/* Carte 1: Testez vos connaissances */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 212, 255, 0.15)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 212, 255, 0.3), inset 0 0 40px rgba(0, 212, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 212, 255, 0.15)';
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #00d4ff, #10b981)',
              boxShadow: '0 0 10px #00d4ff'
            }}></div>
            
            <div style={{
              fontSize: '3.5rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))'
            }}>
              🎯
            </div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: '1rem',
              textAlign: 'center',
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: '700',
              letterSpacing: '1px'
            }}>
              TEST DE MISSION
            </h3>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Évaluez vos connaissances des enjeux climatiques avec notre simulateur d'entraînement interactif. Préparez-vous pour la mission !
            </p>
            <Link 
              to="/quiz" 
              style={{
                display: 'block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #00d4ff, #10b981)',
                color: '#0f172a',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '1.1rem',
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 25px rgba(0, 212, 255, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 35px rgba(0, 212, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 25px rgba(0, 212, 255, 0.4)';
              }}
            >
              LANCER L'ENTRAÎNEMENT
            </Link>
          </div>

          {/* Carte 2: Apprenez les bases */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(16, 185, 129, 0.3), inset 0 0 40px rgba(16, 185, 129, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.15)';
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #10b981, #00d4ff)',
              boxShadow: '0 0 10px #10b981'
            }}></div>
            
            <div style={{
              fontSize: '3.5rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))'
            }}>
              📚
            </div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: '1rem',
              textAlign: 'center',
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: '700',
              letterSpacing: '1px'
            }}>
              BASE DE DONNÉES
            </h3>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Accédez aux données scientifiques essentielles sur le changement climatique, les solutions disponibles et les ressources fiables.
            </p>
            <Link 
              to="/learn" 
              style={{
                display: 'block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #10b981, #00d4ff)',
                color: '#0f172a',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '1.1rem',
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 35px rgba(16, 185, 129, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.4)';
              }}
            >
              EXPLORER LA BASE
            </Link>
          </div>

          {/* Carte 3: Passez à l'action */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 10px 40px rgba(239, 68, 68, 0.15)',
            transformStyle: 'preserve-3d',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px) rotateX(5deg)';
            e.currentTarget.style.boxShadow = '0 25px 60px rgba(239, 68, 68, 0.3), inset 0 0 40px rgba(239, 68, 68, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) rotateX(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(239, 68, 68, 0.15)';
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #ef4444, #f59e0b)',
              boxShadow: '0 0 10px #ef4444'
            }}></div>
            
            <div style={{
              fontSize: '3.5rem',
              textAlign: 'center',
              marginBottom: '1.5rem',
              filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.5))'
            }}>
              ⚡
            </div>
            <h3 style={{
              fontSize: '1.8rem',
              color: '#fff',
              marginBottom: '1rem',
              textAlign: 'center',
              fontFamily: '"Orbitron", sans-serif',
              fontWeight: '700',
              letterSpacing: '1px'
            }}>
              ACTIONS URGENTES
            </h3>
            <p style={{
              color: '#cbd5e1',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Découvrez <strong style={{ color: '#10b981' }}>15 gestes quotidiens simples</strong> pour réduire votre impact environnemental dès aujourd'hui. Chaque action compte dans la lutte climatique.
            </p>
            <Link 
              to="/actions" 
              style={{
                display: 'block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
                color: '#0f172a',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '1.1rem',
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 25px rgba(239, 68, 68, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 35px rgba(239, 68, 68, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 25px rgba(239, 68, 68, 0.4)';
              }}
            >
              VOIR LE PLAN D'ACTION
            </Link>
          </div>
        </div>

        {/* Info Box: Le saviez-vous ? */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.9)',
          borderRadius: '1.5rem',
          padding: '3rem',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          boxShadow: '0 15px 50px rgba(0, 212, 255, 0.1), inset 0 0 60px rgba(0, 212, 255, 0.05)',
          marginBottom: '5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #00d4ff, #10b981, transparent)',
            animation: 'slideBorder 3s linear infinite'
          }}></div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontSize: '3.5rem',
              filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))',
              flexShrink: '0'
            }}>
              💡
            </div>
            <div>
              <h2 style={{
                fontSize: '2.2rem',
                color: '#fff',
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: '800',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #00d4ff, #10b981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
              }}>
                ALERTE SCIENTIFIQUE
              </h2>
              <p style={{
                color: '#94a3b8',
                fontSize: '1.1rem',
                fontFamily: '"Rajdhani", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                Données actualisées - Source : GIEC 2023
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(0, 212, 255, 0.1)',
              padding: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid rgba(0, 212, 255, 0.2)'
            }}>
              <h3 style={{
                color: '#00d4ff',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: '600'
              }}>
                ⏱️ Fenêtre d'action critique
              </h3>
              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1.05rem'
              }}>
                Nous avons jusqu'à <strong style={{ color: '#ef4444' }}>2030</strong> pour réduire drastiquement nos émissions. 
                Chaque année de retard rend l'objectif de +1.5°C plus difficile à atteindre.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <h3 style={{
                color: '#10b981',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: '600'
              }}>
                💪 Impact collectif
              </h3>
              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1.05rem'
              }}>
                Si <strong>1 million de personnes</strong> réduisent leur empreinte carbone de 2 tonnes par an, 
                c'est l'équivalent de retirer <strong>400,000 voitures</strong> de la circulation.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              padding: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}>
              <h3 style={{
                color: '#ef4444',
                fontSize: '1.3rem',
                marginBottom: '1rem',
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: '600'
              }}>
                🚀 Solutions efficaces
              </h3>
              <p style={{
                color: '#cbd5e1',
                lineHeight: '1.6',
                fontSize: '1.05rem'
              }}>
                Les <strong>3 actions</strong> les plus impactantes : énergies renouvelables, 
                mobilité durable et réduction de la viande rouge. Ensemble, elles peuvent réduire 
                votre empreinte jusqu'à <strong>70%</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section des statistiques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '2.5rem 1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.1)';
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00d4ff, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
              fontFamily: '"Orbitron", sans-serif',
              textShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
              letterSpacing: '2px'
            }}>
              +1.5°C
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Limite critique
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              marginTop: '0.5rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Objectif maximal de réchauffement (Accord de Paris)
            </div>
          </div>

          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '2.5rem 1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.1)';
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #10b981, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
              fontFamily: '"Orbitron", sans-serif',
              textShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
              letterSpacing: '2px'
            }}>
              2030
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Échéance
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              marginTop: '0.5rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Pour réduire de 50% les émissions mondiales
            </div>
          </div>

          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '2.5rem 1.5rem',
            borderRadius: '1rem',
            textAlign: 'center',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(239, 68, 68, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.1)';
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
              fontFamily: '"Orbitron", sans-serif',
              textShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
              letterSpacing: '2px'
            }}>
              -55%
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#94a3b8',
              fontFamily: '"Rajdhani", sans-serif',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Objectif UE
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#cbd5e1',
              marginTop: '0.5rem',
              fontFamily: '"Rajdhani", sans-serif'
            }}>
              Réduction des émissions d'ici 2030 (vs 1990)
            </div>
          </div>
        </div>

        {/* Appel à l'action final */}
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          background: 'rgba(15, 23, 42, 0.9)',
          borderRadius: '1.5rem',
          border: '2px solid rgba(0, 212, 255, 0.4)',
          boxShadow: '0 0 50px rgba(0, 212, 255, 0.2), inset 0 0 50px rgba(0, 212, 255, 0.05)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#fff',
            marginBottom: '1.5rem',
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: '800',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            PRÊT POUR LA MISSION ?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#94a3b8',
            marginBottom: '2.5rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Le temps est compté. Rejoignez les <strong style={{ color: '#00d4ff' }}>millions de personnes</strong> qui agissent déjà pour le climat. 
            Chaque action compte dans cette bataille pour notre avenir.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/quiz" 
              style={{
                padding: '1.2rem 2.5rem',
                background: 'linear-gradient(135deg, #00d4ff, #10b981)',
                color: '#0f172a',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '1.1rem',
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 0 40px rgba(0, 212, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.4)';
              }}
            >
              COMMENCER LA MISSION
            </Link>
            <Link 
              to="/learn" 
              style={{
                padding: '1.2rem 2.5rem',
                background: 'transparent',
                color: '#00d4ff',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '900',
                fontSize: '1.1rem',
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                border: '2px solid #00d4ff',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0, 212, 255, 0.1)';
                e.target.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
              }}
            >
              S'INFORMER D'ABORD
            </Link>
          </div>
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

export default Home;