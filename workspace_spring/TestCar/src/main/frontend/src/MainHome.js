import React, { useEffect, useState } from 'react'
import './MainHome.css';
import axios from 'axios';

const MainHome = () => {

  //차량 등록 입력하면 저장할 useState 
  const[carData, setCarData] = useState({
    carCompany : '현대',
    carName : '',
    carPrice : ''
  });

  //차량 등록한거 목록조회하면 사용할 useState
  const[carListData, setCarListData] = useState([]);

  //  데이터 입력시 useState로 데이터를 보내주는 함수
  function changeCarData(e){
    setCarData({
      ...carData,
      [e.target.name] : e.target.value 
    });
  }

  console.log(carData)

  // 등록버튼 함수
  function regCar(){
    axios.post('/carBoard/insert',carData)
    .then((res) => {
      alert('차량이 등록되었습니다.')
    })
    .catch((error) => {console.log(error)});
  }

  // 차량리스트를 불러오는 useEffect
  useEffect(() => {
    axios.get('/carBoard/list')
    .then((res) => {
      setCarListData(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  console.log(carListData)

  return (
    <div className='first-container'>
      <span>
        <i class="bi bi-car-front-fill"></i>
      </span>
      <h3>차량등록</h3> <br/>

      <div className='input1'>
        <div>
          제조사 <select name='carCompany' onChange={(e) => {changeCarData(e)}}>
            <option>현대</option>
            <option>쌍용</option>
            <option>기아</option>
          </select>
        </div>
        <div>모델명 <input type='text' name='carName' onChange={(e) => {changeCarData(e)}}/>
        </div>
        <div>차량가격 <input type='text' name='carPrice' onChange={(e) => {changeCarData(e)}}/>
        </div>
      </div> <br/>
      <div>
      <button type='button' className='reg-button' onClick={() => {regCar()}} >
        등록
      </button>
      </div> <br />

      <h3>차량목록</h3> <br/>

      <div className='table-all'>
        <table className='table-container'>
          <thead>
            <tr>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            {
              carListData.map((carList, i) => {
                return(
                  <tr key={i}>
                    <td>{carList.carNum}</td>
                    <td>{carList.carName}</td>
                    <td>{carList.carCompany}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MainHome