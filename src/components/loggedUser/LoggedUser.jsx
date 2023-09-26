import './LoggedUser.scss';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css'
import Moon from '../../img/dark_mode_FILL0_wght400_GRAD0_opsz48.svg'
import Sun from '../../img/light_mode_FILL0_wght400_GRAD0_opsz48.svg'
import Logout from '../../img/logout_FILL0_wght400_GRAD0_opsz48.svg'
import EditProf from '../../img/settings_account_box_FILL0_wght400_GRAD0_opsz48.svg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleTheme } from '../../features/themeSlice'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

const LoggedUser = () => {
    let { user, logoutUser } = useContext(AuthContext)
    let base_url = 'http://127.0.0.1:8080'

    console.log(
        'user : ', user
    )

    const darkMode = useSelector((state) => state.theme.darkMode)
    const dispatch = useDispatch()

    return (
        <div className='LoggedUser'>
            <Popup trigger=
                {<div className='userInfo'>
                    <img src={base_url + user?.profile_pic} alt="" />
                    <span>{user?.username}</span>
                </div>}
                position='bottom right'
            >
                <div className="popup">
                    <div
                        className='item'
                        onClick={logoutUser}
                    >
                        <div className='icon'>
                            <img src={Logout} alt="" />
                            <span>Logout</span>
                        </div>
                    </div>
                    <div
                        className='item'
                    >
                        <div className='icon'>
                            <img src={EditProf} alt="" />
                            <span>Edit profile</span>
                        </div>
                    </div>
                    <div
                        className='item'
                        onClick={() => { dispatch(toggleTheme()) }}
                    >
                        {
                            darkMode
                                ? 
                                <div className='icon'>
                                    <img src={Sun} alt="" />
                                    <span>Light mode</span>
                                </div>
                                : 
                                <div className='icon'>
                                    <img src={Moon} alt="" />
                                    <span>Dark mode</span>
                                </div>
                        }
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default LoggedUser