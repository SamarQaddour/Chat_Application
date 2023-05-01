import React from "react";
import Add from '../img/add.png';
import More from '../img/more.png';
import Cam from '../img/cam.png'
import Masseges from "./Massges";
import Input from "./Input";
const Chat = () => {
    return (
        <div className='chat'>
         <div className='chatInfo'>
             <span>Samar</span>
             <div className='chatIcons'>
                 <img src={Add}  />
                 <img src={More}  />
                 <img src={Cam}  />
             </div>
         </div>
            <Masseges/>
            <Input/>
        </div>
    )
}

export default Chat;