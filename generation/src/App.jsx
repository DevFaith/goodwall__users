import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './Pages/Aboutus';
import News from './Pages/News';
import Partner from './Pages/Partner';
import Login from './Logins/Login';
import Join from './Logins/Join';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './Logins/Data';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='z-10'>
          <Header />
        </div>
        <Routes>
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/login' element={<Login />} />
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
