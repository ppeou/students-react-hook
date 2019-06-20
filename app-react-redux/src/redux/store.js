import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import Reducers from './reducers'

const store = createStore(combineReducers(Reducers));

function AppStore(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}
const dispatch = store.dispatch;
export {AppStore as default, dispatch};
