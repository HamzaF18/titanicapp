import "./Login.css" 

 
 

const Login = () =>{ 

    return( 

        <div className="background-image"> 

             

            <form className="auth-form"> 

            <h1>Login</h1> 

            <br></br> 

                    <input className="login-input" type="text" placeholder="Username" required/> 

                    <br></br> 

                    <input className="login-input" type="password" placeholder="password" required/> 

                <br></br> 

                <button>Login</button> 

            </form> 

 
 
 

        </div> 

    ) 

} 

export default Login; 