import { useState } from "react";
import "../LogInForm/LogInForm.css"


const SignUp = ({ setShowLogin }) => {
    const [singUpEmail, setSingUpEmail] = useState('')
    const [singUpPassword, setsingUpPassword] = useState('')

    const handleGoToLogin = (e) => {
        e.preventDefault();
        setShowLogin(false);
    }
    const handleSignUpSubmit = async (e) => {
        e.preventDefault()

        const singUser = {
            "email": singUpEmail,
            "password": singUpPassword
        }
        try {
            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(singUser)
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ To‘g‘ri");
                
            } else {
                alert("❌ Xato: " + data.message);
            }
        } catch (err) {
            alert("❌ Serverga ulanib bo‘lmadi");
        }
        setSingUpEmail('')
        setsingUpPassword('')
    }


    return (
        <form className="loginForm" onSubmit={handleSignUpSubmit} >
            <h1>LONG IN</h1>
            <p>Enter your credentials to access your account</p>
            <label >
                <span>Email</span>
                <input
                    type="email"
                    value={singUpEmail}
                    onChange={(e) => setSingUpEmail(e.target.value)}
                />
            </label>
            <label >
                <span>Password</span>
                <input
                    type="password"
                    value={singUpPassword}
                    onChange={(e) => setsingUpPassword(e.target.value)}
                />
            </label>
            <div className="formButtom">
                <button onClick={handleGoToLogin} className="loginLink" >Sign Up</button>
                <button className="submit_btn">Submit</button>
            </div>
        </form>
    )
}

export default SignUp