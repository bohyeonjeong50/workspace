import axios from "axios";
import { useEffect, useState } from "react";
import * as api from './apis';
import { useNavigate } from "react-router-dom";
import { getStuList } from "./apis";

const Score = () => {
  const navigate = useNavigate();

  const [stuList, setStuList] =useState([]);

  useEffect(() => {
    getStuList()
   .then((res) => {
    setStuList(res.data);
   })
   .catch((error) => {
    alert('오류');
   });
  }, []);

  return(
    <div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>학생명</td>
            <td>성적입력</td>
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
                    <button type="button" onClick={(e) => {navigate(`/regScore/${stu.stuNum}`)}}>입력</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default Score;