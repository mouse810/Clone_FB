import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import { Routes, Route } from 'react-router-dom'
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';
import Feeds from './Layout/Feeds/Feeds';
import Widgets from './Layout/Widgets/Widgets';

function App() {
  const user = 'null';
  return (
    <div className="App">
      {!user ? <LoginPage /> : <>
        <Header />
        <div className="app__body">
          <SideBar />
          <Feeds />
          <Widgets />
        </div>
      </>

      }
      {/* <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes> */}

    </div>
  );
}

export default App;