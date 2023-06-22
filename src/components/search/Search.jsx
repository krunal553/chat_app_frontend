import './Search.scss'
import ProfPic from '../../img/my_prof_pic.webp'

const Search = () => {
  return (
    <div className='Search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      {/* <div className="userChat">
        <img src={ProfPic} alt="" />
        <div className="userChatInfo">
          <span>Krunal</span>
          <p>krunal makwana</p>
        </div>
      </div> */}
    </div>
  )
}

export default Search