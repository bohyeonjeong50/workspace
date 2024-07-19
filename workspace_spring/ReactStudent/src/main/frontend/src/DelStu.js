import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import * as api from './apis';
import { getStuList } from "./apis";

const DelStu = () => {

  const navigate = useNavigate();

  function deleteStu(stuNum){
    axios
    .delete(`/deleteStudent/${stuNum}`)
    .then((res) => {
      alert('삭제 완료');

      //stuList라는 STATE 변수의 값을 변경한다 -> 재랜더링 되면서 알아서 그림 새롭게 그린다.
      //state 변수의 값을 state 변경 함수를 사용해서 변경!

      //데이터베이스에서 삭제한 학생정보를 stuList 에서도 삭제
      stuList.forEach((stu, i) => {
        if(stu.stuNum == stuNum){
          stuList.splice(i, 1); // 첫번째부터 하나만 삭제
        }
      });

      //const result = stuList.filter((stu) => {return stu.stuNum != stuNum}); 

      //const arr = [1,2,3,4,5,6,7,8];
      //const result1 = arr.filter((num) => {return num > 5});

      //const result2 = arr.filter((num) => {num % 2 == 0} );
      // arr.forEach ((e, i) => console.log);

     setStuList([...stuList]);
    })
    .catch((error) => {
      alert('오류!');
      console.log(error);
    });
  }

  //route의 url로 전달되는 데이터 받기
  const {stuNum} = useParams(); 

  //상세 정보를 저장할 state변수
  //학생목록 들어있는 변수
  const[stuList, setStuList] = useState([]);

  //DB에서 상세 조회한 내용을 화면에 출력
  useEffect(() => {
   getStuList()
    .then((res) => {
      console.log(res.data);
      setStuList(res.data);
    })
    .catch((error) => {
      alert('삭제 오류')
      console.log(error);
    });
  }, []);

 return(
<div>
    <div>학생 삭제 페이지</div>
  
    <div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>학생명</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {
            stuList.map((stu, i) => {
              return(
                <tr key={i}>
                  <td>{stuList.length - i}</td>
                  <td>{stu.stuName}</td>
                  <td>
                    <button type="button" onClick={(e) => {deleteStu(stu.stuNum)}}>삭제</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
</div>


 ); 
}

export default DelStu;