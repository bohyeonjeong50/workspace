import React from 'react'

const DetailCar = () => {
  return (
    <div>
      <div>
        <p>-차량등록</p>
        <div>제조사 </div>
        <div>모델명 <input type='text' /> </div>
        <div>차량가격 <input type='text' /> </div>
        <button type='button'>등록</button>
      </div>
    </div>
  )
}

export default DetailCar