import React from 'react';
import './Chiffres.scss';
import { ReactComponent as Employer } from './../../assets/icons/employer.svg';
import { ReactComponent as Parteniare } from './../../assets/icons/partenaire.svg';
import { ReactComponent as Porjets } from './../../assets/icons/projets réalisé.svg';
const Chiffres = () => {
  return (
    <div className='_containe'>
      {' '}
      <div className='chiffres container'>
        {' '}
        <div className='title tsize'>
          {' '}
          <h2>Chiffres Clés</h2>
        </div>
        <div className='contant'>
          <div className='employer r '>
            <Employer />
            <p>Employés</p>
            <h4>75</h4>
          </div>
          <div className=' projets r '>
            <Porjets />
            <p> Projets réalisés</p>
            <h4>250</h4>
          </div>
          <div className='parteniares r'>
            <Parteniare />
            <p>Clients partenaires</p>
            <h4>30</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chiffres;
