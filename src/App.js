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
      boxArray.push(
        <div key={i} className="mb-2" style={{width: "200px", 
        height:"100px", border: "1px solid", textAlign:"center",
         backgroundColor: boxColors[i]? boxColors[i]: color}}>
        <h2 className="form-label">Colorfull Box</h2>
        <input onChange={(e,i)=>{singleBoxChange(e, i)}}
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

  let singleBoxChange = (newcolor, index) => {
    let newColor = newcolor.target.value;
    console.log(newColor);
    dispatch({type: "CHANGE_SINGLE_COLOR", payload: {newColor: newColor, index: index}})
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
