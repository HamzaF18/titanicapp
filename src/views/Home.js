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

                <div className="background-image">

                    <div className="home-content">

                        <h1>WELCOME ABROAD TITANIC FITNESS</h1>

                        <h2>Where Your Fitness Journey Sets Sail!</h2>
                        <br/>
                        <p>Before you decide on joining,<br></br>
                        Why not learn why we are the right gym for you!</p>
                        <br/>
                        <NavButton text="about" path="/about"/>

                        <NavButton text="exercises" path="/exercise"/>

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



                                    <a className="button" href="#">Learn More</a>



                                </div>




                            </div>




                            <div className="card">

                                <i class="fas fa-user-friends"></i>

                                <h4>Meal Plans</h4>

                                <div className="pra">

                                    <p>If you aren't sure about the right type of meals you should be eating, don't worry! We have the right meal plan for everyone, even you!</p>



                                    <a className="button" href="#">Learn More</a>



                                </div>




                            </div>




                            <div className="card">

                                <i class="fas fa-user-friends"></i>

                                <h4>Online Sessions</h4>

                                <div className="pra">

                                    <p>Every saturday and sunday we provide an online workout session caterd to those who want to workout as a group!

                                        If you like working in a group, then come along!.</p>



                                    <a className="button" href="#">Learn More</a>



                                </div>




                            </div>

                        </div>

                    </div>

                </section>

            </div>
        





    )

}

export default Home; 