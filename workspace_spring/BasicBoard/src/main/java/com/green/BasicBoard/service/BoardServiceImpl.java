package com.green.BasicBoard.service;

import com.green.BasicBoard.vo.BoardVO;
import com.green.BasicBoard.vo.SearchVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //게시글 목록 조회
    @Override
    public List<BoardVO> getBoardList(SearchVO searchVO) {
        List<BoardVO> list = sqlSession.selectList("boardMapper.getBoardList", searchVO);
        return list;
    }

    @Override
    public void insertBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.insertBoard", boardVO);

    }

    //상세조회
    @Override
    public BoardVO getBoardDetail(int boardNum) {
        BoardVO board = sqlSession.selectOne("boardMapper.getBoardDetail", boardNum);
        return board;
    }

    //게시글 삭제
    @Override
    public void deleteBoard(int boardNum) {
          sqlSession.delete("boardMapper.deleteBoard", boardNum);
    }

    //조회수 증가
    @Override
    public void updateReadCnt(int boardNum) {
        sqlSession.update("boardMapper.updateReadCnt", boardNum);
    }
}
