import './login.css'
import Topbar from '../../components/layout/topbar/topbar.tsx'
import { UserAuthContext } from '../../context/userAuthContext.tsx'
import { useContext, useState } from 'react';

function Login() {
  const { loginUser } = useContext(UserAuthContext);
  const [info, setInfo] = useState<{ username: string; password: string }>({ username: '', password: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const response = await loginUser(info.username, info.password);
    if (response.isSucessful) {
      console.log("Login successful");
      // Redirect or perform any other actions after successful login
    } else {
      console.log("Login failed:", response.message);
      // Show error message to the user
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  return (
    <div >
        <Topbar/>
        <div className="login">
            <section className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={info.username} onChange={handleChange} />
                    <div>
                        <input type="password" placeholder="Password" name="password" value={info.password} onChange={handleChange} />
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Login;