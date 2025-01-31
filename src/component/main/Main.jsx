import React from 'react'
import './Mains.css'
import { assets } from '../../assets/assets';
const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Aparichit</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Mr_ace.</span></p>
                    <p>How can I help you today</p>
                </div>
                {/* it contain the card */}
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful place to see on upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest beautiful place to see on upcoming road trip</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div><div className="card">
                        <p>Suggest beautiful place to see on upcoming road trip</p>
                        <img src={assets.message_icon} alt="" />
                    </div><div className="card">
                        <p>Suggest beautiful place to see on upcoming road trip</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                {/* it is the bottem part */}
                <div className="main-bottem">
                    {/* it is a searh bar component */}
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt hear' />
                        <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                    </div>
                    {/* put th icon on search bar */}
                    
                    <p className="bottom-info">
                        Gemine may display inaccurate info, including about the people, So doubble-check it responces.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;