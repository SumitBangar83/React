import React from 'react'
import { useState } from 'react';
export default function Sidebar() {
    const [darkmode , setDarkmode] = useState(false)
    const [morediv , setMorediv] = useState(false)
    let mode={
        color: darkmode ? 'white' : 'black',
        backgroundColor : darkmode ? 'black' : 'white',
        hover: darkmode ? "hover:bg-blue-400 " : "hover:bg-gray-200"
        }
    function changemode(e){
        setDarkmode(!darkmode);
        console.log(darkmode);
    }
    function moreHovered(){
        setMorediv(!morediv);
        
    }
  return (
    <>
   

    {morediv && (
        <div id = "more-div" style={mode} >

            <div className={`more-sections ${mode} ${mode.hover}`}>
                <i className="fa-solid fa-gear"></i>
                <p>Setting</p>
            </div>

            <div className={`more-sections ${mode} ${mode.hover}`}>
                <i class="fa-solid fa-chart-line"></i>
                <p>Your Activity</p>
            </div>

            <div className={`more-sections ${mode} ${mode.hover}`}>
                <i class="fa-solid fa-bookmark"></i>
                <p>Saved</p>
            </div>

            <div className={`more-sections ${mode} ${mode.hover}`} onClick={changemode}>
                <i class="fa-regular fa-sun"></i>
                <p>Switch appearance</p>
            </div>

            <div className={`more-sections ${mode} ${mode.hover}`}>
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>Report a problem</p>
            </div>

        </div>
            )
    }

    <div className = 'w-60 h-screen border-2 border-gray-400'style={mode}>
        <div className = 'w-40 h-12 text-white  m-5' style={mode}>
            <img className = 'w-full h-full' src="https://freepngimg.com/thumb/logo/70011-instagram-script-typeface-myfonts-user-logo-font.png" alt="" />
        </div>
        
        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
        </div>

        <div className={`sections  ${mode} ${mode.hover}`} >
            <i className="fa fa-search " ></i>
            <p>Search</p>
        </div>

        <div className='relative   pl-5 h-fit '>

            {/* More Features */}
          
        </div>
        

        <div  className={`sections ${mode} ${mode.hover}`} >
            <i className="fa fa-compass " ></i>
            <p>Explore</p>
        </div>

        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="fa-regular fa-circle-play" ></i>
            <p>Reels</p>
        </div>

        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="fas fa-paper-plane " ></i>
            <p>Message</p>
        </div>

        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="far fa-plus-square " ></i>
            <p>Notifications</p>
        </div>

        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="fa-solid fa-house " ></i>
            <p>Create</p>
        </div>

        <div className={`sections ${mode} ${mode.hover}`}>
            <i className="far fa-user-circle " ></i>
            <p>Profile</p>
        </div>

        <div className='mt-16'>
            <div className={`sections ${mode} ${mode.hover}`} onClick={moreHovered}>
                <i className="fa-solid fa-bars border-orange-950"></i>
                <p>More</p>
            </div>
        </div>
        
        
    </div>
      
  </>
  )
}
