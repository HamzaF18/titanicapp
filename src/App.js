import logo from './logo.svg';

import './App.css';




import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from './views/Register';

import Home from './views/Home';

import Header from './Components/header/Header';

import Login from './views/Login';

import About from './views/About';

import Help from './views/Help';

import Sitemap from './Components/Sitemap/Sitemap';

import Exercise from './views/Exercise';





function App() {

  return (

    <div className="App">

      <Header />

      <div className="page-container">
        
        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route exact path="/home" element={<Home />} />

          <Route exact path="/register" element={<Register />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/help" element={<Help />} />

          <Route exact path="/exercise" element={<Exercise/>}/>

        </Routes>
      </div>
      <Sitemap/>

    </div>

  );

}




export default App; 
