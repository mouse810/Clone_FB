import './App.css';
// import Login_Page from './pages/Login_page';
// import Signed_Page from './pages/Signed_Page';
// import { Routes, Route } from 'react-router-dom'
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import Feeds from './Layout/Feeds/Feeds';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Signed_Page />} />
        <Route path='/login' element={<Login_Page />} />
      </Routes> */}
      <Header />
      <div className="app__body">
        <SideBar />
        <Feeds />
      </div>
    </div>
  );
}

export default App;