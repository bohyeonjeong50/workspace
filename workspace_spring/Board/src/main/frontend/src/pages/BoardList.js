import axios from "axios";
import { useEffect, useState } from "react";
import * as boardApi from '../apis/boardApi';
// '..'은 상위폴더로 가란뜻
//'*' 모든 내용을 가져오겠단뜻


const BoardList = ({loginInfo}) => {
  //조회된 게시글 목록을 저장할 변수
  const[boardList, setBoardList] = useState([]);

  //게시글 목록 조회
  useEffect(() => {
    boardApi.getBoardList()
    .then((res) => {
      setBoardList(res.data);
    })
    .catch((error) => {
      alert('게시글 목록 조회 오류!')
      console.log(error);
    });
  }, []);

  return(
   <div className="board-list-container">
     <div className="search-div">
      <select>
        <option>제목</option>
        <option>작성자</option>
      </select>
      <input type="text"></input>
      <button className="btn">검색</button>
     </div>
     <div className="board-list-div">
        <table>
          <colgroup>
          <col width='10%'/>
          {/* '*'는 100%에서 나머지 뺀 전부 */}
          <col width='*'/> 
          <col width='20%'/>
          <col width='20%'/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
              boardList.map((board, i) => {
                return(
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td>{board.title}</td>
                    <td>{board.memId}</td>
                    <td>{board.createDate}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
     </div>
     <div className="btn-div">
      {
        loginInfo.memId != null 
        ?
        <button className="btn">글쓰기</button>
        :
        null
      }
      
     </div>

      

       
     
   </div>
  );

}

export default BoardList;