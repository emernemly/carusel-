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
      description: (
        <div className='choix'>
          <ul>
            <li> Maisons individuelles</li>
            <li>Appartements Bâtiments</li>
            <li> d’habitation collectifs</li>
            <li> Logements sociaux</li>
          </ul>
        </div>
      ),
    },
    {
      image: batiment_fonctionelle,
      title: 'Batiments fonctionelle',
      description: (
        <div className='choix'>
          <ul>
            <li> Immeubles Grande Hauteur (IGH) et immeubles de Très</li>
            <li> Grande Hauteur (ITGHI)</li>
            <li> Bâtiments administratifs</li>
            <li>Bâtiments d’enseignement...</li>
          </ul>
        </div>
      ),
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description: (
        <div className='choix'>
          <ul>
            <li> Unités de stockage</li>
            <li>
              {' '}
              Bâtiments industriels / Locaux techniques usines, stations
              <br />
              d’épuration, entrepôts et hangars
            </li>
            <li> Centres d’exploitation routière</li>
            <li>
              {' '}
              Centres de secours, déchetterie…
              <br /> Bureaux Restauration / Hôtellerie / Centres de vacances
            </li>
          </ul>
        </div>
      ),
    },
    {
      image: batiment_industruelle,
      title: 'INFRASTRUCTURES, OUVRAGES D’ART, ET VRD',
      description: (
        <div className='choix'>
          <ul>
            <li> Unités de stockage</li>
            <li>
              Bâtiments industriels / Locaux techniques usines, stations
              d’épuration, entrepôts et hangars
            </li>
            <li> Centres d’exploitation routière</li>
            <li>
              {' '}
              Centres de secours, déchetterie… Bureaux Restauration / Hôtellerie
              / Centres de vacances
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 900, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className='all_carousel'>
      <div className='title'>
        <h2>
          <CadreDown />
          DOMAINES D'INTERVENTIONS
          <div className='svg'>
            {' '}
            <CadreUp />
          </div>
        </h2>
      </div>
      <Carousel
        showArrows={true}
        pagination={false}
        itemsToShow={3}
        breakPoints={breakPoints}
      >
        {domaines.map((domaine, index) => (
          <CardDomaine key={index} domaine={domaine} />
        ))}
      </Carousel>
    </div>
  );
};

export default Domaines;
