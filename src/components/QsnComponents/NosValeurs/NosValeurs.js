import React from 'react';
import './NosValeurs.scss';
import valeur from './../../../assets/img/valeur_pic_1.png';
import demarche_pic_a from './../../../assets/img/demarche_pic_a_1.png';
const NosValeurs = () => {
  return (
    <div className='NosValeurs'>
      <div className='NosValeurs-contant container'>
        <div className='image'>
          <img src={valeur} alt='valeur' />
        </div>
        <div className='valeur-description'>
          <div className='description'>
            <h2>Nos Valeurs</h2>
            <p>
              {' '}
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                AGEXIS
              </span>{' '}
              fait de ses projets et référence signification met en avant la
              synergie de son organisation et de son processus qualité, de ses
              talent projets contracté dans le cadre de ses engagements éthique
              et opérationnelles
            </p>
          </div>
          <img src={demarche_pic_a} alt='demarche_pic_a' />
        </div>
      </div>
    </div>
  );
};

export default NosValeurs;
