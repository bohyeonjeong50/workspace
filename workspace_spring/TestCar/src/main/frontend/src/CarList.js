import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CarList = () => {

  const [carAllInfo, setCarAllInfo] = useState([]);

  useEffect(() => {
    axios.get()
    .then(() => {})
    .catch(() => {});
  }, []);



  return (
    <div>
      <table>
        <thead>
          <tr>
            <td rowSpan={2}>No.</td>
            <td colSpan={4}>구매자정보</td>
            <td colSpan={2}>차량정보</td>
          </tr>
          <tr>
            <td>구매자명</td>
            <td>연락처</td>
            <td>구매일</td>
            <td>색상</td>
            <td>모델명</td>
            <td>금액</td>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default CarList