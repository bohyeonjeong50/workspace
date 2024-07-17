package com.green.ReactBoard.service;

import com.green.ReactBoard.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 조회
    List<BoardVO> getBoardList();

    //게시글 상세 정보 조회
    BoardVO getBoradDetail(int boradNum);

    //게시글 등록
    void regBoard(BoardVO boardVO);

    //게시글 삭제
    void deleteBoard(int boardNum);

}
