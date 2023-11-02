import "./About.css";
import { useNavigate } from "react-router-dom";


const NavButton = ({ text, path }) => {
  const navigate = useNavigate()
  return (
    <button className="about-button" onClick={() => navigate(path)}>
      {text}
    </button>
  )
}









const About = () => {
  return (
    
    <div className="background-image">
      <div className="about">
        <div className="about-title">
          <h1>We are Titanic Fitness Gym Group</h1>
        </div>
        <br></br>
        <div className="about-text">
          <p>
            Welcome to Titanic Fitness, your premier online destination for fitness enthusiasts in West London. We are passionate about bringing the best of fitness to your fingertips, offering a wide range of resources and guidance to help you achieve your health and wellness goals. At Titanic Fitness, we understand the challenges of balancing a busy lifestyle with staying fit, which is why we provide accessible and effective solutions tailored to your needs. Whether you're a beginner or a seasoned fitness enthusiast, our platform offers a variety of workout plans, nutritional advice, and expert tips to support you on your fitness journey. Join us in creating a healthier and stronger you, right from the comfort of your own home.</p>
        </div>
        <br></br>
        <div className="about-text">
          <p>
            At Titanic Fitness, our core values are the bedrock of our community. We believe in inclusivity, fostering a welcoming environment where everyone, regardless of their fitness level or background, feels empowered to embark on their wellness journey. We prioritize authenticity, ensuring that our resources and guidance are grounded in expertise and honesty, aiming to provide accurate and reliable information. Integrity is fundamental to our approach, as we strive to deliver transparent and ethical guidance, putting the well-being of our users at the forefront. At Titanic Fitness, we are committed to innovation, continuously exploring new methods and ideas to keep our offerings fresh, engaging, and effective. Our values shape everything we do, driving us to support and motivate individuals in West London on their path to a healthier lifestyle.</p>
        </div>
        <br></br>
        <div>
          <NavButton text="more about us" path="/about" />
        </div>
      

      </div>
      </div>
    
  );
};

export default About;