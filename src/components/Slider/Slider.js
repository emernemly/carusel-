import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.scss';
// import Slider_1 from '../../assets/img/accueil_picture.jpg';
function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item className='carousel-slider slider-1'>
        <div className='slider-text'>
          <h1>
            Bureau d'étude <br /> pludisciplinaire
          </h1>
          <h2>
            AGEXIS est une société d'ingénierie <br /> et de gestion des projets{' '}
            <br />
            de la construction
          </h2>
          <button className='second-btn'>Devis el ligne</button>
        </div>
      </Carousel.Item>
      {/* <Carousel.Item className='carousel-slider slider-2'>
        <div className='slider-text'>
          <h1>
            Bureau d'étude <br /> pludisciplinaire
          </h1>
          <h2>
            Agexis est une société d'ingénierie <br /> et de gestion des projets{' '}
            <br />
            de la construction
          </h2>
          <button className='primary-btn'>Lire la suite</button>
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;
