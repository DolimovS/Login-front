import { useState } from "react"
import LogInForm from "./LogInForm/LogInForm"
import SignUp from "./SignUP/SignUp"

function FormAnimation() {

  const [showLogin, setShowLogin] = useState(true)
  return (
    <div className="loginContainer" >
      {showLogin ? (<SignUp setShowLogin={setShowLogin} />):
      (<LogInForm setShowLogin={setShowLogin} />)}
    </div>
  )
}

export default FormAnimation