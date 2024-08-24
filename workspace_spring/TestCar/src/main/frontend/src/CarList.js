import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './CarList.css'

const CarList = () => {

  //차량 모든 정보를 조회하면 사용할 useState
  const [carAllInfo, setCarAllInfo] = useState([]);

  //차량 모든 정보를 불러오는 useEffect
  useEffect(() => {
    axios.get('/saleBoard/saleAllInfo')
    .then((res) => {
      setCarAllInfo(res.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  //useEffect 맨밑에 []를 쓰는 이유는 저걸 넣어야 무한반복을 방지할 수 있기떄문

  console.log(carAllInfo);

  return (
    <div className='contailner'>
      <table className='first'>
        <thead className='head'>
          <tr>
            {/* rowSpan 열 병합, colSpan 행 병합 */}
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
          {
            carAllInfo.map((carAll, i) => {
              return(
                <tr key={i}>
                  <td>{carAll.saleNum}</td>
                  <td>{carAll.buyerName}</td>
                  <td>{carAll.buyerTel}</td>
                  <td>{carAll.saleDate}</td>
                  <td>{carAll.carColor}</td>
                  <td>{carAll.carName}</td>
                  <td>{carAll.carPrice}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default CarList