import React from 'react';
import './Coditions.scss';

import { ReactComponent as GestionProjet } from '../../assets/icons/gestion_de_projet.svg';
import { ReactComponent as Ingenierie } from '../../assets/icons/ingenierie.svg';
import { ReactComponent as Conseils } from '../../assets/icons/conseils.svg';

const Coditions = () => {
  return (
    <div className='conditions '>
      <div className='condition gestion_de_projet '>
        <GestionProjet />
        <h5>
          Gestion de <br />
          projet
        </h5>
      </div>
      <div className='condition ingenierie '>
        <Ingenierie />
        <h5>Ingénierie</h5>
      </div>
      <div className='condition conseils '>
        {' '}
        <Conseils />
        <h5>Conseils</h5>
      </div>
    </div>
  );
};
export default Coditions;
