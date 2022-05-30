import React from 'react';
import './Experise.scss';
import expertise_pic_up from '../../assets/img/expertise_pic_up.png';
import expertise_pic_down from '../../assets/img/expertise_pic_down.png';
import roue_expertise from '../../assets/img/roue_expertise.png';
import { ReactComponent as Fonctionelle } from '../../assets/icons/fonctionelle.svg';
import { ReactComponent as Technique } from '../../assets/icons/technique.svg';
import { ReactComponent as Travers } from '../../assets/icons/travers.svg';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';
const Expertise = () => {
  return (
    <div className='container_expertise'>
      <div className='images'>
        <img className='roue' src={roue_expertise} alt='roue_expertise' />

        <div className='up'>
          {' '}
          <img src={expertise_pic_up} alt='expertise_pic_up' />
          <div className='Num projects'>
            <h4>250</h4> <p>Porjets réalisés</p>
          </div>
        </div>
        <div className='down'>
          {' '}
          <div className='Num employes'>
            <h4>75</h4> <p>Employés</p>
          </div>{' '}
          <img src={expertise_pic_down} alt='expertise_pic_down' />
        </div>
      </div>
      <div className=' expertise'>
        <div className='discreption'>
          <div className='title'>
            <h2>
              Nos Expertise <CadreUp />
            </h2>
          </div>
          <p>
            De la définition du process jusqu'a la livraison des batiments.nous
            mettons nos connaissances et nos compétences a votre disposition
            pour produire des études fiables, précises et pertinentes
            conformément aux besoins de vos projets.
          </p>
        </div>
        <div className='type-expetise'>
          <div className='type fonctionnel'>
            <div className='svg-content svg-fonc'>
              {' '}
              <Fonctionelle />
            </div>

            <div className='définition'>
              <h3>Expertise fonctionnnel</h3>

              <p>
                De la définition du process jusqu'a la livraison des batiments
                nous mettons.
              </p>
            </div>
          </div>
          <div className='type technique'>
            <div className='svg-content'>
              <Technique />
            </div>

            <div className='définition'>
              <h3>Expertise technique</h3>
              <p>
                De la définition du process jusqu'a la livraison des
                batiments,nous mettons nos connaissances
              </p>
            </div>
          </div>
          <div className='type transverses'>
            <div className='svg-content'>
              {' '}
              <Travers />
            </div>

            <div className='définition'>
              <h3>Expertise transverses</h3>
              <p>
                {' '}
                De la définition du process jusqu'a q lq livraision ds
                batiments,nous mettons nos connaissances
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
