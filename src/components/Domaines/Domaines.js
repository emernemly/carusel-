import React, { useEffect, useState } from 'react';
import './Domaines.scss';
import CardDomaine from './CardDomaine';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';
import batiment_habitation from '../../assets/img/batiment_habitation.png';
import batiment_fonctionelle from '../../assets/img/batiment_fonctionelle.png';
import batiment_industruelle from '../../assets/img/batiment_industruelle.png';
import Aos from 'aos';
import Carousel from 'react-elastic-carousel';
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
    title: 'Infrastructures, ouvrages d’art, et VRD',
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
            Centres de secours, déchetterie… Bureaux Restauration / Hôtellerie /
            Centres de vacances
          </li>
        </ul>
      </div>
    ),
  },
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
];

const Domaines = () => {
  const [windowDimenion, setdetectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setdetectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className='_container'>
      <div className='all_carousel container' data-aos='fade-up'>
        <div className='title tsize'>
          <h2>
            Domaines D'interventions
            <div className='svg'>
              {' '}
              <CadreUp />
            </div>
          </h2>
        </div>
        <Carousel
          showArrows={windowDimenion.winWidth < 1013 ? false : true}
          pagination={windowDimenion.winWidth < 1013 ? true : false}
          itemsToShow={3}
          breakPoints={breakPoints}
        >
          {domaines.map((domaine, index) => (
            <CardDomaine key={index} domaine={domaine} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Domaines;
