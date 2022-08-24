import './App.css';
// import Login_Page from './pages/Login_page';
// import Signed_Page from './pages/Signed_Page';
// import { Routes, Route } from 'react-router-dom'
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import Feeds from './Layout/Feeds/Feeds';
import Widgets from './Layout/Widgets/Widgets';

function App() {
  const user = 'null';
  return (
    <div className="App">
      {!user ? <h1>LogIn </h1> : <><Header />
        <div className="app__body">
          <SideBar />
          <Feeds />
          <Widgets />
        </div>
      </>

      }
      {/* <Routes>
        <Route path='/' element={<Signed_Page />} />
        <Route path='/login' element={<Login_Page />} />
      </Routes> */}

    </div>
  );
}

export default App;