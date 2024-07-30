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

      <div>
        <p>-차량목록</p>
        <table>
          <thead>
            <tr>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DetailCar