import React from 'react';
import './Domaines.scss';
import CardDomaine from './CardDomaine';
import { ReactComponent as CadreDown } from '../../assets/icons/cadre_down.svg';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';
import batiment_habitation from '../../assets/img/batiment_habitation.png';
import batiment_fonctionelle from '../../assets/img/batiment_fonctionelle.png';
import batiment_industruelle from '../../assets/img/batiment_industruelle.png';
import Carousel from 'react-elastic-carousel';
const Domaines = () => {
  const domaines = [
    {
      image: batiment_habitation,
      title: "Batiments d'habitation",
      description:
        "Conception, construction ou réhabilitation de batiments d'habitation maisons individuelles neuves,logements collectifs et sociaux",
    },
    {
      image: batiment_fonctionelle,
      title: 'Batiments fonctionelle',
      description:
        "Construction et réhabilitation d'ouvrages fonctionnels : scolaires, culturels, sportifs et établissements hospitaliers et hoteliers",
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description:
        "Construction et réhabilitation d'ouvrages fonctionnels : scolaires, culturels, sportifs et établissements hospitaliers et hoteliers",
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description:
        "Construction et réhabilitation d'ouvrages fonctionnels : scolaires, culturels, sportifs et établissements hospitaliers et hoteliers",
    },
  ];
  return (
    <div className='all_carousel'>
      <div className='title'>
        <h2>
          <CadreDown />
          DOMAINES D'INTERVENTIONS
          <div className='svg'>
            {' '}
            <CadreUp className='up' />
          </div>
        </h2>
      </div>
      <Carousel showArrows={true} pagination={false} itemsToShow={3}>
        {domaines.map((domaine, index) => (
          <CardDomaine key={index} domaine={domaine} />
        ))}
      </Carousel>
    </div>
  );
};

export default Domaines;
