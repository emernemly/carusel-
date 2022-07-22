import React, { useEffect, useState } from 'react';
import './Actualites.scss';
import CardActualites from './CardActualites';
import actualité_pic_a from './../../assets/img/actualité_pic_a.png';
import actualité_pic_b from './../../assets/img/actualité_pic_b.png';
import actualité_pic_c from './../../assets/img/actualité_pic_c.png';
import { ReactComponent as CadreUp } from '../../assets/icons/cadre_up.svg';
import Carousel from 'react-elastic-carousel';
import Aos from 'aos';
const Actualites = () => {
  const data = [
    {
      img: actualité_pic_c,
      title: "La maison de demain : comment l'imaginer ?",
      description: `La maison de demain se profile peu. Certains
            la présentent comme hyper-connectée, ultra-sécurisée,
            écologique,et intelligent.`,
      date: '5 janivier 2022',
    },
    {
      img: actualité_pic_b,
      title: 'Les technologies qui transorment le secteur du BTP?',
      description: `Malgré les prouesses technologiques de ces trois derniéres
        décennies.ldes travaux publics prend encore du retarden termes d'adoption des nouvelles technologies`,
      date: '21 Mars 2022',
    },
    {
      img: actualité_pic_a,
      title: 'Tout ce dont il faut savoir sur le béton cellulaire',
      description: `Le béton cellulaire est commercialisé pour la premiére fois en 1929 sous la marque Ytong.
        Le matériau connait alors une expansion rapide dans tout l'europe`,
      date: '15 Mai 2022',
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ];
  //show pagination
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='_container'>
      {' '}
      <div className='actualites container' data-aos='fade-up'>
        <div className='subtitle tsize'>
          {' '}
          <h2>
            Actualités <CadreUp />
          </h2>
        </div>
        <Carousel
          breakPoints={breakPoints}
          showArrows={windowDimenion.winWidth < 1013 ? false : true}
          pagination={windowDimenion.winWidth < 1013 ? true : false}
          itemsToShow={3}
        >
          {data.map((el, i) => (
            <CardActualites key={i} el={el} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Actualites;
