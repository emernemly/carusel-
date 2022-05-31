import React from 'react';
import './References.scss';
import reférence_a from './../../assets/img/reférence_a.png';
import reférence_b from './../../assets/img/reférence_b.png';
import reférence_c from './../../assets/img/reférence_c.png';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';

import Carousel from 'react-elastic-carousel';
const References = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className='references'>
      <div className='images'>
        <h2> Réferences</h2>
        <Carousel
          itemPadding={[10, 0]}
          showArrows={true}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
        >
          <img src={reférence_c} alt='reférence_a' />
          <img src={reférence_a} alt='reférence_b' />
          <img src={reférence_b} alt='reférence_c' />
        </Carousel>
        <div className='x'>
          <h4>337 logements - Versailles</h4>
          <button className='second-btn'>Lire la suite {' >'}</button>
        </div>
      </div>
      <div className='references-contant'>
        <div className='title'>
          <h3>
            Bàtiments et infrastructures <CadreUp />
          </h3>
          <h4>Gestion de projet - Ingénierie - Conseils</h4>
        </div>

        <p>
          De la définition du process jusqu'a la livraison nos connaissances et
          nos compétences à votre disposition pour produire des études fiables,
          précises et pertinentes conformément aux besoins de vos projets
        </p>
      </div>
    </div>
  );
};

export default References;
