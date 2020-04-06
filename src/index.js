import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  countNum: 0,
  color: "#FFA5A5",
  boxColors: [null],
  newColor: ''
}

const countReducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE':
      state.countNum = state.countNum + action.payload.num;
      break;
    case 'DECREASE':
      state.countNum = state.countNum - action.payload.num;
      break;
    case 'RESET':
      state.countNum = 0;
      state.color = "#FFA5A5";
      break;
    case 'CHANGE_COLOR':
      state.color = action.payload.color;
      break;
    case 'CHANGE_SINGLE_COLOR':
      const boxColors = state.boxColors;
      boxColors[action.payload.index] = action.payload.newColor;
      console.log('boxColors:',boxColors)
      state.boxColors= boxColors
  };
  return state
}

const store = createStore(countReducer)

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
