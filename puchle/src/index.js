import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginForm from "./loginform";
import FileUpload from "./uploadform";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

ReactDOM.render(
<Router>
    <Switch>
    <Route path="/signup" exact > <App/></Route>
    <Route path="/login" exact> <LoginForm/></Route>
    <Route path="/upload" exact><FileUpload/></Route>
    </Switch>
</Router>, document.getElementById('root'));
registerServiceWorker();