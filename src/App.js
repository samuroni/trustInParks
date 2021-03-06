import React from "react"
import './App.css';

import Home from "./pages/Home"
import Parks from "./pages/Parks"
import SinglePark from "./pages/SinglePark"
import Error from "./pages/Error"
import Navbar from "./components/Navbar"
import {Route, Switch} from "react-router-dom"



function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/parks/" component={Parks}/>
      <Route exact path="/parks/:slug" component={SinglePark}/>
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
