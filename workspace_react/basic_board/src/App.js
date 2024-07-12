import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import data from './data';
import Detail from './Detail';
import Write from './Write';
import { useState } from 'react';
import InputTest from './InputTest';

function App() {
  //게시글 목록
  //let board_List = data;
  const[boardList, setBoardList] = useState(data);



  return (
    <div className="App">
        
        <Routes>
          {/* 게시글 목록 페이지 */}
          <Route path='/' element={<BoardList board_List={boardList}/>}/>

          {/* 게시글 상세 정보 페이지 */}
          <Route path='/detail/:boardNum' element={ <Detail board_List = {boardList} /> } />
        

          {/* 글쓰기 페이지 */}
          <Route path='/writeForm' element={<Write board_List={boardList} setBoardList = {setBoardList} />} />

          <Route path='/test' element={<InputTest/>}/>

        </Routes>

  
    </div>
    
  );
}

export default App;
