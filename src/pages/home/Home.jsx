import './Home.scss'
import Chat from '../../components/chat/Chat';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Home = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const location = useLocation();
  const isChatPath = location.pathname.includes('chat')
  const { id } = useParams();

  useEffect(()=>{
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 960 
      setIsSmallScreen(isSmall)
    }
    checkScreenSize();
    const handleResize = () => {
      checkScreenSize();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Home'>
      <div className="container">
        {
          !isSmallScreen
            ?
            <><Sidebar /><Chat /></>
            :
            (
              isChatPath && (
                id ? <Chat/> : <Sidebar/>
              )
            )
        }
      </div>
    </div>
  )
}

export default Home