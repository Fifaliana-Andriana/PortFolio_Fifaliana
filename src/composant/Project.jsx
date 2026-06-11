import React from 'react'

function Project() {
  return (
    <div id='Project' className="w100prc bgGreen">
      <div>
        <h2>Mes Projets</h2>
        <div class="projects">
          <div class="project-card">
            <img
              src="https://via.placeholder.com/600x280/1a2a3a/00d4ff?text=Projet+1"
              alt=""
            />
            <div>
              <h3>Application de Gestion</h3>
              <p>
                Système complet avec authentification, rôles, dashboard et CRUD
                avancé.
              </p>
            </div>
          </div>

          <div class="project-card">
            <img
              src="https://via.placeholder.com/600x280/1a2a3a/00d4ff?text=Projet+2"
              alt=""
            />
            <div>
              <h3>Plateforme E-commerce</h3>
              <p>
                Boutique en ligne avec panier, paiement et gestion
                administrative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
