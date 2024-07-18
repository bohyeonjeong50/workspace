import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const DetailStu = () => {
  
  const Navigate = useNavigate();

  //route의 url로 전달되는 데이터 받기
  const {stuNum} = useParams();
  

  //상세 정보를 저장할 state변수
  const[stuInfo, setStuInfo] = useState({});
  //{} : 객체, 학생정보 한명의 데이터를 가져올때 객체 사용

  //DB에서 상세 조회한 내용을 화면에 출력
  useEffect(() => {
    axios
    .get(`/detailStu/${stuNum}`)
    .then((res) => {
      console.log(res.data);
      setStuInfo(res.data);
    })
    .catch((error) => {
      alert('상세보기 오류발생')
      console.log(error);
    });
  }, []);

  return(
   <div>
      <div>상세보기</div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>이름</td>
              <td>{stuInfo.stuName}</td>
              <td>나이</td>
              <td>{stuInfo.stuAge}</td>
            </tr>
            <tr>
              <td>연락처</td>
              <td>{stuInfo.stuTel}</td>
              <td>주소</td>
              <td>{stuInfo.stuAddr}</td>
            </tr>
            <tr>
              <td>국어점수</td>
              <td>{stuInfo.korScore}</td>
              <td>영어점수</td>
              <td>{stuInfo.engScore}</td>
            </tr>
            <tr>
              <td>수학점수</td>
              <td>{stuInfo.mathScore}</td>
              <td>평균</td>
              <td>
                {
                Math.round((stuInfo.korScore + stuInfo.engScore + stuInfo.mathScore) / 3 * 100) / 100
                }
              </td>
              {/* 평균구할때 : {Math.round(평균 * 100) / 100} */}
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={(e) => {Navigate('/')}} >뒤로가기</button>
      </div>
   </div>
  );
}

export default DetailStu;