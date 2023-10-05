import logo from './logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";
import Register from './views/Register';
import Home from './views/Home';


function App() {
  return (
    <div className="App">
      <div className="page-container">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
      </div>

    </div>
  );
}

export default App;
