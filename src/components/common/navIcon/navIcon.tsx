import "./navIcon.css";
import { useNavigate } from "react-router-dom";

interface NavIconProps {
    imageSrc: string;
    navigateTo?: string;
    maxWidth?: string;
}

function NavIcon({ imageSrc, navigateTo, maxWidth }: NavIconProps) {
    const navigate = useNavigate();

    return (
        <div className="nav-icon">
            <button onClick={() => navigate(navigateTo || '/')} >
                <img src={imageSrc} alt="nav-icon" style={{ maxWidth }}/>
            </button>
        </div>
    );
}

export default NavIcon;