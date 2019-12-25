import React from "react";
import Consulta from "./pages/Consulta";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Titulos from "./pages/Titulos";
import Titulosp from "./pages/Titulosp";
import Titulospat from "./pages/Titulospat";
import Titulospata from "./pages/Titulospata";
import Page404 from "./pages/Page404";
import "./App.css";

function App() {

  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Consulta} />     
      <Route exact path='/home' component={Consulta} /> 
      <Route exact path='/titulos' component={Titulos} />
      <Route exact path='/titulosp' component={Titulosp} />
      <Route exact path='/titulospat' component={Titulospat} />
      <Route exact path='/titulospata' component={Titulospata} />
      <Route component={Page404} />
      </Switch>
    </Router>);
}

export default App;
