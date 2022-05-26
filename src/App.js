/*  eslint-disable */
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import _Nav from './components/Header/_Nav';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import Presentation from './pages/Propos-Agexis/Presentation';
import Valeurs from './pages/Propos-Agexis/Valeurs';
import Missions from './pages/Activites/Missions';
import Expertise from './pages/Activites/Expertise';
import Intervention from './pages/Marche-Realisation.js/Intervention';
import ProjetRealise from './pages/Marche-Realisation.js/ProjetRealise';
import Innovation from './pages/Actualite/Innovation';
import { NvPartenariate } from './pages/Actualite/NvPartenariate';
import DemarcheClient from './pages/Actualite/DemarcheClient';
import Reglementation from './pages/Actualite/Reglementation';
import SaviezVous from './pages/Actualite/SaviezVous';
import EnvironnementRH from './pages/CarriereTalent.js/EnvironnementRH';
import Matier from './pages/CarriereTalent.js/Matier';
import Partenariat from './pages/Contact/Partenariat';
import NvProjet from './pages/Contact/NvProjet';
import RSE from './pages/Demarche/RSE';
import RGE from './pages/Demarche/RGE';
import BIM from './pages/Demarche/BIM';
import Footer from './components/Footer/Footer';
function App() {
  const TokenReducer = useSelector((state) => state.TokenReducer);

  const VerifAuth = (route) => {
    return TokenReducer ? route : <Navigate to='/login' />;
  };

  return (
    <div className='App'>
      <_Nav />

      <div className='content-app'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={!TokenReducer ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/register'
            element={!TokenReducer ? <Register /> : <Navigate to='/' />}
          />
          <Route path='/presentation' element={VerifAuth(<Presentation />)} />
          <Route path='/valeurs' element={VerifAuth(<Valeurs />)} />
          <Route path='/missions' element={VerifAuth(<Missions />)} />
          <Route path='/expertise' element={VerifAuth(<Expertise />)} />
          <Route path='/domaine' element={VerifAuth(<Intervention />)} />
          <Route
            path='/projet-realise'
            element={VerifAuth(<ProjetRealise />)}
          />
          <Route
            path='/innovation-technique'
            element={VerifAuth(<Innovation />)}
          />
          <Route
            path='/nouveau-partenariat'
            element={VerifAuth(<NvPartenariate />)}
          />
          <Route
            path='/demarche-client'
            element={VerifAuth(<DemarcheClient />)}
          />
          <Route
            path='/reglementation'
            element={VerifAuth(<Reglementation />)}
          />
          <Route path='saviez-vous' element={VerifAuth(<SaviezVous />)} />
          <Route
            path='/environnement'
            element={VerifAuth(<EnvironnementRH />)}
          />
          <Route path='/metier-post-pourvoir' element={VerifAuth(<Matier />)} />
          <Route path='/partenariat' element={VerifAuth(<Partenariat />)} />
          <Route path='/NvProjet' element={VerifAuth(<NvProjet />)} />
          <Route path='/demarche-RSE' element={VerifAuth(<RSE />)} />
          <Route path='/demarche-RGE' element={VerifAuth(<RGE />)} />
          <Route path='/BIM' element={VerifAuth(<BIM />)} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
