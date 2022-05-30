import React from 'react';
import Actualites from '../../components/actualités/Actualites';
//import { useDispatch } from 'react-redux';
import Coditions from '../../components/Coditions-technique/Coditions';
import Devis from '../../components/Devis/Devis';
import Domaines from '../../components/Domaines/Domaines';
import Expertise from '../../components/expertise/Expertise';
import Partner from '../../components/Footer/Partner/Partner';
import Slider from '../../components/Slider/Slider';
import './Home.scss';

const Home = () => {
  // const dispatch = useDispatch();
  // const Logout = () => {
  //   dispatch({
  //     type: 'REMOVE_TOKEN',
  //   });
  //   dispatch({
  //     type: 'REMOVE_USER',
  //   });
  // };
  return (
    <div className='home'>
      <Slider />
      <Coditions />
      <Expertise />
      <Domaines />
      <Actualites />
      <Devis />
      <Partner />
    </div>
  );
};
export default Home;
