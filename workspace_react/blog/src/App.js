import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//App() 함수의 리턴문 안에 작성하는 코드가 화면에 나타남.
//html 코드처럼 보이는 것은 실은 jsx 라는 문법이다.
//그렇기 때문에 html과 조금 다른 부분이 있다.
function App() {
  console.log(1);
 // const titles = ['울산 맛집', 'React 공부', '집에가고싶다'];

  //제목 정보를 저장하고 있는 변수
  const [titles, setTitles] = useState(['울산 맛집', 'React 공부', '집에가고싶다']); 

  //좋아요갯수
  //대괄호의 첫번째 : 변수
  //두번째 : 변수의 값을 변경시켜주는 함수
  //ex> setLikeCnt(5); -> likeCnt 변수의 값을 5로 변경
  //useState로 만들어서 변수는 값을 변경하면 html화면을 재랜더링한다.
  // me> useState는 react에만 있고 자동완성 해야함
  let [likeCnt, setLikeCnt] = useState([0, 0, 0]);

  //detail 컴포넌트가 보일지 안보일지 결정하는 변수
  let [isShow, setIsShow] = useState(false);



  function test(){
    alert(1);
  }

  return (
    <div className="App">
     <div className="blog-nav">
      <h3>My Blog</h3>
     </div>

     {/* {
      [1, 2, 3].map(() => {
        return (
          <div>1</div>
        );
      })
     } */}


     {/* ...전개연산자  */}
     <button type="button" onClick={() => {
      const copyTitles = [...titles];
      copyTitles[0] = '대구맛집';
      setTitles(copyTitles);
     }}>제목변경</button>

     {/* 'java라는 문자 데이터를 title이라는 이름으로 전달하겠다.' */}
      {/* <Board title='java' createDate='2024-06-10' />
      <Board title='python' createDate='2024-05-25'/>
      <Board title='c++' 
      createDate='2024-07-01'/> */}

      {/* 블로그 글 목록 */}
      { 
        titles.map((title, i) => {
          return (
            <Board title={title} key={i} />
          );
        })
      }



     {/* <div className="list">
      <h4>
        {titles[1]}
        <span onClick={() => {
          const copyLikeCnt = [...likeCnt];
          copyLikeCnt[1] = copyLikeCnt[1] + 1;
          setLikeCnt(copyLikeCnt);
        }}>👍🏻</span> {likeCnt[1]}
      </h4>
      <p>2024-07-04 작성</p>
     </div>
     <div className="list">
      <h4>
        <span onClick={() => {
          setIsShow(true);
        }}>{titles[2]}</span>
        <span onClick={() => {
           const copyLikeCnt = [...likeCnt];
           copyLikeCnt[2] = copyLikeCnt[2] + 1;
           setLikeCnt(copyLikeCnt);
        }}>👍🏻</span> {likeCnt[2]}
      </h4>
      <p>2024-07-04 작성</p> */}
     {/* </div> */}
     
      {/* 상세보기 */}
      {
        isShow ? <Detail /> : null //null 다음 ; 들어가면 안됨
      }

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

//상세보기 컴포넌트
//컴포넌트의 리턴문에 작성하는 html 작성
//모든 html 태그는 하나의 최상위 태그에 포함되게 작성
function Detail(){
  return (
    <div className="detail">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

//블로그 글 하나에 대한 컴포넌트
//전달되는 데이터는 매개변수에 props를 사용해서 전달 받음
function Board(props){
  return(
    <div className="list">
      <h4>
        {props.title}
        <span>👍🏻</span>
         0
      </h4>
      <p>2024-07-04 작성</p>
     </div>
  );
}




export default App;
