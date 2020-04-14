import React , {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

import Contact from './Component/Contact/'
import Navbar from './Component/Navbar/'
import Index from './Component/Index/'

class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/'component={Index} />
        <Route path='/contact'component={Contact} />
      </BrowserRouter>
    )
  }
}
export default App;