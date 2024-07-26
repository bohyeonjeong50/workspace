package com.green.Board.controller;

import com.green.Board.service.ReplyService;
import com.green.Board.vo.ReplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//me> RequestMapping : "reply" -> "insert"(//댓글등록)로 가겠다고 리액트 axios에 입력하는것
@RequestMapping("/reply")
public class ReplyController {
    @Resource(name = "replyService")
    private ReplyService replyService;

    //댓글 목록
    @GetMapping("/list/{boardNum}")
    public List<ReplyVO> getReplyList(@PathVariable("boardNum") int boardNum){
       return replyService.getReplyList(boardNum);
    }

    //댓글 등록
    @PostMapping("/insert")
    public void insertReply(@RequestBody ReplyVO replyVO){
        replyService.insertReply(replyVO);
    }

}
