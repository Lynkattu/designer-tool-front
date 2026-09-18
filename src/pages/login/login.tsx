import './login.css'
import Topbar from '../../components/layout/topbar/topbar.tsx'

function Login() {
  return (
    <div >
        <Topbar/>
        <div className="login">
            <section className="login-container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <div>
                        <input type="password" placeholder="Password" />
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