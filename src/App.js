import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Loading from './Loading/Loading';
import Main from './Main/Main';
import 홈 from './홈/홈';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/main' element={<Main />} />
            <Route path='/홈' element={<홈 />} />
        </Routes>
    </Router>
  )
}

export default App