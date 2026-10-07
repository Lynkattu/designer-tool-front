import NavIcon from '../../common/navIcon/navIcon';
import './topbar.css';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

import SiteLogo from '../../../assets/site_logo.png';
import CornerTriangle from '../../common/cornerTriangle/cornerTriangle';
import { UserAuthContext } from '../../../context/userAuthContext';
import SkewButton from '../../common/skewButton/skewButton';


function Topbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserAuthContext);

  return (
    <div className="topbar">
        <div className="left">
          <CornerTriangle position="top-left" size="50px" />
          <NavIcon imageSrc={SiteLogo} maxWidth="48px" navigateTo="/" />
        </div>


        <div className="right">
          {user ? (
            <>
              <SkewButton text="Moodboard" onClick={() => navigate('/moodboard')} />
              <SkewButton text="Profile" onClick={() => navigate('/profile')} />
            </>
          ) : (
            <>
              <SkewButton text="Sign In" onClick={() => navigate('/login')} />
              <SkewButton text="Sign Up" onClick={() => navigate('/register')} />
            </>
          )}
            <CornerTriangle 
              position="top-right" 
              size="50px"
            />
        </div>
    </div>
  )
}

export default Topbar