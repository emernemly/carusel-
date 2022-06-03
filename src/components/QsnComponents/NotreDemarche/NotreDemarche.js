import React from 'react';
import './NotreDemarche.scss';
import demarche_pic from './../../../assets/img/presentation_pic_c.png';
const NotreDemarche = () => {
  return (
    <div className='NotreDemarche'>
      <div className='NotreDemarche-contant'>
        <div className='contant'>
          <div className='description'>
            <h2> Notre démarche</h2>
            <p>
              <span style={{ fontWeight: 'bold', color: 'black' }}>AGEXIS</span>{' '}
              a dont le but de développer son offre et répandre a ses
              engagements opérationnels et techniques d'excellence tout en ayant
              une vision en harmonie d'un point de vue sociétalet écologique
            </p>
          </div>
          <ul>
            <li>Mise en place d'une organisation iso certifier</li>
            <li> Mise en place d'une offre technique..Certifier</li>
            <li>Développé le BIM et la transition numérique </li>
          </ul>
        </div>
        <div className='image'>
          <img src={demarche_pic} alt='demarche_pic.png' />
        </div>
      </div>
    </div>
  );
};

export default NotreDemarche;
