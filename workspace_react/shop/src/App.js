import logo from './logo.svg';
import './App.css';
import data from './data';
import ItemList from './ItemList';
import axios from 'axios';

function App() {
  //상품 목록 데이터
  //const item_list = data;
  let item_list = [];

  axios.get('/test1')
      .then((response) => {
        console.log(response.data);
      });

  axios.get('/test2')
      .then((res) => {
        console.log(res.data);
      });

  let arr = [];
  axios.get('/test3')
      .then((res) => {
        console.log(res.data);
        arr = res.data;
      });

  axios.get('/test4')
    .then((res) => {
      //console.log(res.data);
      item_list = res.data;
    });
    console.log(item_list);

  

  //구조분해할당
  const arr1 = [1, 2, 3];
  const [a, b, c ] = arr1;

  const obj = {
    stuNum : 1,
    stuName : '홍'
  };

  const {stuNum, stuName} = obj;

  const member = {
    no : 1,
    name : 'kim',
    addr : '울산',
    score : 80
  };

  abc(member);

  function abc({name, addr}){ 
    
  }

  const {name, addr} = member;


 
  return (
    <div className="App">
      <div className="header">
        Book Shop
      </div>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + '/header.jpg'} />
      </div>

      <ItemList item_list={item_list}/>
      
      <Test name={'홍길동'} age={20} />

    </div>
  );
}

const Test = ({name, age}) => {
  console.log(name); //{name : '홍길동', age:20}
  console.log(age);


  return (
    <div>sds</div>
  );
}

export default App;
