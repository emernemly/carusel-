import React from 'react';
import NosValeurs from '../../components/QsnComponents/NosValeurs/NosValeurs';
import NotreDemarche from '../../components/QsnComponents/NotreDemarche/NotreDemarche';
import Presentation from '../../components/QsnComponents/Presentation/Presentation';
import './Qsn';
const Qsn = () => {
  return (
    <div className='qsn'>
      <Presentation />
      <NosValeurs />
      <NotreDemarche />
    </div>
  );
};

export default Qsn;
