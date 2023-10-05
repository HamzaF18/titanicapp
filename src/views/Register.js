import "./Register.css"
import "./Assests/logo.png"

const Register = () =>{
    return(
        <div>
            <h1>Register page</h1>
            <form className="auth-form">
             <input className="input-container" type="username" name="id" placeholder="username"/>
                <input className="input-container" type="password" name="id" placeholder="password"/>
                <button className="button-container">Create Account</button>
                
            </form>
            <img src="logo.png"/>
        </div>
    )
}
export default Register;