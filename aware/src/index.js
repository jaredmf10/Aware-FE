import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Species from './Components/Species'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'


ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/profile" component={Profile} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/:speciesName" component={Species} />
        </Switch>
    </Router>),
    document.getElementById('root')
  );