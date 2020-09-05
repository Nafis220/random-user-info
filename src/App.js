import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Comment from './components/Comment/Comment';
import noMatch from './components/noMatch/noMatch';
import PostBody from './components/PostBody/PostBody';

function App() {
  return (
    <div className="App">
      <Router> 
        <Switch> 
          <Route path ='/home'> 
           <Home></Home>
          </Route>
          <Route path='/post/:id'> 
           <Comment ></Comment>
          </Route>
          <Route path ='/body/detail/:id'> 
            <PostBody></PostBody>
            </Route>
          <Route exact path='/'> 
           <Home></Home>
          </Route>
          <Route path ='*'> 
             <noMatch></noMatch>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
