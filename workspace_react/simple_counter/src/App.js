import logo from './logo.svg';
import './App.css';
import Controller from './Controller';
import { useState } from 'react';

function App() {
  console.log(1);
  let [count, setCount] = useState(0);

  function changeCount(num){
    console.log(num);
    const result = count + Number(num);
    console.log(result);
    
    setCount(10);
  }

  return (
    <div className="App">
        <h2>Simple Counter</h2>

        <Viewer count={count} />

        <Controller setCount={setCount} count={count} changeCount={changeCount} />
       
    </div>
  );
}

//Viewer 컴포넌트
function Viewer(){
  return (
    <div className="box">
      <h3>현재 카운터</h3>
      <p>0</p>
    </div>
  );
}

function changeCount(){

}

export default App;
