import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as boardApi from '../apis/boardApi'
import * as replyApi from '../apis/replyApi'

const BoardDetail = () => {
  const navigate = useNavigate();

  const {boardNum} = useParams();

  //게시글 상세 정보를 저장할 변수
  const [boardDetail, setBoardDetail] = useState({});

  //댓글 목록을 저장할 변수
  const [replyList, setReplyList] = useState([]);
  //[] : 목록이니까 배열 사용

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
        <button type='button'>목록가기</button>
        <button type='button'>수정</button>
        <button type='button'>삭제</button>
      </div>
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