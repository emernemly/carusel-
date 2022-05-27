import React from 'react';
import './Coordonnées.scss';
import { ReactComponent as Phone } from '../../../assets/icons/phone_icone_N.svg';
import { ReactComponent as Position } from '../../../assets/icons/position_icone_N.svg';
import { ReactComponent as Mail } from '../../../assets/icons/mail_icone_N_1.svg';
const Coordonnées = () => {
  return (
    <div className='coordonnées'>
      <div className='coordonnée emplacement'>
        <Position />
        <div className='donnée'>
          {' '}
          <h4>Adresse</h4>
          <p>77 RUE DANTON.93310 LE PRE SAINT GERVAIS</p>
        </div>
      </div>
      <div className='coordonnée telephoner'>
        <Phone />
        <div className='donnée'>
          <h4>Téléphone</h4>
          <p>01 84 03 98 29</p>
        </div>
      </div>
      <div className='coordonnée ecrivez-nous'>
        <Mail />
        <div className='donnée'>
          <h4>Ecrivez-nous</h4>
          <p>contact@agexis.com</p>
        </div>
      </div>
    </div>
  );
};

export default Coordonnées;
