import { useState } from "react"
import LogInForm from "./LogInForm/LogInForm"
import SignUp from "./SignUP/SignUp"

function FormAnimation() {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <div className="loginContainer" >
      {showLogin?(<LogInForm setShowLogin={setShowLogin} />):
      ( <SignUp setShowLogin={setShowLogin}/>)}
    </div>
  )
}

export default FormAnimation