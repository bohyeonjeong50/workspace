//서버와 통신하는 기능을 모아놓은 js

import axios from "axios";

//학생 목록 조회 api
export const getStuList = () => {
 const response = axios.get('/getStuList');
 return response;
} 

//학생 상세정보 조회 api
export const getDetailStu = (stuNum) => {
  const response = axios.get(`/detailStu/${stuNum}`);
  return response;
}

//학생의 점수 정보 등록(변경)
export const updateScore = (data) => {
  const response = axios.put('/updateScore', data);
  return response;
}



