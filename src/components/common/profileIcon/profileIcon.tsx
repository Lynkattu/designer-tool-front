import { useContext, useEffect, useRef, useState } from 'react';
import './profileIcon.css';
import { UserAuthContext } from '../../../context/userAuthContext';
import { saveUserIcon } from '../../../api/usersApi';

function ProfileIcon() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const { user } = useContext(UserAuthContext);
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>(null);

    const handleFileUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fileUploadRef.current?.click();
        console.log("File upload button clicked");
    };

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && user) {
            const response = await saveUserIcon(user.id, file);

            if (response.status === 201) {
                console.log("User icon saved successfully");
                //setImage(URL.createObjectURL(file));
                user.userIcon.iconUrl = response.data;
                setImage(`${apiUrl}/user-icons/${user.userIcon.iconUrl}?v=${new Date().getTime()}`);

            } else {
                console.error("Failed to save user icon");
            }
        }
    };

    useEffect(() => {
        if(user?.userIcon) {
            setImage(`${apiUrl}/user-icons/${user.userIcon.iconUrl}?v=${new Date().getTime()}`);
        }

    }, []);

    return (
        <div className="profile-icon">
            <form>
                {(image) ?
                    <img src={image} alt="Profile Icon" />
                    :
                    <></>
                }
                <input ref={fileUploadRef} type="file" accept="image/*" hidden onChange={handleChange} />
                <button onClick={handleFileUpload}></button>
            </form>
        </div>
    )
}

export default ProfileIcon;