import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Box from './components/Box'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const state = useSelector(state => state);
  const countNum = useSelector(state => state.countNum);
  let color = useSelector(state => state.color);
  const boxColors = useSelector(state => state.boxColors);
  const dispatch = useDispatch();

  let increaseNum = () => {
    dispatch({type: "INCREASE", payload:{num: 1} });
  }

  let renderBox = () => {
    let boxArray = [];
    for(let i=0;i<countNum;i++){
      let boxColor= boxColors[i] || color;
      boxArray.push(
        <div key={i} className="mb-2" style={{width: "200px", 
        height:"100px", border: "1px solid", textAlign:"center",
         backgroundColor: boxColor}}>
        <h2 className="form-label">Colorful Box</h2>
        <input onChange={(e)=>dispatch({type: "CHANGE_SINGLE_COLOR",
        payload: {singleColor: e.target.value, index:i}})}
        className="form-control col-8 mx-auto" type="input"/>
    </div>);
    };
    return boxArray;
  }
  
  let decreaseNum = () => {
    if(countNum<0){
      return;
    }
    dispatch({type: "DECREASE", payload: {num: 1}});
  }

  let resetNum = () => {
    dispatch({type: "RESET"});
    document.getElementById("all-color").value="";
  }

  let colorChange = (newcolor) => {
    console.log(newcolor)
    dispatch({type: "CHANGE_COLOR", payload: {color: newcolor}})
  }
  
  return (
    <div className="App">
      <h2 className="mt-3">{countNum}</h2>
      <div className="row d-flex justify-content-center mb-3">
      <button className="btn btn-warning mr-1" onClick={()=>increaseNum()}>Increase</button>
      <button className="btn btn-danger mr-1" onClick={()=>decreaseNum()}>Decrease</button>
      <button className="btn btn-success mr-1" onClick={()=>resetNum()}>Reset</button>
      <input id="all-color" type="text" className="col-3" onChange={(e)=>colorChange(e.target.value)} />
      </div>
      
        {renderBox()}
      
    </div>
  );
}

export default App;
