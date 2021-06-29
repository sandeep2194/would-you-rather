import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/custom.scss';
import App from './App';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, composeEnhancers(
  middleware
)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

