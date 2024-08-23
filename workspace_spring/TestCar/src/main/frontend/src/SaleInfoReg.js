import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SaleInfoReg = () => {

  const[buyerData, setBuyerData] = useState({
    buyerName : '',
    carColor : '블랙',
    carNum : 0,
    buyerTel : ''
  });

  //차량 이름 저장할 변수
  const[carNameData, setCarNameData] = useState([])

  function changeBuyerData(e){
    setBuyerData({
      ...buyerData,
      [e.target.name] : e.target.value
    });
  }

  console.log(buyerData);

  //등록버튼 함수
  function regBuyer(){
    axios.post('/saleBoard/saleInsert', buyerData)
    .then((res) => {
      alert('판매 정보가 등록되었습니다.')
    })
    .catch((error) => {
      console.log(error)
    });
  }

  //차량 이름 조회 함수
  useEffect(() => {
    axios.get('/carBoard/carNameSelect')
    .then((res) => {
      setCarNameData(res.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, [])

  console.log(carNameData)


  return (
    <div>
      <div>
        <div>구매자명 <input type='text' name='buyerName' onChange={(e) => {changeBuyerData(e)}} /></div>
        <div>
        색상
        <select name='carColor' onChange={(e) => {changeBuyerData(e)}}>
          <option>블랙</option>
          <option>화이트</option>
          <option>실버</option>
          <option>레드</option>
        </select>
        모델
        <select name='carNum' onChange={(e) => {changeBuyerData(e)}}>
          {
            carNameData.map((nameCar, i) => {
              return(
                <option key={i} value={nameCar.carNum} >
                  {nameCar.carName}
                </option>
              )
            })
          }
        </select>
        </div>
        <div>연락처 <input type='text' name='buyerTel' onChange={(e) => {changeBuyerData(e)}}/></div>
      </div>
      <div>
        <button type='button' onClick={() => {regBuyer()}}>등록</button>
      </div>
    </div>
  )
}

export default SaleInfoReg