import { NavLink } from "react-router-dom";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return(
    <div className="LoginMain">
      <div className="loginCard">
        <h1>Log In</h1>
        <input type="username" placeholder="Type your username "  maxLength={20} />
        <input type="password" placeholder="**********" maxLength={30} />
        <div className="checkBox-div">
          <input type="checkbox" />
          <p>By logging in, you agree to our Privacy Policy and Terms of Service.
          We value your privacy and are committed to protecting your personal information.</p></div>
        
        <button type="submit" className="btn-login">Login</button>
        <p>You not have account? <NavLink to={'/signUp'}><b style={{cursor:"pointer"}}>SignUp</b></NavLink>  </p>
      </div>
    </div>
  )
}

export default Login