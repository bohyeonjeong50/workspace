import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//App() 함수의 리턴문 안에 작성하는 코드가 화면에 나타남.
//html 코드처럼 보이는 것은 실은 jsx 라는 문법이다.
//그렇기 때문에 html과 조금 다른 부분이 있다.
function App() {
  const titles = ['울산 맛집', 'React 공부', '집에가고싶다'];


  //좋아요 갯수
  let cnt = 0;

  //대괄호의 첫번째 : 변수
  let [likeCnt, setLikeCnt] = useState(0);

  function test(){
    alert(1);
  }



  return (
    <div className="App">
     <div className="blog-nav">
      <h3>My Blog</h3>
     </div>
     {/* 'java라는 문자 데이터를 title이라는 이름으로 전달하겠다.' */}
      {/* <Board title='java' createDate='2024-06-10' />
      <Board title='python' createDate='2024-05-25'/>
      <Board title='c++' 
      createDate='2024-07-01'/> */}
      <div className="list">
      <h4>
        {titles[0]}
        <span onClick={() => {
          cnt = cnt + 1;
        }}>👍</span>
        {cnt} {likeCnt}
      </h4>
      <p>2024-07-04 작성</p>
     </div>
     <div className="list">
      <h4>{titles[1]}</h4>
      <p>2024-07-04 작성</p>
     </div>
     <div className="list">
      <h4>{titles[2]}</h4>
      <p>2024-07-04 작성</p>
     </div>
     
    </div>
  );
}

//블로그 글 하나에 대한 컴포넌트
//함수명의 첫글자가 대문자면 컴포넌트를 의미함
//전달되는 데이터는 컴포넌트의 매개변수 props 라는 변수를 통해 전달 받음
//function Board(){
  // return (
    // <div className="list">
    //   <h4>{props.title}</h4>
    //   <p>{props.createDate}</p>
    //  </div>
  // );
//}

export default App;
