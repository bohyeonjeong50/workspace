import logo from './logo.svg';
import './App.css';
import data from './data';
import ItemList from './ItemList';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './Detail';

function App() {
  //상품 목록 데이터
  const item_list = data;
 

 
  

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
        <Link to='/list'>상품목록</Link>
        <Link to='/detail'>상품상세</Link>
      </div>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + '/header.jpg'} />
      </div>

      {/* 이동할 수 있는 페이지의 url들 */}
      <Routes>
        <Route path='/' element={<div>메인페이지</div>}/> 
        <Route path='/list' element={<ItemList item_list={item_list} />} />
         <Route path='/detail/:id' element={<Detail item_list={item_list}/>}/>
         <Route path='*' element={<div>잘못된 페이지입니다.</div> } />
      </Routes>

      {/* <ItemList item_list={item_list}/> */}
      
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
