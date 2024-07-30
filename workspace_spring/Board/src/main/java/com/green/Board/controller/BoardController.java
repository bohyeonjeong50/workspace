package com.green.Board.controller;

import com.green.Board.service.BoardService;
import com.green.Board.service.BoardServiceImpl;
import com.green.Board.vo.BoardVO;
import com.green.Board.vo.SearchVO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j //log 남기고싶을때 사용 (출력문)
@RestController
@RequestMapping("/board")
public class BoardController {

    //me> Resource : 다른 클래스에 있는 메소드를 객체이름(boardService)으로 다시 가져옴
    @Resource(name = "boardService")
    private BoardService boardService;



    //게시글 목록 조회
    @PostMapping("/list")
    public List<BoardVO> getBoardList(@RequestBody SearchVO searchVO){
        return boardService.getBoardList(searchVO);
    }

    //게시글 등록
    @PostMapping("/insert") //insert쿼리는 기본적으로 post로 사용
    public void insertBoard(@RequestBody BoardVO boardVO){
        log.info("===== BoardController : insertBoard() run~ ======");
        log.info(boardVO.toString());
        boardService.insertBoard(boardVO);
    }

    //게시글 상세보기
    @GetMapping("/detail/{boardNum}")
    public BoardVO boardDetail(@PathVariable("boardNum") int boardNum){
       return boardService.getBoardDetail(boardNum);
    }

    //게시글 삭제
    @DeleteMapping("/delete/{boardNum}")
    public void deleteBoard(@PathVariable("boardNum") int boardNum){
        boardService.deleteBoard(boardNum);
    }

    //게시글 수정
    @PutMapping("/update")
    public void updateBoard(@RequestBody BoardVO boardVO){
        boardService.updateBoard(boardVO);
    }

}
