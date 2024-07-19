import axios from "axios";
import { useEffect, useState } from "react";
import './StudentList.css';
import { useNavigate } from "react-router-dom";
import * as api from './apis';
import { getStuList } from "./apis";

const StudentList = () => {
  //학생 목록을 저장할 state 변수
  const [StudentList, setStuList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getStuList()
    .then((res) => {
      setStuList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  
  return(
    <div>
      <div>학생정보조회 페이지</div>
  
      <div>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>학생명</td>
              <td>국어점수</td>
              <td>영어점수</td>
              <td>수학점수</td>
              <td>평균</td>
            </tr>
          </thead>
          <tbody>
            {
              StudentList.length == 0 ?
              <tr>
                <td colSpan='6'>조회된 데이터가 없습니다</td>
              </tr>
              : 
              StudentList.map((stu, i) => {
                const avg = (stu.korScore + stu.engScore + stu.mathScore) / 3;
                return(
                  <tr key={i}>
                    {/* 게시판 순서번호 */}
                    {/* <td>{i + 1}</td>  */}
                    {/* 역순으로 게시판 순서 */}
                    <td>{StudentList.length - i}</td> 
                    <td>
                      <span onClick={(e) => {navigate(`/detail/${stu.stuNum}`)}}>{stu.stuName}</span>
                    </td>
                    <td>{stu.korScore}</td>
                    <td>{stu.engScore}</td>
                    <td>{stu.mathScore}</td>
                    <td>{Math.round(avg * 100) / 100}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;

