import "./Home.css"

import { useNavigate } from "react-router-dom";





const NavButton = ({ text, path }) => {

    const navigate = useNavigate()

    return (

        <button className="content-page-buttons" onClick={() => navigate(path)}>

            {text}

        </button>

    )

}





const Home = () => {

    return (

        <div>

            <div>

                <div className="background-image">

                    <div className="home-content">

                        <h1>OCEANS DESTIANTION</h1>

                        <p>Welcome to Titanic Fitness!<br /> West Londons Very Own Gym group!</p>

                        <NavButton text="about" path="/about" />

                        <NavButton text="exercises" path="/exercises" />

                    </div>

                </div>

                <section className="service">

                    <div className="title">

                        <h1>Our Services</h1>

                        <div className="box">

                            <div className="card">

                                <i class="fas fa-user-friends"></i>

                                <h4>Personal Training</h4>

                                <div className="pra">

                                    <p>Are you looking for a someone to assist you while working out? Look at our personal trainer program today.</p>



                                    <a className="button" href="#">Read More</a>



                                </div>




                            </div>




                            <div className="card">

                                <i class="fas fa-user-friends"></i>

                                <h4>Meal Plans</h4>

                                <div className="pra">

                                    <p>If you aren't sure about the right type of meals you should be eating, don't worry! We have the right meal plan for everyone, even you!</p>



                                    <a className="button" href="#">Read More</a>



                                </div>




                            </div>




                            <div className="card">

                                <i class="fas fa-user-friends"></i>

                                <h4>Online Sessions</h4>

                                <div className="pra">

                                    <p>Every saturday and sunday we provide an online workout session caterd to those who want to workout as a group!

                                        If you like working in a group, then come along!.</p>



                                    <a className="button" href="#">Read More</a>



                                </div>




                            </div>

                        </div>

                    </div>

                </section>

            </div>
            <div className="links">
                <a href="#">Terms and agreements</a>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
                <a href="#">Faq</a>
            </div>
        </div>





    )

}

export default Home; 