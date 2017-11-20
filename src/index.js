import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, hashHistory } from 'react-router'
import Parking from './modules/Parking.js'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/parking/" component={Parking}></Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
