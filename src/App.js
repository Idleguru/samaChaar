
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewS from './components/NewS';
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom"; 

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        

       <Routes>
        <Route exact path="/general" key="general" element={<NewS pageSize={8} country="in" category="general"/>}/>
        <Route exact path="/business"  element={<NewS pageSize={8} country="in" category="business"/>}/>
        <Route exact path="/entertainment" key="entertainment" element={<NewS pageSize={8} country="in" category="entertainment"/>}/>
        <Route exact path="/general" key="general" element={<NewS pageSize={8} country="in" category="general"/>}/>
        <Route exact path="/health" key="health" element={<NewS pageSize={8} country="in" category="health"/>}/>
        <Route exact path="/science" key="science" element={<NewS pageSize={8} country="in" category="science"/>}/>
        <Route exact path="/sports" key="sports" element={<NewS pageSize={8} country="in" category="sports"/>}/>
        <Route exact path="/technology" key="technology" element={<NewS pageSize={8} country="in" category="technology"/>}/>  
        
      </Routes>
       



        </Router>
      </div>
    );
  }
}
