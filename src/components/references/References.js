import React from 'react';
import './References.scss';

import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';
import ref_a from './../../assets/img/ref_a.jpg';
import HOTEL from './../../assets/img/HOTEL.jpg';
import perseragny from './../../assets/img/perseragny.jpg';
import PapillonsBlancs from './../../assets/img/PapillonsBlancs.jpg';
import auchan from './../../assets/img/auchan.jpg';
import Photo from './../../assets/img/Photo.jpg';
import ref_g from './../../assets/img/ref_g.png';
import ref_h from './../../assets/img/ref_h.png';
import Carousel from 'react-elastic-carousel';
const References = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
  ];
  return (
    <div className='references mt-5'>
      <div className='container'>
        <div className='images'>
          <h2>
            {' '}
            Réferences <CadreUp />
          </h2>
          <Carousel
            showArrows={true}
            pagination={false}
            itemsToShow={3}
            breakPoints={breakPoints}
            initialActiveIndex={2}
          >
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${ref_a})` }}
            ></div>
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${HOTEL})` }}
            ></div>
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${perseragny})` }}
            ></div>
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${PapillonsBlancs})` }}
            ></div>
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${auchan})` }}
            ></div>
            <div
              className='ref_01'
              style={{ backgroundImage: `url(${Photo})` }}
            ></div>

            {/* <img src={ref_b} alt='ref_b' />
            <img src={ref_c} alt='ref_c' />
            <img src={ref_d} alt='ref_d' />
            <img src={ref_e} alt='ref_e' />
            <img src={ref_f} alt='ref_f' />
            <img src={ref_g} alt='ref_g' /> */}
          </Carousel>
        </div>
      </div>
      <br />
      <br />
      <div className='references-contant mt-5'>
        <div className='container pt-5'>
          <div className='title'>
            <h3>
              Bàtiments et infrastructures <CadreUp />
            </h3>
            <h4>Gestion de projet - Ingénierie - Conseils</h4>
          </div>

          <p>
            De la définition du process jusqu'a la livraison nos connaissances
            et nos compétences à votre disposition pour produire des études
            fiables, précises et pertinentes conformément aux besoins de vos
            projets
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;
