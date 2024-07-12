import { useState } from "react";
import { useNavigate } from "react-router-dom";

//글쓰기 페이지
const Write = ({board_List, setBoardList}) => {
  const navigate = useNavigate();

  console.log('등록 전 게시글 목록');
  console.log()

  //입력한 모든 정보를 저장하는 state 변수
  const [board, setBoard] = useState({
    boardNum : 0,
    title : '',
    writer : '',
    createDate : '',
    content : ''
  });

  function changeBoard(e){
    setBoard({
      ...board, 
      [e.target.name] : e.target.value
    });
  }


  return(
   <div>
      <div>
        <table>
          <tr>
            <td>글번호</td>
            <td><input type="text" name="boardNum" onChange={(e) => {
              setBoard({
                ...board, 
                [e.target.name] : e.target.value
              });
            }}></input></td>
          </tr>
          <tr>
            <td>제목</td>
            <td><input type="text" name="title" onChange={(e) => {changeBoard(e)}}></input></td>
          </tr>
          <tr>
            <td>작성자</td>
            <td><input type="text" name="writer" onChange={(e) => {changeBoard(e)}}></input></td>
          </tr>
          <tr>
            <td>작성일</td>
            <td><input type="date" name="createDate" onChange={(e) => {changeBoard(e)}}></input></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea name="content" onChange={(e) => {changeBoard(e)}}/></td>
          </tr>
        </table>
      </div>

      <div>
        <button type="button" onClick={(e) => {
          setBoardList([...board_List, board]);
          navigate('/');
        }}>글등록</button>
      </div>
  
     

   </div>
  );

}

export default Write;