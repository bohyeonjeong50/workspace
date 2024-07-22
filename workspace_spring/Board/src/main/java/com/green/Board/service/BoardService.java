package com.green.Board.service;

import com.green.Board.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 페이지
    List<BoardVO> getBoardList();
}
