import React from 'react';
//import { useDispatch } from 'react-redux';
import Coditions from '../../components/Coditions-technique/Coditions';
import Devis from '../../components/Devis/Devis';
import Domaines from '../../components/Domaines/Domaines';
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
      {/* <Devis /> */}
      <Domaines />
    </div>
  );
};
export default Home;
