import './register.css'
import Topbar from '../../components/layout/topbar/topbar.tsx'
import Logo from '../../assets/site_logo.png'
import BasicButton from '../../components/common/basicButton/basicButton.tsx';
import { saveUser } from '../../api/usersApi.ts';
import { useState } from 'react';
import type { NewUserModel } from '../../models/newUserModel.ts';

function Register() {
  const [userInfo, setUserInfo] = useState<NewUserModel>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "USER"}
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const user = await saveUser(userInfo);
      if (user) {
        console.log("user saved");
      }
    } catch (error) {
      console.error("Failed to save user:", error);
    }

  }

  return (
    <div className="register">
        <Topbar/>
        <div className="register-content">
          <section className="register-container">
            <div>
              <img src={Logo}/>
              <h2>Register</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input onChange={handleChange} type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={handleChange} type="text" id="lastName" name="lastName" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input onChange={handleChange} type="tel" id="phone" name="phone" />
              </div>
              <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} type="text" id="username" name="username" required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" id="password" name="password" required />
              </div>
              <BasicButton text="Submit" type="submit" onClick={() => {}} />
            </form>
          </section>
        </div>
    </div>
  )
}

export default Register;