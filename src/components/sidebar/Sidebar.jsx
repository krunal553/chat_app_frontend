import'./Sidebar.scss'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import ChatList from '../chatList/ChatList'

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Navbar/>
      <Search/>
      <ChatList/>
    </div>
  )
}

export default Sidebar