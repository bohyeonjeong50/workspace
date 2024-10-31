import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  function test1(){
    axios.get('/test1')
    .then(res => {
      console.log(3);
      console.log(res.data); //'test1'
      console.log(4);
    })
    .catch(error => console.log(error));
    //console.log(cnt);
  }

  //async가 붙으면 함수가 비동기방식으로 진행
  async function test2(){
    //await 명렁어 사용 시 동기 방식으로 진행
    console.log(11);
    const res = await axios.get('/test1');
    console.log(12);
    console.log(res.data);
  }

  function test3(){
    console.log(1);
    test2();
    console.log(2);
  }

  return (
    <div className="App">
      <div>
        <button type='button' onClick={() => test3()}>test1</button>
      </div>
    </div>
  );
}

export default App;
