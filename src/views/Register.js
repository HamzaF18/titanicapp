import "./Register.css"

const Register = () =>{
    return(
        <div>
            <h1>Registration</h1>
            <form className="auth-form">
                <fieldset className="auth-set">
                    <legend>
                        Details
                    </legend>
                    <p>Create a username</p>
             <input className="input-container" type="username" name="id" placeholder="username" required/>
             <p>Create a password</p>
                <input className="input-container" type="password" name="id" placeholder="password" required/>
                </fieldset>
                <button className="button-container">Create Account</button>
            </form>
                
            
            
        </div>
    )
}
export default Register;