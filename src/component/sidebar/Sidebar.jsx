import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const [extend, setExtend] = useState(true);

  function handleClick() {
    if (extend === true) {
      setExtend(false);
    } else {
      setExtend(true);
    }
  }
  return (
    <div className='sidebar'>

      <div className='top'>
        <img onClick={handleClick} className='menu' src={assets.menu_icon} alt="Menu" />
        <div className="newchat">
          <img src={assets.plus_icon} alt=""  />
         {extend ?<p>New chat</p>:null}
        </div>
        {extend ? <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is react ....</p>
          </div>
        </div>:null}
      </div>
      <div className='bottom'>
        <div className="item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend?<p>Help</p>:null}
        </div>
        <div className="item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend?<p>Activity</p>:null}
        </div>
        <div className="item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
