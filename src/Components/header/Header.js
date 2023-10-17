import "./Header.css"

const Header =() =>{
    return(
        <div className="header-container">
            <h1>Titanic Fitness Gym</h1>
            <ul className="nav-area">
            <button className="nav-button"><a href="http://localhost:3000/register">Register</a></button>
            <button className="nav-button"><a href="http://localhost:3000/login">Sign in</a></button>
            </ul>
        </div>
    )
}
export default Header;