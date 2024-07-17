package com.green.ReactBoard.service;

import com.green.ReactBoard.vo.BoardVO;
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
    public List<BoardVO> getBoardList() {
        List<BoardVO> boardList = sqlSession.selectList("boardMapper.getBoardList");

        return boardList;
    }

    //게시글 상세 정보 조회
    @Override
    public BoardVO getBoradDetail(int boradNum) {
        return sqlSession.selectOne("boardMapper.getBoardDetail", boradNum);
    }

    //게시글 등록
    @Override
    public void regBoard(BoardVO boardVO) {
        sqlSession.insert("boardMapper.regBoard", boardVO);
    }

    //게시글 삭제
    @Override
    public void deleteBoard(int boardNum) {
        sqlSession.delete("boardMapper.deleteBoard", boardNum);
    }
}
