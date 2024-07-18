import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const DelStu = () => {

  const navigate = useNavigate();

  function deleteStu(stuNum){
    axios
    .delete(`/deleteStudent/${stuNum}`)
    .then((res) => {
      alert('삭제 완료');
      
      stuList.forEach((stu, i) => {
        if(stu.stuNum == stuNum){
          stuList.splice(i, 1); //첫번째부터 하나 지우겠다.
        }
      });

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
    axios
    .get(`/getStuList`)
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