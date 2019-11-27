import React from "react";
import Consulta from "./pages/Consulta";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulos from "./pages/Titulos";
import Titulosp from "./pages/Titulosp";
import "./App.css";

function App() {

  return (
    <Router>
      <Route exact path='/' component={Consulta} />      
      <Route path='/titulos' component={Titulos} />
      <Route path='/titulosp' component={Titulosp} />
    </Router>);
}

export default App;
