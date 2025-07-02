import "./LogInForm.css"

const LogInForm = ({setShowLogin}) => {
  const handleGoToLogin = (e)=>{
        e.preventDefault();
        setShowLogin(false);
    }
  return (
    
      <form className="loginForm" >
        <h1>SIGN UP</h1>
        <p>Enter your credentials to access your account</p>
        <label htmlFor="">
          <span>Ism</span>
          <input
            type="text"
          />
        </label>
        <label htmlFor="">
          <span>Familiya</span>
          <input
            type="text"
          />
        </label>
        <label htmlFor="">
          <span>Email</span>
          <input
            type="email"
          />
        </label>
        <label htmlFor="">
          <span>Passpord</span>
          <input
            type="password"
          />
        </label>
        <div className="formButtom">
        <button  onClick={handleGoToLogin} className="loginLink" >Log In</button>
          <button className="submit_btn">Submit</button> 
        </div>
      </form>
  )
}

export default LogInForm
