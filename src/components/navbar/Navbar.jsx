import './Navbar.scss'
import ProfPic from '../../img/my_prof_pic.webp'
import Moon from '../../img/dark_mode_FILL0_wght400_GRAD0_opsz48.svg'
import Sun from '../../img/light_mode_FILL0_wght400_GRAD0_opsz48.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleTheme } from '../../features/themeSlice'
import Modal from '../modal/Modal'
import Popup from '../popup/Popup'
import ReactPopup from '../reactPopup/ReactPopup'
import LoggedUser from '../loggedUser/LoggedUser'

const Navbar = () => {

  const darkMode = useSelector((state) => state.theme.darkMode)
  const dispatch = useDispatch()

  return (
    <div className='Navbar'>
      <span className="logo">ChatPit</span>
      {/* <Popup/> */}
      <div className="user">
        <>
          <div  style={{cursor:'pointer'}} onClick={()=> {dispatch(toggleTheme())}}>
            {
              darkMode
              ? <img src={Sun} alt="" style={{cursor:'pointer', height: 25, filter: 'invert(100%)'}} />
              : <img src={Moon} alt="" style={{cursor:'pointer', height: 25, filter: 'invert(100%)'}} /> 
            }
          </div>
          
        {/* <img src={ProfPic} alt="" />
        <span>krunal</span> */}
        {/* <ReactPopup/> */}
            <LoggedUser name='krunal' ProfPic={ProfPic}/>
        {/* <button>Login </button> */}
        </>
      </div>
    </div>
  )
}

export default Navbar