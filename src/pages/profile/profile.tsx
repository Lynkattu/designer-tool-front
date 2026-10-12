import { useContext, useEffect, useState } from 'react';
import Topbar from '../../components/layout/topbar/topbar';
import './profile.css'
import { UserAuthContext } from '../../context/userAuthContext';
import BasicButton from '../../components/common/basicButton/basicButton';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(UserAuthContext);

    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setUserInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate]);

    useEffect(() => {
        if (user) {
            setUserInfo({
                firstName: user.firstName || "",
                lastName: user.lastName || ""
            });
        }
    }, [user]);

    return (
        <div className="profile">
            <Topbar />
            <div className="profile-content">
                <div className="profile-container">
                    <div>
                        <h2>Profile Page</h2>
                        <BasicButton text={isEditing ? "Cancel" : "Edit"} onClick={() => setIsEditing(!isEditing)} />
                    </div>

                    <form>
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <input value={user?.firstName || ""} onChange={handleChange} type="text" id="firstName" name="firstName" disabled={!isEditing} required />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <input value={user?.lastName || ""} onChange={handleChange} type="text" id="lastName" name="lastName" disabled={!isEditing} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input value={user?.email || ""} type="email" id="email" name="email" disabled />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number:</label>
                            <input value={user?.phone || ""} type="tel" id="phone" name="phone" disabled />
                        </div>

                        {isEditing && <BasicButton text="Submit" type="submit" onClick={() => {}} />}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;