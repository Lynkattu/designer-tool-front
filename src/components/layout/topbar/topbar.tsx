import NavIcon from '../../common/navIcon/navIcon';
import './topbar.css'
import { useNavigate } from "react-router-dom";
import SiteLogo from '../../../assets/site_logo.png'

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
        <div className="left">
            <div className="stripe"></div>
            <NavIcon imageSrc={SiteLogo} maxWidth="48px" navigateTo="/" />
        </div>


        <div className="right">
            <button onClick={() => navigate('/login')}><p>Sign In</p></button>
            <button onClick={() => navigate('/register')}><p>Sign Up</p></button>
            <div className="stripe"></div>
        </div>
    </div>
  )
}

export default Topbar