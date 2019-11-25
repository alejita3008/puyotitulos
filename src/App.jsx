import React from "react";
import Consulta from "./pages/Consulta";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Titulos from "./pages/Titulos";
import "./App.css";

function App() {

  return (
    <Router>
      <Route exact path='/' component={Consulta} />
      <Route path='/titulos' component={Titulos} />
      <Route path='/titulosp' component={Titulos} />
    </Router>);
}

export default App;
