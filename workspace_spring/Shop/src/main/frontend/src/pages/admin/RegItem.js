import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './RegItem.css'

const RegItem = () => {
  //카테고리 목록을 저장할 state변수
  const [categoryList, setCategoryList] = useState([]);

  //상품등록시 가져갈 데이터
  const[itemData, setItemData] = useState({
    itemName : '',
    itemPrice : '',
    itemIntro : ''
  });

  function changeItemData(e){
    setItemData({
      ...itemData,
      [e.target.name] : e.target.value
    });
  }

  //카테고리 목록 조회
  useEffect(() => {
    axios.get('/api_admin/getCateList')
    .then((res) => {
      setCategoryList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  //item 등록
  function regItem(){
    axios.insertItem(itemData)
    .then()
    .catch()
  }

  return (
    <div className='reg-item-div'>
      <div className='input-element'>
        <div>상품 카테고리</div>
        <div>
          <select className='form-control'>
            {
              categoryList.map((category, i) => {
                  return(
                    <option key={i} value={category.cateCode}>{category.cateName}</option>
                  );
              })
            }
          </select>
        </div>
      </div>
      <div className='input-element'>
        <div>상품명</div>
        <div><input type='text' className='form-control' name='itemName' onChange={(e) => {changeItemData(e)}}/></div>
      </div>
      <div className='input-element'>
        <div>상품 가격</div>
        <div><input type='text' className='form-control' name='itemPrice' onChange={(e) => {changeItemData(e)}}/></div>
      </div>
      <div className='input-element'>
        <div>상품 소개</div>
        <div>
          <textarea className='form-control' rows={7} name='itemIntro' onChange={(e) => {changeItemData(e)}}></textarea>
        </div>
      </div>
      <div className='btn-div'>
        <button type='button' className='btn btn-primary' onClick={() => {}}>상품등록</button>
      </div>
    </div>
  )
}

export default RegItem