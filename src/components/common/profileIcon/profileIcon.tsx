import { useRef, useState } from 'react';
import './profileIcon.css';
import anonymousUser from '../../../assets/anonymous_user.png';

function ProfileIcon() {
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState(anonymousUser);

    const handleFileUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fileUploadRef.current?.click();

    }

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