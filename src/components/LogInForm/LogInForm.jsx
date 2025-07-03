import { useState } from "react";
import "./LogInForm.css"

const LogInForm = ({ setShowLogin }) => {
  const handleGoToLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
  }
  const [logInIsm, setLogInIsm] = useState('')
  const [logInFamiliya, setLogInFamiliya] = useState('')
  const [logInEmail, setLogInEmail] = useState('')
  const [logInPassword, setLogInPasword] = useState('')

  const handleLogInSubmit = (e) => {
    e.preventDefault()
  }

  return (

    <form className="loginForm" onSubmit={handleLogInSubmit} >
      <h1>SIGN UP</h1>
      <p>Enter your credentials to access your account</p>
      <label htmlFor="">
        <span>Ism</span>
        <input
          type="text"
          value={logInIsm}
          onChange={(e) => setLogInIsm(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <span>Familiya</span>
        <input
          type="text"
          value={logInFamiliya}
          onChange={(e) => setLogInFamiliya(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <span>Email</span>
        <input
          type="email"
          value={logInEmail}
          onChange={(e) => setLogInEmail(e.target.value)}
        />
      </label>
      <label htmlFor="">
        <span>Passpord</span>
        <input
          type="password"
          value={logInPassword}
          onChange={(e) => setLogInPasword(e.target.value)}
        />
      </label>
      <div className="formButtom">
        <button onClick={handleGoToLogin} className="loginLink" >Log In</button>
        <button className="submit_btn">Submit</button>
      </div>
    </form>
  )
}

export default LogInForm
