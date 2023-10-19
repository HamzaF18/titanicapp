import "./Login.css"

const Login = () =>{
    return(
        <div>
            <h1>Login</h1>
            <form className="auth-form">
                <fieldset className="auth-set">
                    <legend>Login</legend>
                    <input className="input-container" type="text" placeholder="Username" required/>
                    <input className="input-container" type="password" placeholder="password" required/>
                    <button>Login</button>
                </fieldset>
            </form>


        </div>
    )
}
export default Login;