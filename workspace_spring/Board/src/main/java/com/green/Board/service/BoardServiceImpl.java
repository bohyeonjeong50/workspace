package com.green.Board.service;

import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Service : 눈에 안보이는 객체를 생성, 다른 클래스에서 현재 클래스의 메소드를 활용하기위해 사용
@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //게시글 목록 조회
    @Override
    public List<BoardVO> getBoardList(SearchVO searchVO) {
        return sqlSession.selectList("boardMapper.getBoardList", searchVO);
    }

    //게시글 등록
    @Override
    public void insertBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.insertBoard", boardVO);
    }

    //게시글 상세보기
    @Override
    public BoardVO getBoardDetail(int boardNum) {
        return sqlSession.selectOne("boardMapper.getBoardDetail", boardNum);
    }

    //게시글 삭제 (댓글 + 게시글 삭제)
    @Override
    public void deleteBoard(int boardNum) {
        //댓글 삭제
        sqlSession.delete("replyMapper.deleteReplyByBoardNum", boardNum);

        //게시글 삭제
        sqlSession.delete("boardMapper.deleteBoard", boardNum);
    }

    //게시글 수정
    @Override
    public void updateBoard(BoardVO boardVO) {
        sqlSession.update("boardMapper.updateBoard", boardVO);
    }

}
