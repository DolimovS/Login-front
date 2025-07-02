import "../LogInForm/LogInForm.css"


const SignUp = ({setShowLogin}) => {

    const handleGoToLogin = (e)=>{
        e.preventDefault();
        setShowLogin(true);
    }
    return (
        <form className="loginForm" >
            <h1>LONG IN</h1>
            <p>Enter your credentials to access your account</p>
            <label >
                <span>Email</span>
                <input
                    type="email"
                />
            </label>
            <label >
                <span>Password</span>
                <input
                    type="password"
                />
            </label>
            <div className="formButtom">
                <button onClick={ handleGoToLogin} className="loginLink" >Sign Up</button>
                <button className="submit_btn">Submit</button>
            </div>
        </form>
    )
}

export default SignUp