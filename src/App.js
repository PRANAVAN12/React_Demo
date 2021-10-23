import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Packages from './components/pages/Packages';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import DetailsPage from './components/pages/PackageDetails';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component ={Home} />
      <Route path='/packages' exact component ={Packages} />
      <Route path='/contact' exact component ={Contact} />
      <Route path='/about' exact component ={About} />
      <Route path='/detailspage' exact component ={DetailsPage} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
