import "./Header.css";
import logo from "../../Assests/logo.png";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <a href="/home"> <img className="Logo" src={logo} /></a>
            </div>
            <h1>Titanic Fitness Gym</h1>
            <ul className="nav-area">
                <button className="nav-button"><a href="http://localhost:3000/register">Register</a></button>
                <button className="nav-button"><a href="http://localhost:3000/login">Sign in</a></button>
            </ul>

        </div>
    )
}
export default Header;