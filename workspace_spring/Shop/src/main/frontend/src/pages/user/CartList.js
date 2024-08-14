import React from 'react'
import './CartList.css'

const CartList = () => {

  

  return (
    <div className='container'>
      <table>
        <thead className='thead-div'>
          <tr>
            <td>No</td>
            <td><input type='checkbox'/></td>
            <td>상품 정보</td>
            <td>가격</td>
            <td>수량</td>
            <td>구매가격</td>
            <td>구매일시</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartList