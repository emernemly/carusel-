import React from 'react';

import facebook_f from '../../assets/icons/facebook_icone_b.svg';
import twiter_f from '../../assets/icons/twiter_icone_b.svg';
import youtube_f from '../../assets/icons/youtube_icone_b.svg';
import linkidin_f from '../../assets/icons/linkidin_icone_b.svg';
import './Footer.scss';
import LogoWhite from '../../assets/img/logo_agexis_blanc.png';
const Footer = () => {
  return (
    <footer>
      <div className='footer-1'>
        <div>
          <img src={LogoWhite} alt='AGEXIS' />
          <p>
            Vous étes à la recherche d'un bureau de confiance pour réaliser des
            études techniques ou spécifiques pour concevoir votre projet de
            construction
            <br />
            AGEXIS répond à vos tous vos besoins, memes les plus complexes pour
            vous fournir des études fiables et précises répondant aux normes en
            vigueur. Contactez-nous dès maintenant !
          </p>
        </div>
      </div>
      <div className='links'>
        <h4>Accés rapide</h4>
        <div className='link'>
          <a href='/batiment'>{'>> '}BATIMENT</a>
          <a href='/nos-metiers'>{'>> '}NOS METIERS</a>
          <a href='/déposez-CV'>{'>> '} Déposez CV</a>
          <a href='nos-offres'>{'>> '} Nos offres</a>
        </div>
      </div>
      <div className='contact'>
        <h4>Contact rapide</h4>
        <div className='contact_1'>
          <input placeholder='Adresse mail' type='text' />
          <button className='second-btn'>Envoyer</button>
        </div>
        <div className='icons'>
          <img src={facebook_f} alt='facebook' />
          <img src={twiter_f} alt='twiter' />
          <img src={youtube_f} alt='youtube' />
          <img src={linkidin_f} alt='linkidin' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
