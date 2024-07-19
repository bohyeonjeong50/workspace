import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
//import { getDetailStu } from "./apis";
//위에꺼나 밑에꺼나 하나만 사용하면 됨
import * as api from './apis';

const RegScore = () => {
  const navigate = useNavigate();

  const {stuNum} = useParams();
  const [stu, setStu] = useState({});

  //업데이트 쿼리 실행 시 빈값을 채워줄 데이터
  const [updateData, setUpdateData] = useState({
    stuNum : stuNum,
    korScore : 0,
    engScore : 0,
    mathScore : 0
  });

  //점수가 입력될 때 마다 실행되는 함수
  function changeScore(e){
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    });
  }

  //성적 입력을 하려는 학생의 이름, 국어, 영어, 수학점수를 조회
  useEffect(() => {
    api
    .getDetailStu(stuNum)
    .then((res) => {
      setStu(res.data);
    })
    .catch((error) => {
      alert('오류!');
    });
  },[]);

  function regScore(){
    // axios.put('/updateScore', updateData)
    api
    .updateScore(updateData)
    .then((res) => {
      alert('점수를 등록했습니다.');
      navigate('/score');
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div>
      {stu.stuName} 학생의 성적을 입력합니다 <br />
      국어 <input type='text' defaultValue={stu.korScore} name='korScore' onChange={(e) => changeScore(e)} /> <br />
      영어 <input type='text' defaultValue={stu.engScore} name='engScore' onChange={(e) => changeScore(e)} /> <br />
      수학 <input type='text' defaultValue={stu.mathScore} name='mathScore' onChange={(e) => changeScore(e)} /> <br />
      <button type='button' onClick={(e) => regScore()}>점수 등록</button>
      {/* 실행이 하나일때는 중괄호 생략 가능 */}
    </div>
  )
}

export default RegScore;