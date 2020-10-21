import React from 'react';
import './App.css';
import {  Route, Switch } from "react-router-dom";
import Main from './Component/Main'
import About from './Component/About'
import EmailJS from './Component/EmailJS'
import AdminLogin from './Component/AdminLogin'
import Blog from './Component/Blog'
import BlogForm from './Component/BlogForm'
import NoMatch from './Component/NoMatch'
import AdminLanding from './Component/AdminLanding'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Blogs" component={Blog} />
        <Route exact path="/ContactUs" component={EmailJS} />
        <Route exact path="/BlogForm" component={BlogForm} />
        <Route exact path="/AdminLogin" component={AdminLogin} />
        <Route exact path="/AdminLanding" component={AdminLanding} />
        <Route exact path="*" component={NoMatch} />
      </Switch>  
    </div>
  );
}

export default App;
