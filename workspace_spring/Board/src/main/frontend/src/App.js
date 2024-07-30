import logo from './logo.svg';
import './reset.css';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BoardList from './pages/BoardList';
import JoinForm from './pages/JoinForm';
import LoginForm from './pages/LoginForm';
import { useEffect, useState } from 'react';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';
import UpdateForm from './pages/UpdateForm';

//재랜더링 : 값이 변한 state 변수가 선언된 컴포넌트를 다시 해석

//APP 컴포넌트는 최초에만 실행됨! 
//APP컴포넌트를 중간에 다시 읽게 하고싶으면 useState의[loginInfo] 값이 바뀌면 다시 읽음.
function App() {
  const navigate = useNavigate();

  //loginInfo : 변수(초기 값) , setLoginInfo: 함수(변한 값을 저장)
  //변수값을 재랜더링 시켜주기위해 함수를 사용
  const [loginInfo, setLoginInfo] = useState({});

//APP 컴포넌트가 처음 열릴때 실행(useEffect를 마지막에 읽음) = 컴포넌트가 그림을 다 그리고 나면 제일 마지막에 실행
useEffect(() => {
  //로그인 여부 확인, sessionStorage에 데이터 없으면 null 나옴
  const loginDataString = window.sessionStorage.getItem('loginInfo'); //문자로 받아옴

  //로그인 정보가 있으면...
  if(loginDataString != null){
    const loginData = JSON.parse(loginDataString); //me> 객체로 받아옴 //jason을 객체로 변환

    //객체로 변환된 로그인 정보를 loginInfo 변수에 저장
    //최초에 한번만 실행
    setLoginInfo(loginData);
  }
  
}, []);
  
  return (
    <div className="container">
      <div className='header'>
        <div>
          {
            loginInfo.memId == null
            ?
            <>
            <span onClick={(e) => {navigate('/loginForm')}}>Login</span>
            <span onClick={(e) => {navigate('/joinForm')}}>Join</span> 
            </>
            :
        
          <div>
            {loginInfo.memId}님 반갑습니다.
            <span onClick={(e) => {
              //세션스토리지에 저장된 로그인 정보를 제거
              window.sessionStorage.removeItem('loginInfo');
              setLoginInfo({});//me> 다시 로그인화면을 그려줌
              alert('로그아웃!');
              navigate('/');
            }}>Logout</span>
          </div> //로그인 했을때
          }
        
        </div>
        <h1>자유게시판</h1>
      </div>
     <div className='content'>
       <Routes>
  
        {/* 게시글 목록 페이지 */}
        <Route path='/' element={ <BoardList loginInfo={loginInfo}/> } />

        {/* 회원가입 페이지 */}
        <Route path='/joinForm' element={ <JoinForm/> } />

        {/* 로그인 페이지 */}
        <Route path='/loginForm' element={ <LoginForm setLoginInfo={setLoginInfo}/> } />

        {/* 게시글 작성 페이지 */}
        <Route path='/writeForm' element={ <BoardWrite loginInfo={loginInfo}/> }/>

        {/* 게시글 상세 페이지 */}
        <Route path='/detail/:boardNum' element={<BoardDetail loginInfo={loginInfo}/>} />

        {/* 게시글 수정 페이지 */}
        <Route path='/updateForm/:boardNum' element={ <UpdateForm/> } />
  
       </Routes>
     </div>

    </div>
  );
}

export default App;
