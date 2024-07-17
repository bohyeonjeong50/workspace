import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BoardList from './BoardList';
import AxiosTest from './AxiosTest';
import BoardDetail from './BoardDetail';
import Write from './Write';

function App() {
  return (
    <div className="App">
     
      <Routes>
        
        {/* axios 예제 페이지 */}
        <Route path='/axios' element={ <AxiosTest/> } />


        {/* 게시글 목록 페이지 */}
        <Route path='/' element={ <BoardList />} />

        {/* 상세 정보 페이지 */}
        <Route path='/detail/:boardNum' element={ <BoardDetail/>} />

        {/* 글쓰기 페이지 */}
        <Route path='/write' element={ <Write /> } />

      </Routes>

    </div>
  );
}

export default App;
