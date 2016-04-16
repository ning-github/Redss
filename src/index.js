import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import routing
import {Router, browserHistory} from 'react-router';
import Routes from './Routes';

import reducers from './reducers';

// middleware
import promise from 'redux-promise';

// create the actual store object
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// pass the rootReducer to the store prop binding in Provider 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.querySelector('.container'));
