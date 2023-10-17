import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";
import Register from './views/Register';
import Home from './views/Home';
import Header from './Components/header/Header';
import Login from './views/Login';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="page-container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      </div>

    </div>
  );
}

export default App;
