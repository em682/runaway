import React from 'react';
import {Route} from 'react-router-dom';
import BlogEditor from './Components/Blog/blogEditor';

import Register from './Components/Auth/register';
import Login from './Components/Auth/login';
import Resource from './Components/Resource/resource';
import Admin from "./Components/Admin/admin.js"
import ChatObservation from './Components/Chat/chatObserve';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
      <h2 style = {{"color":"#ACD1E9"}}>RunAway</h2>
      <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/register" component = {Register}/>
      <Route exact path = "/chat/observe" component = {ChatObservation}/>
      <Route exact path = "/blog/write" component = {BlogEditor}/>
      <Route exact path = "/resource/write" component = {Resource}/>
      <Route exact path = "/admin/overview" component = {Admin}/>
      <Route exact path = "/" component = {Login}/>




    </div>
    );
}

export default App;
