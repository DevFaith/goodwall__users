import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './Pages/Aboutus';
import News from './Pages/News';
import Partner from './Pages/Partner';
import Login from './Logins/Login';
import Join from './Logins/Join';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { useState } from 'react';
import Data from './Logins/Data';

function App() {
  const [userInfo,setUserInfo] = useState({});
  const updateUserInfo = (data) => {
    setUserInfo(data);
  }
  return (
    <>
      <BrowserRouter>
        <div className='z-10'>
          <Header userInfo={userInfo} />
        </div>
        <Routes>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' updateUserInfo={updateUserInfo} element={<Login />} />
          <Route path='/news' element={<News />} />
          <Route path='/partner' element={<Partner />} />
          <Route path='/join' element={<Join />} />
          <Route path='/data' element={<Data />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
