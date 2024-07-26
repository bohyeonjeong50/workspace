import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'
import * as replyApi from '../apis/replyApi'
import axios from 'axios'

const BoardDetail = ({loginInfo}) => {
  const navigate = useNavigate();

  function deleteBoard(boardNum){
    axios
    .delete(`/deleteBoard/${boardNum}`)
    .then((res) => {
      alert('삭제 완료');
      boardDetail.forEach((board, i) => {
        if(board.boardNum == boardNum){
          boardDetail.splice(i, 1);
        }
      });
      setBoardDetail([...boardDetail]);
    })
    .catch((error) => {
      alert('오류!');
      console.log(error);
    });
  }

  const {boardNum} = useParams();

  //게시글 상세 정보를 저장할 변수
  const [boardDetail, setBoardDetail] = useState({});

  //댓글 목록을 저장할 변수
  const [replyList, setReplyList] = useState([]);
  //[] : 목록이니까 배열 사용

  //댓글 등록 시 가져가야 하는 데이터를 저장할 변수
  const[replyData, setReplyData] = useState({
    replyContent : '',
    memId : loginInfo.memId,
    boardNum : boardNum
  });


  //게시글 상세 정보 조회
  useEffect(() => {
    boardApi.getBoardDetail(boardNum)
    .then((res) => {
      setBoardDetail(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  useEffect(() => {
    replyApi.getReplyList(boardNum)
    .then((res) => {
      setReplyList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  //db에서 데이터 조회 여러개 동시에 실행하기
  // useEffect(() => {
  //   axios
  //   .all([boardApi.getBoardDetail(boardNum), replyApi.getReplyList(boardNum)])
  //   .then(axios.spread((res1, res2) => {
  //     setBoardDetail(res1.data);
  //     setReplyList(res2.data);
  //   }))
  //   .catch();
  // }, [])

  function regReply(){
    axios
    .post('/reply/insert', replyData)
    .then()
    .catch();
  }

  return (
    <div>
      <div>
        글번호 : {boardDetail.boardNum}<br/>
        제 목 : {boardDetail.title}<br/>
        작성자 : {boardDetail.memId}<br/>
        작성일 : {boardDetail.createDate}<br/>
        내 용 : {boardDetail.content}<br/>
      </div>
      <div>
        <button type='button' onClick={(e) => {navigate('/')}}>목록가기</button>

        {
          //login한 정보가 ADMIN 이거나 로그인 정보와 회원정보가 같은 정보인 사람은 수정 삭제 버튼이 뜸.  
          loginInfo.memRole == 'ADMIN' || loginInfo.memId == boardDetail.memId
          ?
        <>
          <button type='button'>수정</button>
          {/* <button type='button' onClick={(e) => {deleteBoard(board.boardNum)}}>삭제</button> */}
        </>
          :
          null
        }
      </div>

      {
        loginInfo.memId != null
        ?
        <div>
          <input type='text' onChange={(e) => {
            setReplyData({
              ...replyData,
              replyContent : e.target.value
            });
          }} />
          <button type='button' onClick={(e) => {regReply()}}>댓글등록</button>
        </div>
        :
        null
      }

      <div>
        {
          replyList.map((reply, i) => {
            return(
              <div>
                <div>{reply.replyDate}</div>
                <div>{reply.memId}</div>
                <div>{reply.replyContent}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default BoardDetail