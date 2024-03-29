import './App.scss';
import './style.scss'
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useSelector } from 'react-redux'
import Test from './pages/Test';

const App = () => {

  const darkMode = useSelector((state) => state.theme.darkMode)
  return (
    <div className={`App theme-${darkMode ? "dark": "light"}`}>
        <Routes>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/test' element={<Test/>}/>

          <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Navigate to='/chat'/>}/>
            <Route path='/chat' element={<Home/>}>
              <Route index element={null}/>
              <Route path=':id' element={null}/>
            </Route>
            <Route path='/:username' element={<Profile/>}/>
          </Route>

          <Route path='*' element={<h1>404 PageNotFound</h1>}/>

        </Routes>
    </div>
  )
}

export default App;