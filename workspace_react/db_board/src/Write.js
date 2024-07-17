import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  //입력한 내용을 저장하는 state 변수
  const[board, setBoard] = useState({
    boardTitle : '',
    boardContent : '',
    boardWriter : ''
  });

  //글 등록 버튼 클릭 시 실행하는 함수
  function insertBoard(){
    //제목이 비었으면?
    const title_input = document.querySelector('input[name="boardTitle"]');

    if(title_input.value == ''){
      alert('제목은 필수입력입니다.');
      title_input.focus(); //제목 안넣고 밑에꺼부터 작성하면 '제목필수입력'알림뜨고 커서 자동생성
      return ;
    }

    if(document.querySelector('input[name="boardWriter"]').value == ''){
      alert('작성자는 필수입력입니다.');
      return;
    }
   

    axios
    .post('/regBoard', board)
    .then((res) => {
      alert('게시글이 등록되었습니다.');
      navigate('/');
    })
    .catch((error) => {
      alert('글 등록 오류!');
      console.log(error);
    });
  }

  //입력 값 세팅
  function changeBoard(e){
    setBoard({
      ...board,
      [e.target.name] : e.target.value //me> key값은 문법으로 사용할땐 []를 사용
    });
  }
 
  return(
    <div>
      제목 : <input name='boardTitle' onChange={(e) => {changeBoard(e)}} /> <br /> 
         {/* setBoard({ */}
      {/* //     ...board, //전개연산자 
      //     [e.target.name] : e.target.value //me> onchane(e) 매개변수를 가르키고, input 태그의 value값으로 변경
      //   });
      // }}/> <br/> */}
      작성자 : <input name='boardWriter' onChange={(e) => {changeBoard(e)}}/> <br/>
      내용 : <textarea name='boardContent' onChange={(e) => {changeBoard(e)}}></textarea> <br/>
      <button type="button" onClick={(e) => {insertBoard()}
      }>등록</button>
    </div>
  );
}

export default Write;