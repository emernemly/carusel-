import React from 'react';
import './Partner.scss';
import { ReactComponent as Paris } from '../../assets/img/logo_pari.svg';
import { ReactComponent as Parc } from '../../assets/img/logo_parc.svg';
import { ReactComponent as ISG } from '../../assets/img/logo_svg.svg';
import { ReactComponent as Opera } from '../../assets/img/logo_opera.svg';
// import { ReactComponent as  } from '../../../assets/img/logo_opera.svg';
import Carousel from 'react-elastic-carousel';

const Partner = () => {
  const breakPoints = [
    { width: 603, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    // <div className='partner'>
    //   <Carousel
    //     showArrows={false}
    //     breakPoints={breakPoints}
    //     pagination={false}
    //     itemsToShow={3}
    //   >
    //     <div className='partner-item'>
    //       <Paris />
    //     </div>
    //     <div className='partner-item'>
    //       <Parc />
    //     </div>
    //     <div className='partner-item'>
    //       <ISG />
    //     </div>
    //     <div className='partner-item'>
    //       <Opera />
    //     </div>
    //   </Carousel>
    // </div>

    <div className='slider'>
      <div className='slide-track'>
        <div className='slide'>
          <Paris />
        </div>
        <div className='slide'>
          <Parc />
        </div>
        <div className='slide igs'>
          <ISG />
        </div>
        <div className='slide igs'>
          <Opera />
        </div>
        <div className='slide'>
          <Paris />
        </div>
        <div className='slide'>
          <Parc />
        </div>
        <div className='slide igs'>
          <ISG />
        </div>
        <div className='slide igs'>
          <ISG />
        </div>
        <div className='slide'>
          <Opera />
        </div>
        <div className='slide'>
          <Paris />
        </div>
        <div className='slide'>
          <Parc />
        </div>
        <div className='slide igs'>
          <ISG />
        </div>
        <div className='slide'>
          <Opera />
        </div>
        <div className='slide'>
          <Paris />
        </div>
      </div>
    </div>
  );
};

export default Partner;
