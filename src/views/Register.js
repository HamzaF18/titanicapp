import "./Register.css"

const Register = () =>{
    return(
        <div>
            <h1>Register page</h1>
            <form className="auth-form">
                <fieldset>
                    <legend>
                        Username and Password
                    </legend>
             <input className="input-container" type="username" name="id" placeholder="username"/>
                <input className="input-container" type="password" name="id" placeholder="password"/>
                <fieldset>
                    <legend>
                        Enter in your email adress
                    </legend>
                    <input type="email" name="email" placeholder="Email Address"/>
                </fieldset>
                </fieldset>
                <button className="button-container">Create Account</button>
            </form>
                
            
            
        </div>
    )
}
export default Register;