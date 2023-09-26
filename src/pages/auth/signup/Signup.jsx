import './Signup.scss'
import { Link, Navigate } from 'react-router-dom'

const Signup = () => {
  return (
<div className="signup-formContainer">
      <div className="formWrapper">
        <span className="logo">Chat pit</span>
        <span className="title">Sign up</span>
        <form onSubmit={null}>
          <input type="email" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <button>Sign up</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </div>  )
}

export default Signup