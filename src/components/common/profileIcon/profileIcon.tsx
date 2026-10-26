import { useContext, useEffect, useRef, useState } from 'react';
import './profileIcon.css';
import anonymousUser from '../../../assets/default-icon.png';
import { UserAuthContext } from '../../../context/userAuthContext';

function ProfileIcon() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { user } = useContext(UserAuthContext);
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState(anonymousUser);

    const handleFileUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fileUploadRef.current?.click();

    }

    useEffect(() => {
        if(user?.userIcon) {
            setImage(`${apiUrl}/user-icons/${user.userIcon.iconUrl}`);
        }

    }, [image]);

    return (
        <div className="profile-icon">
            <img src={image} alt="Profile" />
            <button onClick={handleFileUpload}></button>
            <form>
                <input ref={fileUploadRef} type="file" accept="image/*" hidden onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setImage(URL.createObjectURL(file));
                }} />
            </form>
        </div>
    )
}

export default ProfileIcon;