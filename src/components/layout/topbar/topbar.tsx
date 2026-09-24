import NavIcon from '../../common/navIcon/navIcon';
import './topbar.css';
import { useNavigate } from "react-router-dom";
import SkewButton from '../../common/skewButton/skewButton';

import SiteLogo from '../../../assets/site_logo.png';
import CornerTriangle from '../../common/cornerTriangle/cornerTriangle';

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
        <div className="left">
          <CornerTriangle position="top-left" size="50px" />
          <NavIcon imageSrc={SiteLogo} maxWidth="48px" navigateTo="/" />
        </div>


        <div className="right">
            <SkewButton text="Sign In" onClick={() => navigate('/login')} />
            <SkewButton text="Sign Up" onClick={() => navigate('/register')} />
            <CornerTriangle 
              position="top-right" 
              size="50px"
            />
        </div>
    </div>
  )
}

export default Topbar