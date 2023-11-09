import "./Header.css";

import logo from "../../Assests/logo.png";

import { useNavigate } from "react-router-dom";




const NavButton = ({ text, path }) => {

    const navigate = useNavigate()


    return (

        <button className="nav-button" onClick={() => navigate(path)}>

            {text}

        </button>

    )

}







const Header = () => {

    return (

        <div className="header-container">

            <div className="logo-container">

                <a href="/home"> <img className="Logo" src={logo} /></a>

                <h1>Titanic Fitness Gym</h1>

            </div>

            <div className="nav-buttons">

                <NavButton text="Sign In" path="/login" />

                <NavButton text="Sign up" path="/register" />

                <NavButton text="About" path="/about" />

                <NavButton text="Help" path="/help" />

            </div>



        </div>

    )

}

export default Header; 