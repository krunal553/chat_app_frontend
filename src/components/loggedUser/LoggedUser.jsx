import './LoggedUser.scss';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css'
import Moon from '../../img/dark_mode_FILL0_wght400_GRAD0_opsz48.svg'
import Sun from '../../img/light_mode_FILL0_wght400_GRAD0_opsz48.svg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleTheme } from '../../features/themeSlice'

const LoggedUser = ({ ProfPic, name }) => {

    const darkMode = useSelector((state) => state.theme.darkMode)
    const dispatch = useDispatch()

    return (
        <div className='LoggedUser'>
            <Popup trigger=
                {<div className='userInfo'>
                    <img src={ProfPic} alt="" />
                    <span>{name}</span>
                </div>}
                position='bottom right'
            >
                <div className="popup">
                    <div className='item'>Logout</div>
                    <div className='item'>Edit profile</div>
                    <div className='item' onClick={() => { dispatch(toggleTheme()) }}>
                        {
                            darkMode
                                ? <div className='modes'><img src={Sun} alt=""/><span>Light mode</span></div>
                                : <div className='modes'><img src={Moon} alt=""/><span>Dark mode</span></div>
                        }
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default LoggedUser