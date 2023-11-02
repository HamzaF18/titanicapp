import "./Register.css"




const Register = () => {

    return (

        <div className="background-image">

            <form className="auth-form">

                <h1>Register</h1>

                <br></br>

                <input className="register-input" type="username" name="id" placeholder="Username" required />

                <br></br>

                <input className="register-input" type="password" name="id" placeholder="Password" required />

                <br></br>

                <button>Create Account</button>

            </form>







        </div>

    )

}

export default Register; 