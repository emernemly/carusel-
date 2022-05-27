import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import LogoWhite from '../../assets/img/logo_agexis_blanc.png';
import LogoBlue from '../../assets/img/logo_agexis.jpg';
import phone from '../../assets/icons/phone.jpg';
import mail from '../../assets/icons/mail.jpg';
import facebook from '../../assets/icons/facebook.jpg';
import linkid from '../../assets/icons/linkid.jpg';
import twiter from '../../assets/icons/twiter.jpg';
import youtube from '../../assets/icons/youtube.jpg';
import search from '../../assets/icons/search.jpg';
import { BsList } from 'react-icons/bs';

import './Header.scss';
function _Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // header-top-------------------
    <div className='header'>
      <div className='header-top'>
        {/* <div className='background'></div> */}
        <Link to='/'>
          <img
            className='logo-original'
            src={LogoBlue}
            alt='Logo agexis bureau etude france'
          />
        </Link>
        <div className='contact'>
          <div className='contact-icon phone'>
            <img src={phone} alt='phone' />
            <p>01 84 03 98 29</p>
          </div>
          <div className='contact-icon mail'>
            <img src={mail} alt='mail' />
            <p>CONTACT@AGEXIS.COM</p>
          </div>
          <div className='contact-icon social'>
            <img src={facebook} alt='facebook' />
            <img src={twiter} alt='twiter' />
            <img src={youtube} alt='youtube' />
            <img src={linkid} alt='linkid' />
            <img src={search} alt='search' className='search' />
          </div>
        </div>
      </div>

      <>
        <Offcanvas
          style={{ backgroundColor: '#1c2c4e' }}
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: 'white' }}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className=' sidebar-items'>
              <NavLink to='/'>Accueil</NavLink>
              <NavLink to='/qsn'>Qui sommes-nous</NavLink>
              <NavLink to='/activite'>Activité</NavLink>
              <NavLink to='/marche'>Marché</NavLink>
              <NavLink to='/acualite'>Actualité</NavLink>
              <NavLink to='/carriere'>Carriére</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
              <NavLink to='/demarche'>Démarche</NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <div className='header-nav'>
        <div className='navbar-items'>
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='/qsn'>Qui sommes-nous</NavLink>
          <NavLink to='/activite'>Activité</NavLink>
          <NavLink to='/marche'>Marché</NavLink>
          <NavLink to='/acualite'>Actualité</NavLink>
          <NavLink to='/carriere'>Carriére</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/demarche'>Démarche</NavLink>
        </div>
        <div className='responsive'>
          <img src={LogoWhite} alt='Logo agexis bureau etude france' />
          <BsList onClick={handleShow} />
          {/* <Button variant='primary' onClick={handleShow}>
            Launch
          </Button> */}
        </div>
      </div>
    </div>
  );
}
export default _Nav;
