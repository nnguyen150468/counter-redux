import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore, bindActionCreators} from 'redux'

const initialState = {
  countNum: 0,
  color: "#FFA5A5",
  boxColors: [null]
}

const countReducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE':
      return {...state,
      countNum: state.countNum + action.payload.num}
    case 'DECREASE':
      return {...state,
      countNum: state.countNum - action.payload.num}
    case 'RESET':
      return {...state,
      countNum: 0, color: "#FFA5A5" }
    case 'CHANGE_COLOR':
      return {...state,
      color: action.payload.color}
    case 'CHANGE_SINGLE_COLOR':
      const boxColors = state.boxColors;
      console.log('boxColors:',boxColors)
      boxColors[action.payload.index] = action.payload.singleColor;
      return {...state,
      boxColors: boxColors}
    default:
      return state;
  };
}

const store = createStore(countReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
