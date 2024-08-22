import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainHome from './MainHome';
import DetailCar from './DetailCar';
import SaleInfoReg from './SaleInfoReg';

function App() {

  const navigate = useNavigate();
  return(
  <div className='container'>
    <div className='header'>
        <ul>
          <li><span on onClick={() => {navigate('/')}}>홈</span></li>
          <li><span on onClick={() => {navigate('/carList')}}>차량관리</span></li>
          <li><span on onClick={() => {navigate()}}>판매 정보 등록</span></li>
          <li><span on onClick={() => {navigate()}}>판매 목록</span></li>
        </ul>
    </div>

    
      <Routes>

        {/* 메인 페이지 */}
        <Route path='/' />

        {/* 차량 관리 화면 페이지 */}
        <Route path='/carList' element={ <MainHome/> } />

        {/* 판매 정보 등록 화면 페이지 */}
        <Route path='/regForm' element={ <SaleInfoReg/> } />

      </Routes>
    

  </div>
  )
}

export default App;
