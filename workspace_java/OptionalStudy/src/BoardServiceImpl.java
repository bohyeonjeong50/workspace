import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class BoardServiceImpl {
    private List<BoardVO> boardList;

    public BoardServiceImpl() {
        boardList = new ArrayList<>();
        boardList.add(new BoardVO(1, "첫번째글"));
        boardList.add(new BoardVO(2, "두번째글"));
        boardList.add(new BoardVO(3, "세번째글"));
    }

    public Optional<List<BoardVO>> getBoardList() {
        //List<BoardVO> list = sqlSession.selectList("");
        //return list;

        List<BoardVO> list = boardList;
        return Optional.of(list);
    }

    public Optional<BoardVO> getBoardDetail(int index) {
        //MemberVO member = sqlSession.selectOne("", boardNum);
        //return member;

        BoardVO board = boardList.get(index);
        return Optional.of(board);

    }

    class BoardVO {
        private int boardNum;
        private String title;

        public BoardVO(int boardNum, String title) {
            this.boardNum = boardNum;
            this.title = title;
        }

        public int getBoardNum() {
            return boardNum;
        }

        public void setBoardNum(int boardNum) {
            this.boardNum = boardNum;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }
    }
}
