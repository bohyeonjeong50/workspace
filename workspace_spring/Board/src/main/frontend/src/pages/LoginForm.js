import React, { useState } from 'react'
import * as memberApi from'../apis/memberApi'


const LoginForm = () => {
  const[loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });

  function changeLoginData(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    });
  }

  //axios 실행하기위한 함수
  function login(){
    //아이디, 비번 입력했는지 유효성 검사
    memberApi
    .login(loginData)
    .then((res) => {
      //조회결과에 따라 로그인 실행

    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <input type='text' placeholder='input ID' name='memId' onChange={(e) => {changeLoginData(e)}}/>
      <input type='password' placeholder='input PW' name='memPw' onChange={(e) => {changeLoginData(e)}}/>
      
      <input type='button' className='btn' value='로그인'onClick={(e) => {login()}}/>
    </div>
  )
}

export default LoginForm