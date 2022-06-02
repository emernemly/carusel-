import React from 'react';
import './Devis.scss';
const Devis = () => {
  return (
    <div className='Devis'>
      <div>
        <div className='discription'>
          <h3>
            Demandez votre <br />
            devis maintenant
          </h3>
          <p>
            réalisez gratuitement votre demande de devis en ligne de bureau
            d'études et choisissez un professionnel pour vos travaux
          </p>
        </div>
        <div className='form'>
          <div className='Np'>
            <input type='text' className='nom' placeholder='Nom' />
            <input type='text' className='prenom' placeholder='Prénom' />
          </div>
          <input type='text' placeholder='Email' />
          <textarea type='text' placeholder='Sujet' />
          <button className='second-btn'>Envoyer le Message</button>
        </div>
      </div>
    </div>
  );
};

export default Devis;
