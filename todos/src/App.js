import React from 'react';
import createHistory from "history/createBrowserHistory";
import './App.css';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import  Users  from './Containers/Users';
import {store} from './store'

const history = createHistory()
function App() {
  return (
    <Provider store={store} >
      <Router history={history} >
        <Route exact path="/" component={Users} />
      </Router>
    </Provider>
  );
}

export default App;
