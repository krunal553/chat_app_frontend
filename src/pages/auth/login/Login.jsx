import './Login.scss'
import { Link, Navigate } from 'react-router-dom'
import {useContext} from 'react';
import AuthContext from '../../../context/AuthContext'

const Login = () => {

  let {loginUser} = useContext(AuthContext)
  console.log("login page opened")  

  return (<>
    <div className="login-formContainer">
      <div className="formWrapper">
        <span className="logo">Chat pit</span>
        <span className="title">Login</span>

        <form onSubmit={loginUser}>
          <input type="text" name='username' placeholder="Enter Username" />
          <input type="password" name='password' placeholder="Enter Password" />
          <button type='submit'>Sign in</button>
        </form>

        <p>You don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
    </>
  )
}

export default Login