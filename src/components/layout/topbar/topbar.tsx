import './topbar.css'
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  return (
    <div className="topbar">
        <div className="left">
            <div className="stripe"></div>
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