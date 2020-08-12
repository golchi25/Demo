import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch,Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
// import Error from './Error';
import Menu from './Menu';


function App() {

  return(
    <>
   <Menu />
   <Switch>
     <Route exact path="/" render={Home}></Route>
     <Route exact path="/service" render={Services}></Route>
     <Route exact path="/About" render={About}></Route>
     <Route exact path="/contact" render={Contact}></Route>
     <Redirect to="/"></Redirect>
   </Switch>
    </>
  )

}

export default App;
