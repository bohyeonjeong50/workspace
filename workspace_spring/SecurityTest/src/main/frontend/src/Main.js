import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();

  //서버로 요청 시 토큰 가져가는 코드
  const test1 = () => {
    axios.get("/getToken", {
      headers : {
        'Authorization' : localStorage.getItem('Authorization')
      }
    })
    .then(res => {})
    .catch(error => console.log(error));
  }

  return (
    <div>
      <h1>Main페이지</h1>
      <h3><span onClick={() => {navigate("/loginForm")}}>로그인 페이지로 이동</span></h3>
      <h3><span  onClick={() => {navigate("/joinForm")}}>회원가입 페이지로 이동</span></h3>
      <h3>관리자 페이지로 이동</h3>
      <h3>일반회원 페이지로 이동</h3>
      <h3><span onClick={() => {test1()}}>서버에 토큰 가져가기</span></h3>
    </div>
  )
}

export default Main