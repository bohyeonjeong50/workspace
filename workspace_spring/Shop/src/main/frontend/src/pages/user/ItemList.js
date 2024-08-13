import React, { useEffect, useState } from 'react'
import './ItemList.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
  const navigate = useNavigate();
  //const num = 10000;
  //num.toLocaleString();

  //상품 목록을 저장할 state 변수
  const [itemList, setItemList] = useState([]);

  //상품 목록 조회
  useEffect(() => {
    axios.get('/api_item/itemList')
    .then((res) => {
      setItemList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(itemList);

  return (
    <div className='item-list-div'>
      {
        itemList.map((item, i) => {
          return(
            <div className='item-div' key={i}>
              <img onClick={() => {navigate('/itemDetail')}} src={`http://localhost:8080/upload/${item.imgList[0].attachedFileName}`}/>
              <h4>{item.itemName}</h4>
              <p>{'￦' + item.itemPrice.toLocaleString()}</p>
            </div>
          );
        })
      }

      

    </div>
  )
}

export default ItemList