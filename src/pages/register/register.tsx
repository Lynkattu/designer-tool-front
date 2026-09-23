import './register.css'
import Topbar from '../../components/layout/topbar/topbar.tsx'

function Register() {
  return (
    <div className="register">
        <Topbar/>
        <div className="register-content">
          <section className="register-container">
            <h2>Register</h2>
            <form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
            </form>
          </section>
        </div>
    </div>
  )
}

export default Register;